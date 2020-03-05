import React from 'react'
import Header from '../components/_Header/index'
import BlogEditor from '../components/_BlogEditor/BlogEditor'

function TeamPage() {
    return (
        <React.Fragment>
            <Header breadName='About' linkName='Team'></Header>
            Team Page
            <BlogEditor></BlogEditor>
        </React.Fragment>
    )
}

export default TeamPage
