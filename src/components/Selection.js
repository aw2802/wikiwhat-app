import React from 'react';

class Selection extends React.Component{
	render(){
		return (
			<div className="Selection">
				<h1 id="top-title">What is the title of this wikiHow article?</h1>

				<select className="selectOptions" size="4" name="selectionField" multiple="no" > 
				  <option value="option1">How To Take Action if a Guy Calls You Ugly</option>
				  <option value="option2">How To Cook Fish</option>
				  <option value="option3">How To Survive in a Hotel</option>
				  <option value="option4">How To Make Your Boyfriend Break up With You</option>
				</select>

			</div>
		);
	}
}

export default Selection;