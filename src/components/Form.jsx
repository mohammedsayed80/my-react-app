import React from 'react'

const Form = () => {
    return (
        <div className=' rounded-3 shadow mt-5 form'>
            <form method='POST' className='row'>
                <div className='d-flex flex-column col-6'>
                    <label htmlFor="name">your name (required)</label>
                    <input className='rounded-3 form-control' type="text" name="name" id="name" required />
                </div>
                <div className='d-flex flex-column col-6'>
                    <label htmlFor="email">your email (required)</label>
                    <input className='rounded-3 form-control' type="email" name="email" id="email" required />
                </div>
                <div className='d-flex flex-column col-6'>
                    <label htmlFor="subject">subject</label>
                    <input className='rounded-3 form-control' type="text" name="subject" id="subject" />
                </div>
                <div className='d-flex flex-column col-6'>
                    <label htmlFor="subject">department</label>
                    <select className='select' name="department" id="department">
                        <option value="department">business department</option>
                        <option value="department">personal department</option>
                        <option value="department">support department</option>
                        <option value="department">others</option>
                    </select>
                </div>
                <div className='d-flex flex-column col-12'>
                    <label htmlFor="message">
                        message
                    </label>
                    <textarea className='form-control' type="text" name="message" id="message" style={{maxHeight:"130px"}} />
                </div>
                <button className='btn btn-primary col-2' onClick={(e)=>(e.preventDefault())} type="submit">send</button>
            </form>
        </div>
    )
}

export default Form
