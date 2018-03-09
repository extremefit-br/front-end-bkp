import React from 'react'
import './login.css'
import LogoVidaSaudavel from './logo_vida_saudavel.png'
import LogoSESI from './sesi.png'
import Form from '../../form/form.js'

const Login = props => (
    <section className = "login">
        <span>
            <img className='logo-app' src={LogoVidaSaudavel} alt="" />
        </span>
        <Form /> 
    </section>
)

export default Login