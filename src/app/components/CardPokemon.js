import React, {Component} from 'react';
import CardRow from './CardRow';

export class CardPokemon extends Component {
  render(){
    return(
      <div className="cards-row">
      {this.props.cards.map((item, index) =>
        <CardRow
          src={item.img}
          title={item.title}
          description={item.description}
          key={index}
        />
      )}
      </div>
    );
  }
}
