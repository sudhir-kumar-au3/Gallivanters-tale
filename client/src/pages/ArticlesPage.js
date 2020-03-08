import React from 'react'
import Header from '../components/_Header/index'
import BlogContainer from '../containers/BlogContainer'
import Footer from '../components/_Footer/Footer'

function ArticlesPage() {
    return (
        <React.Fragment>
            <Header></Header>
            <section className="ftco-section bg-light">
            <BlogContainer></BlogContainer>
            </section>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default ArticlesPage
