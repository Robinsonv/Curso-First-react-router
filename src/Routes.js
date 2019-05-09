import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Usuario from './pages/Usuario'
import Blog from './pages/Blog'
import DetailAlbum from './components/DetailAlbum/DetailAlbum'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={()=> <h1>Bienvenido</h1>} />
                <Route path="/usuarios" exact component={Usuario} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/detail-album/:id/:user" component={DetailAlbum} />
            </Switch>
        )
    }
}

export default Routes;