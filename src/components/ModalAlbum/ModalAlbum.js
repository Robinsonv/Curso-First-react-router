import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";



class ModalAlbum extends Component {
    // ### componentWillMount ###
    // se ejecuta antes de que el componente sea montado en el DOM
    // se ejecuta antes de renderizar, tanto en el servidor como en el lado del cliente.

  


    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          album: []
        };
    
        this.toggle = this.toggle.bind(this);
    }

    // metodo que esta escuchando cada ves que se renderiza
    componentWillReceiveProps(newProps) {
        this.setState({
            modal: newProps.abrir_modal,
            album: newProps.album
        });
        console.log(" Modal " ,newProps.abrir_modal)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal</ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.album.map(e => 
                                        
                                        <tr>
                                            <th scope="row">{e.id}</th>
                                            <td>{e.title}</td>
                                            <td  > 
                                                <Link className="btn btn-info text-white" to={`/detail-album/${e.id}/${e.userId}`} ><i className="fas fa-image"></i></Link>
                                            </td>
                                        </tr>
                                    )}
                           
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                
            </div>
            
        )
    }
}

export default ModalAlbum;