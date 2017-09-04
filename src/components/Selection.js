import React from 'react';
import { graphql, gql } from 'react-apollo'

class Selection extends React.Component{
	constructor(){
		super();
		this.shuffle = this.shuffle.bind(this);
	}

	shuffle(array){
		var currentIndex = array.length, temporaryValue, randomIndex;

		while( 0 !== currentIndex){
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue=array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	render(){
		var imagesToRender = this.props.wikiPicsQuery.images;
		// need to check if imagesToRender is undefined, else will throw error...
		if(typeof imagesToRender !== "undefined"){
			var mainPicURL=imagesToRender[0].imageURL;
			var mainPicTitle = imagesToRender[0].title;
			console.log(mainPicTitle);
			var mainPicLink = imagesToRender[0].wikiURL;
			var array = [1,2,3,4];

			array = this.shuffle(array);
			var optionArray = [];

			for(var i = 0; i < array.length; i++){
				console.log(i);
				if(array[i] === 1){optionArray[i] = imagesToRender[0].title};
				if(array[i] === 2){optionArray[i] = imagesToRender[1].title};
				if(array[i] === 3){optionArray[i] = imagesToRender[2].title};
				if(array[i] === 4){optionArray[i] = imagesToRender[3].title};
			}

			var title_one= optionArray[0];
			var title_two=optionArray[1];
			var title_three=optionArray[2];
			var title_four=optionArray[3];
		}
		return (
			//will get to randomizing the choices later!
			<div className='selection'>
				<img src={mainPicURL} />
				<h1 id='top-title'>What is the title of this wikiHow article?</h1>
				<select className='selectOptions' size='4' name='selectionField' multiple='no' >
				  <option value='option1'>{title_one}</option>
				  <option value='option2'>{title_two}</option>
				  <option value='option3'>{title_three}</option>
				  <option value='option4'>{title_four}</option>
				</select>

			</div>
		);
	}
}

const ALL_IMAGES_QUERY = gql `
	query wikiPicsQuery{
		images(count: 5){
			imageURL
			wikiURL
			title
		}
	}
`

export default graphql(ALL_IMAGES_QUERY, {name: 'wikiPicsQuery'})(Selection)
