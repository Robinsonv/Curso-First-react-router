import React, { Component } from 'react'
import './DetailAlbum.css'
import axios from 'axios'

class DetailAlbum extends Component {
	constructor(props) {
        super(props)
        this.state = {
            idUser: '',
            Username: '',
            photos: []
        };
    }

    componentDidMount () {
        const { id } = this.props.match.params
        const { user } = this.props.match.params

        axios.get( 'https://jsonplaceholder.typicode.com/users?id='+user)
            .then((datos) => {
            console.log("User id SEEsssasas ",datos.data[0].name);
                this.setState({
                    Username: datos.data[0].name
                });
            
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+id)
        .then((datos) => {
            console.log("photos ",datos);
            this.setState({
                photos: datos.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
      }

    render() {
        return(
            <div className="container-fluid">
                <h2 className="text-center">Album de {this.state.Username}</h2>
                <div className="row">
                    {this.state.photos.map(e => 
                                        
                        <div className="col-md-4 mt-1" key={e.id}>
                            <div className="card text-center">
                                
                                <img src={e.thumbnailUrl} alt={`image del album ${e.title}`} title={`image ${e.title}`} ></img>
                                <div className="card-body" id="card">
                                    <h5 className="card-title">{e.title}</h5>
                                </div>
                                <div className="card-footer text-muted">
                                    <div className="row">
                                        <div className="col">
                                            <a href="#"><i className="fas fa-map"></i></a>
                                        </div>
                                        <div className="col">
                                            <a href="#"><i className="fas fa-envelope"></i></a>
                                        </div>
                                        <div className="col">
                                            <a href="#"><i className="fas fa-phone"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )}
                   
                </div>
            </div>
        )
    }
}
export default DetailAlbum;