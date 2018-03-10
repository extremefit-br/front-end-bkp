import React from 'react'
import './form.css'
import Input from '../input/input.js'
import Button from '../button/button.js'
import FaUser from 'react-icons/lib/fa/user'
import FaLock from 'react-icons/lib/fa/lock'

const Form = props =>(
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
)

export default Form