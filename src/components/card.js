import React from 'react';
import Detail from './pokemonDetail';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            abierto: false,
            pokemonDetails: []
        }
    }
    
    abrirModal=(num)=> {
        this.setState({abierto: !this.state.abierto});
        this.infoPokemon(num);

    }

    componentDidMount() {


        const url = 'https://pokeapi.co/api/v2/pokemon/1';
        
        //Consumir la API de pokeapi
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => this.setState({pokemonDetails: data.stats}))
            .catch( error => {
              console.log(error);
            })

            

    }


    infoPokemon = (num) => {
        //1. Guardar los detalles de un pokemon
  
        const url = 'https://pokeapi.co/api/v2/pokemon/';

  
        fetch(`${url}${num}`)
  
              .then(response => response.json())
  
              .then(data => this.setState({pokemonDetails: data.stats}))
  
              .catch( error => {
  
                console.log(error);
  
              })
    
      }

    render() {

        return (
            <div className="card-container">
            <h2>{this.props.name}</h2>
            <h3>{this.props.num}</h3>
            <img src={this.props.img} alt={this.props.name} />
            <Button onClick= {() => this.abrirModal(this.props.num)}> Detalles</Button>

            <Modal isOpen={this.state.abierto}>
                <ModalHeader>
                    {this.props.name}
                </ModalHeader>
                <ModalBody>
                    <img src={this.props.img} alt={this.props.name} />
                    {this.state.pokemonDetails.map((detail, index) => <Detail key= {index} name ={detail.stat.name} stat = {detail.base_stat}/>)}
        
                     
                </ModalBody>
                <ModalFooter>
                    <Button onClick= {() => this.abrirModal(this.props.num)}> Cerrar </Button>
                </ModalFooter>
             </Modal>
             
           
        </div>
        );
    }


}