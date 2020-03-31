import React from 'react'
import Footer from '../components/_Footer/Footer'
import Header from '../components/_Header/index'
// import SingleArticle from '../components/_Article/SingleArticle'
import SingleBlogContainer from '../containers/SingleBlogContainer'
function SinglePostPage() {
    return (
        <React.Fragment>
            <Header breadName='Blog Single' linkName='Blog'></Header>
            <SingleBlogContainer></SingleBlogContainer>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default SinglePostPage
