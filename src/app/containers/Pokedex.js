import React, {Component} from 'react';
import Card from './../components/Card';
import axios from 'axios';

export default class Pokedex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			loading: true
		}
	}

	componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
      .then(function (response) {
        list: response.obj.data
        loading: false
		    console.log(response);
		  })
		  .catch(function (error) {
		  	loading: true
		  });
  }

  render() {
    return (
      <div style={{textAlign: 'center', backgroundColor: 'red', margin: '0', padding: '0', height: '100%',}}>
      	<img src="./app/logo.png" style={{maxWidth: '60%', margin: '30px',}} title="Logo Pokemon" alt="Logo" />
        <div>
        	{this.state.loading ? 
        		<img src="https://media.giphy.com/media/rFrMBUUuKs22Y/giphy.gif"/> 
        	: null}
          {this.state.list.map((obj, index) => {
           return <Card
             index={index}
             key={index}
             image={this.props.image}
             type={type}
             />;
          })}
         </div>
      </div>
    );
  }
}
