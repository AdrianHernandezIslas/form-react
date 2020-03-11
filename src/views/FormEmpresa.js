import React, { Component } from 'react'
import Bloque from '../components/Bloque'
import Validacion from '../libraries/Validacion'
import './FormEmpresa.css'

export class FormEmpresa extends Component {
    constructor(){
        super();
        this.state = {
            part:1,
            partActual:1,
            empresa:{
                razonSocial:'',
                reponsable:'',
                telefono:'',
                correo:''
            },
            validaciones:{
                vRazonSocial:{mensaje:'',valido:true},
                vResponsable:{mensaje:'',valido:true},
                vTelefono:{mensaje:'',valido:true},
                vCorreo:{mensaje:'',valido:true}
            }
        };
        
    }
    

    handleChangeRazonSocial = (event) => {
        const {value} = event.target;
        const {empresa,validaciones} = this.state;
        empresa.razonSocial = value;
        this.setState({empresa});
        if(!value.length > 0){
            validaciones.vRazonSocial.valido = false;
            validaciones.vRazonSocial.mensaje = 'campo requerido'
        }else{
            validaciones.vRazonSocial.valido = true;
            validaciones.vRazonSocial.mensaje = '';
        }
        
        this.setState({validaciones});
        
    }

    handleChangeResposable = (event) => {
        const {value} = event.target;
        if(Validacion.esTexto(value) ){
            const {empresa,validaciones} = this.state;
            empresa.reponsable = value;
            this.setState({empresa});
            if(!value.length > 0){
                validaciones.vResponsable.valido = false;
                validaciones.vResponsable.mensaje = 'campo requerido'
            }else{
                validaciones.vResponsable.valido = true;
                validaciones.vResponsable.mensaje = '';
            }
            this.setState({validaciones});
        }
        
    }

    handleChangeTelefono = (event) => {
        const {value} = event.target;
        if(Validacion.esNumero(value)){
            const {empresa,validaciones} = this.state;
            empresa.telefono = value;
            this.setState({empresa});
            if(!value.length > 10){
                validaciones.vTelefono.valido = false;
                validaciones.vTelefono.mensaje = 'Minimo 8 numeros'
            }else{
                validaciones.vTelefono.valido = true;
                validaciones.vTelefono.mensaje = '';
            }
            this.setState({validaciones});
        }

        
    };

    handleChangeCorreo = (event) => {
        const {value} = event.target;        
        const {empresa,validaciones} = this.state;
        empresa.correo = value;
        this.setState({empresa});
        if(!Validacion.esCorreo(value)){
            validaciones.vCorreo.mensaje =  'Correo Invalido';
            validaciones.vCorreo.valido =  false;
        }else{
            validaciones.vCorreo.mensaje =  '';
            validaciones.vCorreo.valido =  true;
        }
        this.setState({validaciones}); 
        
    };

    validarCampos = () => {
       /*const {validaciones} = this.state;
       let estaCompleto = true;
       for (const key in validaciones) {
           if (validaciones.hasOwnProperty(key)) {
              
               
           }
       }*/

    }; 

    seccionEmpresa = () => {
        const {razonSocial,reponsable,telefono,correo} = this.state.empresa;
        const {vRazonSocial,vResponsable,vCorreo} = this.state.validaciones;
        return (
            <div>               
                    <div className="form-group">
                        <label>Razon Social * </label>
                        <input className="form-control" type="text"   onChange={this.handleChangeRazonSocial} value={razonSocial} />
                        <div className="text-danger letra-1" >
                            {vRazonSocial.mensaje}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Nombre Responsable *</label>
                        <input className="form-control" type="text" onChange={this.handleChangeResposable} value={reponsable} />
                        <div className="text-danger letra-1" >
                            {vResponsable.mensaje}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Telefono Contacto *</label>
                        <input className="form-control" type="text" onChange={this.handleChangeTelefono} value={telefono} />
                    </div>

                    <div className="form-group">
                        <label>Correo *</label>
                        <input className="form-control" type="text"  onChange={this.handleChangeCorreo} value={correo}/>
                        <div className="text-danger letra-1" >
                            {vCorreo.mensaje}
                        </div>
                    </div>
               
            </div>
        );
    }
    

    render() {
        const {part} = this.state;
       
        return (
            <div className="card">
                <div className="card-header">
                    Prenomina
                </div>
                <div className="card-body">
                    <div className="row">

                        <div className="col-lg-4" >
                            <Bloque titulo="Empresa"   numero={1} activo={part >= 1} />
                            <Bloque titulo="Empleados" numero={2} activo={part >= 2} />
                            <Bloque titulo="Finalizar" numero={3} activo={part >= 3} />
                        </div>
                        <div className="col-lg-8 bg-light">
                            {this.seccionEmpresa()}
                        </div>
                    </div>
                </div>
                <div className="card-footer text-right" >
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className="btn btn-secondary" disabled>anterior</button>
                        <button className="btn btn-primary" >siguiente</button>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default FormEmpresa