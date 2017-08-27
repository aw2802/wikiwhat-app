import React from 'react';
import '../css/Selection.css';

class Selection extends React.Component{
	render(){
		return (
			<div>
				<h1 id="top-title">What is the title of this wikiHow article?</h1>
				<div className="image-holder">
					<img id="mainPic" src="https://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg" />
				</div>

				<select className="selectOptions" size="4" name="selectionField" multiple="no" > 
				  <option value="option1">How To Take Action if a Guy Calls You Ugly</option>
				  <option value="option2">How To Flatulate Secretively (Teenagers)</option>
				  <option value="option3">How To Survive in a Hotel</option>
				  <option value="option4">How To Make Your Boyfriend Break up With You</option>
				</select>

			</div>
		);
	}
}

export default Selection;