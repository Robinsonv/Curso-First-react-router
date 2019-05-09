import React, { Component } from 'react'
import axios from 'axios'
import Card from './../components/Card/Card'
import ModalAlbum from './../components/ModalAlbum/ModalAlbum'

class Usuario extends Component {

    url = "https://jsonplaceholder.typicode.com";

    constructor() {
        super()

        this.state = {
            usuarios: [],
            abrir_modal: false,
            album: []
        } 
    }

    componentDidMount() {

        // Make a request for a user with a given ID
        axios.get(this.url+'/users')
        .then((datos) => {
        // handle success
            this.setState({
                usuarios: datos.data
            })
            console.log(datos);
        })
        .catch((error) => {
        console.log(error);
        })
        .finally(() => {
            console.log("Fin de la consulta de Usuarios")
        });

    }

    pintar_usuarios() {
         return this.state.usuarios.map((element, i) =>
            <div className="col-md-4">
                <Card  {...element} consultar_album = {this.consultar_album.bind(this)} />
            </div> 
         );
    }
    

    consultar_album(id) {
        axios.get(this.url+'/albums?userId='+id)
        .then((datos) => {
            console.log("Usuario ",datos);
            this.setState({
                abrir_modal: true,
                album: datos.data
            })
            console.log("Usuario ",this.state.abrir_modal);
        })
        .catch((error) => {
        console.log(error);
        })
        
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Usuarios </h2>
                <div className="row">
                
                   {this.pintar_usuarios()}
                    
                </div>
                <ModalAlbum abrir_modal = {this.state.abrir_modal} album= {this.state.album}/>
            </div>
        )
    }
}

export default Usuario;