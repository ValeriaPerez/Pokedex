import React, {Component, PropTypes} from 'react';

export default class CardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cap: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      cap: true
    });
  }

  render(){
    const {src, name, description} = this.props;
    return(
      <div className="menu-card">
        <div className="menu-card__image-wrapper" style={{backgroundImage: `url(${src})`}}>
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <hr />
        <div>
         {this.state.cap ? 
            <div className="menu-card-content-buttons">
              <p className="menu-card-content-buttons__text menu-card-content-buttons__text--green">¡Capturado!</p>
              <img src="app/styles/images/smile.jpg" className="menu-card-content-buttons__emoji" />
            </div>
            : 
            <div className="menu-card-content-buttons">
              <p className="menu-card-content-buttons__text menu-card-content-buttons__text--red">No esta capturado...</p>
              <img src="app/styles/images/crying.png" className="menu-card-content-buttons__emoji" />
            </div>
          }
         
          {this.state.cap ? '' : <button onClick={this.handleClick} className="menu-card__button">Capturar</button>}
          
        </div>
      </div>
    );
  }
}
