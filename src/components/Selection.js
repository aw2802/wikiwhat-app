import React from 'react';
import { graphql, gql } from 'react-apollo'

class Selection extends React.Component{

	render(){

		var imagesToRender = this.props.wikiPicsQuery.images;
		console.log(imagesToRender);
		// need to check if imagesToRender is undefined, else will throw error...
		if(typeof imagesToRender !== "undefined"){
			var mainPicURL=imagesToRender[0].imageURL;
			var mainPicTitle = imagesToRender[0].title;
			var mainPicLink = imagesToRender[0].wikiURL;
			var url_one = imagesToRender[1].title;
			var url_two = imagesToRender[2].title;
			var url_three = imagesToRender[3].title;
		}
		return (
			//will get to randomizing the choices later!
			<div className='selection'>
				<img src={mainPicURL} />
				<h1 id='top-title'>What is the title of this wikiHow article?</h1>
				<select className='selectOptions' size='6' name='selectionField' multiple='no' >
				  <option value='option1'>{mainPicTitle}</option>
				  <option value='option2'>{url_one}</option>
				  <option value='option3'>{url_two}</option>
				  <option value='option4'>{url_three}</option>
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
