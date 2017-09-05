import React from 'react';
import PropTypes from 'prop-types';

import { getLocalStorageItem } from '../utils/helper-functions';

class Answer extends React.Component{

  constructor(){
  	super();
    this.getIcon = this.getIcon.bind(this);
    this.getTitle = this.getTitle.bind(this);
  	this.getStyle = this.getStyle.bind(this);
  }

  getTitle(isCorrect) {
    return (isCorrect) ? 'CORRECT' : 'WRONG';
  }

  getStyle(isCorrect) {
    const color = (isCorrect) ? 'green' : 'red';
    return { color };
  }

  getIcon(isCorrect) {
    return (isCorrect) ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove';
  }

	render(){
    const isCorrect = this.props.isCorrect;
    const correctArticle = this.props.correctArticle;

		return (
			<div className='resultBox' display={!this.props.displaySelection}>
				<span className={this.getIcon(isCorrect)} style={this.getStyle(isCorrect)}
           aria-hidden='true'></span>
				<div className='result'>
					<p>{this.getTitle(isCorrect)}</p>
          <p>
            <a href={ correctArticle.wikiURL } target='_blank'>
              { correctArticle.title }
            </a>
          </p>
					<button type='submit' onClick={this.props.onClick}>Play Again</button>
				</div>
			</div>
		);
	}
}

export default Answer;
