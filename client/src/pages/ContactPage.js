import React from 'react'
import Header from '../components/_Header/index'
import Contact from '../components/_Contact/Contact'
import Footer from '../components/_Footer/Footer'

function ContactPage() {
    return (
        <React.Fragment>
            <Header breadName='Contact' linkName='Contact'></Header>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default ContactPage
