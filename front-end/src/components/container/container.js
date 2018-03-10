import React from 'react'
import './container.css'

const Container = ({ className, children }) =>(
    <section className={['container ', className].join('')}>
        {children}
    </section>
)

export default Container