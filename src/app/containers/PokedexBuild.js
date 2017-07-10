import React, {Component} from 'react';
import {CardPokemon} from '../components/CardPokemon';

const containerPokemon = [
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    type:"planta",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    name: "Bulbasaur"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/002.png",
    name: "Ivysaur",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/003.png",
    name: "Venusaur",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    name: "Charmander",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"fuego"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/005.png",
    name: "Charmeleon",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"fuego"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/006.png",
    name: "Charizard",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"fuego"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/007.png",
    name: "Squirtle",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"agua"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/008.png",
    name: "Wartortle",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"agua"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/009.png",
    name: "Blastoise",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"agua"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/010.png",
    name: "Caterpie",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/011.png",
    name: "Metapod",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/012.png",
    name: "Butterfree",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/013.png",
    name: "Weedle",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/014.png",
    name: "Kakuna",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/015.png",
    name: "Beedrill",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/016.png",
    name: "Pidgey",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"aire"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/017.png",
    name: "Pidgeotto",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"aire"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/018.png",
    name: "Pidgeot",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"aire"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/019.png",
    name: "Rattata",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"normal"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/020.png",
    name: "Raticate",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"normal"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/021.png",
    name: "Spearow",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"aire"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/022.png",
    name: "Fearow",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"aire"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/023.png",
    name: "Ekan",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"posion"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/024.png",
    name: "Arbok",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"posion"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/025.png",
    name: "Pikachu",
    description: "Este Pokémon es bastante fuerte al principio, lo que te permitirá ganar y ganar puntos de experiencia. te será de muy poca ayuda en el primer gimnasio,",
    type:"electrico"
  },
];

export default class PokedexBuild extends Component {
	constructor(props) {
		super(props);
		this.state = {
      open: false,
			typeFilter: 'all',
      search: ''
		}
    this.handleClickFilters = this.handleClickFilters.bind(this);
	}

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleClickFilters = (filter) => {
    this.setState({
      typeFilter: filter
    });
  }
 
  searchBy = (event) => {
    this.setState({
      search: event.target.value
    });
    console.log(search);
  }

  render() {
    const filters = item => {
      if(this.state.typeFilter === 'all')
        return true
        return item.type === this.state.typeFilter;
      }

    const pokemon = item => {
      if(this.state.search === containerPokemon.name)
        return true
        return item.name === this.state.search;
        console.log(search)
      }

    const filteredTypes = containerPokemon.filter(filters);
    const elements = filteredTypes
    const pokemons = containerPokemon.filter(pokemon);

    return (
      <div className="container-pokedex">
      	<img src="./app/logo.png" title="Logo Pokemon" alt="Logo" className="container-pokedex__image" />

        <form>
          <input 
            type="text"
            className="container-pokedex__input"
            placeholder="¿Que pokemon buscas?" 
            onChange={this.searchBy} />
        </form>

        <div className="container-pokedex__content-pokemon">
          <button onClick={this.handleOpen} className="menu-card__button menu-card__button--filter">Filtrar por tipo</button>

          {this.state.open ?
            <div className="container-pokedex__content-buttons">
              <button className={this.state.typeFilter === "all" ? 'active' : ''} onClick={()=> this.handleClickFilters("all")}>
                <span>TODOS</span>
              </button>
              <button className={this.state.typeFilter === "electrico" ? 'active' : ''} onClick={()=> this.handleClickFilters("electrico")}>
                <span>ELECTRICO</span>
              </button>
              <button className={this.state.typeFilter === "agua" ? 'active' : ''} onClick={()=> this.handleClickFilters("agua")}>
                <span>AGUA</span>
              </button>
              <button className={this.state.typeFilter === "planta" ? 'active' : ''} onClick={()=> this.handleClickFilters("planta")}>
                <span>PLANTA</span>
              </button>
              <button className={this.state.typeFilter === "posion" ? 'active' : ''} onClick={()=> this.handleClickFilters("posion")}>
                <span>POSION</span>
              </button>
              <button className={this.state.typeFilter === "normal" ? 'active' : ''} onClick={()=> this.handleClickFilters("normal")}>
                <span>NORMAL</span>
              </button>
            </div>
            :
            null
          }

          <CardPokemon cards={pokemons} /> 
          <CardPokemon cards={elements} />   

        </div>
      </div>
    );
  }
}
