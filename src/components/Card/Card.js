import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
	constructor(props) {
		super(props)
	}
    render() {
        return(
            <div className="weather-card one">
				<div className="top">
					<div className="wrapper">
						<div className="mynav">
							<a href="*"><span className="lnr lnr-chevron-left"></span></a>
							<a href="*"><span className="lnr lnr-cog"></span></a>
						</div>
						<h1 className="heading">{this.props.name}</h1>
						<h3 className="location">{this.props.username}</h3>
						<p className="temp">
							<span className="temp-value">20</span>
							<span className="deg">0</span>
							<a href="*"><span className="temp-type">C</span></a>
						</p>
					</div>
				</div>
				<div className="bottom">
					<div className="wrapper">
						<ul className="forecast">
							<a href="*"><span className="lnr lnr-chevron-up go-up"></span></a>
							<li className="active">
								<span className="date">{this.props.address.street}</span>
								<span className="lnr lnr-sun condition">
									<span className="temp">23<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
							</li>
							<li>
								<span className="date">{this.props.address.city}</span>
								<span className="lnr lnr-cloud condition">
									<span className="temp">21<span className="deg">0</span><span className="temp-type">C</span></span>
								</span>
							</li>
							<li className="active">
								<button onClick={()=>{this.props.consultar_album(this.props.id) }} type="button"  className="btn btn-primary btn-block btn-sm">Ver album</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
        )
    }
}
export default Card;