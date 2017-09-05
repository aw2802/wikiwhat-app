import React from 'react';
import replace from 'lodash';

class Answer extends React.Component{

  constructor(){
  	super();

    this.getTitle = this.getTitle.bind(this);
  	this.getStyle = this.getStyle.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  onClick(event) {
    console.log(this.props);
    // this.context.router.transitionTo(`user/${this.props.params.userId}`);
  }

  getTitle(isCorrect) {
    return (isCorrect === 'true') ? 'CORRECT' : 'WRONG';
  }

  getStyle(isCorrect) {
    const color = (isCorrect === 'true') ? 'green' : 'red';
    return { color };
  }

  getIcon(isCorrect) {
    return (isCorrect === 'true') ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove';
  }

  getWikiArticle(event, article) {
    const decoded = decodeURI(article);
    return `http://www.wikihow.com/${replace(decoded, / /g, '-')}`;
  }

	render(){
    const isCorrect = this.props.params.isCorrect;
    const correctArticle = this.props.params.article;

		return (
			<div className='selection'>
				<div className='resultBox'>
					<span className={this.getIcon(isCorrect)} style={this.getStyle(isCorrect)}
             aria-hidden='true'></span>
					<div className='result'>
						<p>{this.getTitle(isCorrect)}</p>
            <p>
              <a href={ (e) => { this.getWikiArticle(e, correctArticle) } } target='_blank'>
                { correctArticle }
              </a>
            </p>
						<button type='submit' onClick={(e) => { this.onClick(e) }}>Play Again</button>
					</div>
				</div>

			</div>
		);
	}
}

Answer.contextTypes = {
  router: PropTypes.object
};


export default Answer;
