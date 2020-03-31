import React from 'react'
import {connect} from 'react-redux'
import {stateMapper} from '../../redux/store/store'
import Loading from '../_Loading/Loading';
function SingleArticle(props) {
    const {singlePost} = props;
    return (
        <React.Fragment>
            {
                singlePost && singlePost.creator ? <h1 className='text-center text-danger text-capitalize p-3'>work under construction</h1> : <Loading></Loading>
            }
        </React.Fragment>
    )
}

export default connect(stateMapper)(SingleArticle)
