import React from 'react';

class Answer extends React.Component{

  constructor(){
  	super();

    this.getTitle = this.getTitle.bind(this);
  	this.getStyle = this.getStyle.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  getTitle(isCorrect) {
    return (isCorrect) ? 'CORRECT' : 'WRONG';
  }

  getStyle(isCorrect) {
    const color = (isCorrect) ? 'green' : 'red';
    return { color };
  }

  getIcon(isCorrect) {
    return isCorrect ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove';
  }

	render(){
    const { isCorrect, correctArticle } = this.props;
		return (
			<div className='selection'>
				<h1 id='top-title'>What is the title of this wikiHow article?</h1>

				<div className='resultBox'>
					<span className={this.getIcon(isCorrect)} style={this.getStyle(isCorrect)}
             aria-hidden='true'></span>
					<div className='result'>
						<p>{this.getTitle(isCorrect)}</p>
            <p>
              <a href={correctArticle.wikiURL} target='_blank'>
                {correctArticle.title}
              </a>
            </p>
						<button type='submit'>Play Again</button>
					</div>
				</div>

			</div>
		);
	}
}

export default Answer;
