import React, {Component, PropTypes} from 'react';

export default class CardRow extends Component {
  render(){
    const {src, title, description} = this.props;
    return(
      <div className="menu-card">
        <div className="image-wrapper" style={{backgroundImage: `url(${src})`}}>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
