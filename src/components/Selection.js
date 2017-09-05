import React from 'react';

class Selection extends React.Component{

	render() {
		const correctArticle = this.props.correctArticle;
		const imagesList = this.props.imagesList;

		return (
			<div>
				<select className='selectOptions' size='4' name='selectionField' multiple='no'
					onChange={ (e) => { this.props.onSelection(e, correctArticle) }}>
					{ imagesList }
				</select>
			</div>
		);
	}
}

export default Selection;
