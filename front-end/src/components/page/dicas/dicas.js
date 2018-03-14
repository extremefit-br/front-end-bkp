import React, {Fragment} from 'react'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import './dicas.css'

const Dicas = () => (
	<Fragment>
		<Menu />
		<Container className="dicas">
			<Form>
				<label>teste</label>
				<Input />
				<Button>Adicionar Dica</Button>
			</Form>
		</Container>
	</Fragment>
)

export default Dicas