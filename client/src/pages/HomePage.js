import React from 'react'
import Header from '../components/_Header/index'
import Footer from '../components/_Footer/Footer'
import BlogContainer from '../containers/BlogContainer'
function HomePage() {
    return (
        <div>
            <Header></Header>
            <section className="ftco-section bg-light">
            <BlogContainer></BlogContainer>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default HomePage
