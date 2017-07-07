import React, {Component} from 'react';
import {CardPokemon} from '../components/CardPokemon';

const containerPokemon = [
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    type:"electrico",
    description: "<p>hola</p>",º
    title: "Paquete Ray"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Pollo Rostizado Tradicional",
    type:"electrico"
  },
  {
    img: ".http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Pollo Ranchero Adobado",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Pierna y Muslo",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Salchicha Jumbo",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Pierna de Pavo",
    type:"electrico"
  },
  {
    img: ".http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Cuarto de Pollo Ranchero Adobado / Rostizado Tradicional",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Pescuecitos",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Alitas",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Tacos de Pollo",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Tortas de Pollo",
    type:"electrico"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Agua Frescas",
    type:"Agua"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Refrescos",
    type:"Agua"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Salchichas Cocteleras",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Nuggets",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Papas Cambray",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Papas Caseras Ray",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Frijoles Refritos",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Nuestras Salsas: Morita, Árbol, Cacahuate, Verde Asada y Guacamole",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Arroz",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Spaguetti",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Codito",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Tortillas",
    type:"planta"
  },
  {
    img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    title: "Nopales *por temporada",
    type:"planta"
  },
];

export default class PokedexBuild extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typeFilter: 'all'
		}
    this.handleClickFilters = this.handleClickFilters.bind(this);
	}

  handleClickFilters = (filter) => {
    this.setState({
      typeFilter: filter
    });
  }

  render() {
    const filters = item => {
      if(this.state.typeFilter === 'all')
        return true
      return item.type === this.state.typeFilter;
    }

    const filteredTypes = containerPokemon.filter(filters);
    const elements = filteredTypes

    return (
      <div style={{textAlign: 'center', backgroundColor: 'red', margin: '0', padding: '0', height: '100%',}}>
      	<img src="./app/logo.png" style={{maxWidth: '60%', margin: '30px',}} title="Logo Pokemon" alt="Logo" />
        <div>
        	{this.state.loading ? 
        		<img src="https://media.giphy.com/media/rFrMBUUuKs22Y/giphy.gif"/> 
        	: null}
          <div className="">
            <div className="">
              <h4 style={{color: 'white'}}>Demo</h4>
              <div className="">
                <button className={this.state.typeFilter === "all" ? 'active' : ''} onClick={()=> this.handleClickFilters("all")}>
                  <span>TODO</span>
                </button>
                <button className={this.state.typeFilter === "electrico" ? 'active' : ''} onClick={()=> this.handleClickFilters("electrico")}>
                  <span>ELECTRICO</span>
                </button>
                <button className={this.state.typeFilter === "Agua" ? 'active' : ''} onClick={()=> this.handleClickFilters("Agua")}>
                  <span>AGUA</span>
                </button>
                <button className={this.state.typeFilter === "planta" ? 'active' : ''} onClick={()=> this.handleClickFilters("planta")}>
                  <span>PLANTA</span>
                </button>
              </div>
              <CardPokemon cards={elements}/>
            </div>
          </div>
         </div>
      </div>
    );
  }
}
