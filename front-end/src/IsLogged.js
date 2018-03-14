import React from 'react'

const login = (OtherComponent) => {
	const isLogged = localStorage.getItem('isLogged')
	if (isLogged){
		return OtherComponent
	}
	return window.alert('Nao tá logado, deve ir para o login')
}

export default login