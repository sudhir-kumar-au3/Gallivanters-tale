import React from 'react'
import ReactLoading from 'react-loading'
function Loading() {
    return (
        <div className='d-flex justify-content-center'>
            <ReactLoading type  = {"spinningBubbles"} color ={"#f200ff"} height={"20%"} width= {"20%"} />
        </div>
    )
}

export default Loading
