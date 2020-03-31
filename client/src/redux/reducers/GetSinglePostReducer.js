import { fetchSinglePost} from '../../services/apiCalls';
const SinglePostReducer = (singlePost = {}, action) => {
    if(action.type === "FETCH_SINGLE_POST"){
        fetchSinglePost(action.blogId);
    }
    if(action.type === "SINGLE_POST_FETCHED"){
        singlePost = action.data;
    }
    if(action.type === "CLEAR_SINGLE_POST"){
        return singlePost ={};
    }
    return singlePost
}
export default SinglePostReducer;