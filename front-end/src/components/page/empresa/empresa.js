import React from 'react'
import { Redirect } from 'react-router-dom'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'

const Empresa = props => (
    <React.Fragment>
        <Menu />
        <Container>
            <h1>Olá!</h1>
        </Container>
    </React.Fragment>
)

export default Empresa