import React from 'react';

class Selection extends React.Component{
	render(){
		return (
			<div>
				<img src='' />
				<select size="3" name="selectionField" multiple="no" > 
				  <option value="option1" >option1 </option>
				  <option value="option2" >option2</option>
				  <option value="option3" >option3</option>
				</select>
			</div>
		);
	}
}

export default Selection;