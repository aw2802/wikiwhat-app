import React from 'react';
import { graphql } from 'react-apollo';
import { shuffle, camelCase, toString } from 'lodash';
import PropTypes from 'prop-types';

import { getImagesGQL } from '../utils/queries';

class Selection extends React.Component{

	onChange(event, correctArticle) {
		const selected = event.target.value;
		const isCorrect = toString(correctArticle.title === selected);
		this.context.router.transitionTo(`answer/${correctArticle.title}/${isCorrect}`);
	}

	render() {
		const imagesToRender = this.props.wikiPicsQuery.images;
		let mainPicture = {};
		let imagesList;

		if (typeof imagesToRender !== "undefined") {
			const imagesArray = shuffle(imagesToRender);
			mainPicture = imagesToRender[0];

			imagesList =
				imagesArray.map(function(image) {
					const ccTitle = camelCase(image.title);
  				return <option key={ccTitle} value={image.title}>{image.title}</option>;
				});
		}

		return (
			<div className='selection'>
				<img alt='Can you guess what wikiHow article is associated?'
					src={ mainPicture.imageURL } />
				<h1 id='top-title'>What is the title of this wikiHow article?</h1>
				<select className='selectOptions' size='4' name='selectionField' multiple='no'
					onChange={ (e) => { this.onChange(e, mainPicture) }}>
					{ imagesList }
				</select>
			</div>
		);
	}
}

Selection.contextTypes = {
  router: PropTypes.object
};

export default graphql(getImagesGQL(4), { name: 'wikiPicsQuery' })(Selection)
