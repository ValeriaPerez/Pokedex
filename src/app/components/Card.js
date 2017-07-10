import React, {Component} from 'react';

export default class Card extends Component {
	
  render() {
  	const {image, name, type} = this.props.pokemon;

    return (
      <div style={{color:'white', marginTop: '30px',}}>
        <img 
        	src={image} 
        	style={{maxWidth: '60%',backgroundColor: 'white',}} 
        />
      	<h4>{name}</h4>
      	<p>{types.join(', ')}</p>
      </div>
    );
  }
}
