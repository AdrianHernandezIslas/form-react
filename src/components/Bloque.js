import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Bloque extends Component {
    static propTypes = {
        titulo:PropTypes.string,
        numero:PropTypes.number,
        activo:PropTypes.bool
    }

    constructor(){
        super();
        this.state = {
            activo:true
        }
    }

    render() {
        const {titulo,numero,activo} = this.props;
        return (
            <button className="btn btn-primary btn-block p-4 text-left" disabled={!activo} >
              <span className="number">{numero}. </span>
              {titulo}
            </button>
        )
    }
}

export default Bloque
