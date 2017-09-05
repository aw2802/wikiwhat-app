import React from 'react';
import { graphql } from 'react-apollo';
import { shuffle, camelCase, merge, isEmpty } from 'lodash';
import { ApolloClient, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';

import Answer from './Answer';
import Selection from './Selection';

import { getImagesGQL, getUpdateScoreGQL } from '../utils/queries';
import { setLocalStorage, getLocalStorageItem } from '../utils/helper-functions';

class GuessArticle extends React.Component {
	constructor() {
		super();
		this.state = {
			displaySelection: true,
			imagesList: [],
			correctArticle: {},
			isCorrect: true
		};

		this.playAgain = this.playAgain.bind(this);
		this.onSelection = this.onSelection.bind(this);
		this.getImagesList = this.getImagesList.bind(this);
		this.getCorrectArticle = this.getCorrectArticle.bind(this);
		this.generateRandomImageList = this.generateRandomImageList.bind(this);
	}

  /**
    * in order to perserve state + increase speed, copy currrent state before
    * updating via setState
    */
	onSelection(event, correctArticle) {
		const selected = event.target.value;
    const newState = {...this.state};

    newState.displaySelection = false;
    newState.isCorrect = (correctArticle.title === selected);
    newState.correctArticle = correctArticle

		this.setState(newState);
	}

	generateRandomImageList() {
		const imagesToRender = this.props.wikiPicsQuery.images;
		let correctArticle = {};
		let imagesList;

		if (typeof imagesToRender !== "undefined") {
			const imagesArray = shuffle(imagesToRender);
			correctArticle = imagesToRender[0];

			imagesList =
				imagesArray.map(function(image) {
					const ccTitle = camelCase(image.title);
  				return <option key={ccTitle} value={image.title}>{image.title}</option>;
				});
		}

		return { correctArticle, imagesList };
	}

	playAgain() {
		const newImages = this.generateRandomImageList();
    const newState = {...this.state };

    newState.imagesList = newImages.imagesList;
    newState.correctArticle = newImages.correctArticle;
    newState.displaySelection = true;

		const isCorrect = this.state.isCorrect;

		const user = getLocalStorageItem('user');
		const mutation = getUpdateScoreGQL(user.userId, {
			streak: (isCorrect) ? 1 : 0,
			totaCorrect: (isCorrect) ? 1 : -1
		});

		this.props.client.mutate({ mutation })
			.then((results) => {
					const user =
						(results.data.register !== null) ? results.data.register : null;

					if (user !== null) {
						const ls = setLocalStorage('user', user );
						this.setState(ls);

						this.context.router.transitionTo(`/user/${user.id}`);
					} else {
            this.setState({
        			alert: 'Username already exists. Please try a new one.',
        			alertClass: 'alert alert-danger'
        		});
					}
	    })
      .catch(error => {
        this.setState({
          alert: 'Username already exists. Please try a new one.',
          alertClass: 'alert alert-danger'
        });
      });

		this.setState(newState);

		window.location.reload();
	}

	/**
		* allows first time render of article, but defaults to
		* "defaults object" if state is empty
		*/
	getImagesList(defaultList) {
		console.log(!isEmpty(this.state.imagesList));
		return (!isEmpty(this.state.imagesList)) ? this.state.imagesList : defaultList;
	}

	getCorrectArticle(defaultArticle) {
		return (!isEmpty(this.state.correctArticle)) ? this.state.correctArticle : defaultArticle;
	}

	render(){
  	const defaults = this.generateRandomImageList();

  	let partial;
  	let title = 'What is the title of this wikiHow article?';

  	if (this.state.displaySelection) {
  		partial = <Selection onSelection={ this.onSelection }
  			imagesList={ this.getImagesList(defaults.imagesList) }
  			correctArticle={ this.getCorrectArticle(defaults.correctArticle) } />;
  	} else {
  		partial = <Answer correctArticle={ this.getCorrectArticle(defaults.correctArticle) }
  			isCorrect={this.state.isCorrect } onClick={ this.playAgain } />;
    }

    return (
  		<div className='selection'>
  			<img src={ (this.getCorrectArticle(defaults.correctArticle)).imageURL } />
  			<h1 id='top-title'>{ title }</h1>
  			{ partial }
  		</div>
    );
	}
}

GuessArticle.propTypes = {
		client: PropTypes.instanceOf(ApolloClient).isRequired
};

export default graphql(getImagesGQL(4), { name: 'wikiPicsQuery' })(withApollo(GuessArticle));
