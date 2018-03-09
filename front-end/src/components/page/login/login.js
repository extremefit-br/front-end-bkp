import React from 'react'
import './login.css'
import LogoVidaSaudavel from './logo_vida_saudavel.png'
import LogoSESI from './sesi.png'
import FaUser from 'react-icons/lib/fa/user'
import FaLock from 'react-icons/lib/fa/lock'
import Input from '../../input/input.js'
import Button from '../../button/button.js'


const Login = props => (
    <section className = "login">
        <span>
            <img className='logo-app' src={LogoVidaSaudavel} alt="" />
        </span>
        <form>
            <div>
                <FaUser /> <Input />
            </div>
            <div>
                <FaLock /> <Input />
            </div>
            <a className='link-esqueci-senha'>Esqueci minha senha</a>
            <Button />
        </form>  
    </section>
)

export default Login