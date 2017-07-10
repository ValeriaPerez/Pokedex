import React, {Component} from 'react';
import CardRow from './CardRow';

export class CardPokemon extends Component {
  render(){
    return(
      <div>
      {this.props.cards.map((item, index) =>
        <CardRow
          src={item.img}
          name={item.name}
          description={item.description}
          key={index}
        />
      )}
      </div>
    );
  }
}
