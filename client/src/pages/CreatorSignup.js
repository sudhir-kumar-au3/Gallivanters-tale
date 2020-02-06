import React from 'react'
import SignupForm from '../components/SignupForm'
function CreatorSignup() {
    return (
        <React.Fragment>
        <div className='container-fluid signup-page p-4'>
            <div className='row mt-3 mb-3'>
            <div className='col-md-2'></div>   
            <div className='col-md-8'>
                <SignupForm></SignupForm>
            </div>
            <div className='col-md-2'></div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default CreatorSignup
