import React,{useEffect} from 'react'
import {stateMapper} from '../redux/store/store';
import {connect} from 'react-redux';
import SingleArticle from '../components/_Article/SingleArticle'
import { useParams } from 'react-router-dom';
function SingleBlogContainer(props) {
    const {blogId} = useParams();
    async function fetchData(){
        const res = await props.dispatch({
            type : "FETCH_SINGLE_POST",
            blogId: blogId
        })
        return res
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <SingleArticle></SingleArticle>
        </div>
    )
}

export default connect(stateMapper)(SingleBlogContainer)

