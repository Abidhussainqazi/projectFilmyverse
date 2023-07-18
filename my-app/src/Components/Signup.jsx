import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'

function Signup() {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        password: "",
    });

    return (
        <>
            <div className="d-flex flex-column justify-content-center text-light mt-5">
                <h1 className='text-center text-danger'>Sign Up</h1>

                <div className='text-center my-5'>

                    <p className='d-flex flex-column text-light'>Name</p>

                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        id='message'
                        name='message'
                        className=' w-25 p-2 mx-auto '
                        style={{ borderRadius: "8px", backgroundColor: "#212529", color: 'white', border: "none" }}
                        type=""
                    />


                    <p className='d-flex flex-column text-light mt-4'>Mobile-Number</p>

                    <input
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        id='message'
                        name='message'
                        className=' w-25 p-2 mx-auto '
                        style={{ borderRadius: "8px", backgroundColor: "#212529", color: 'white', border: "none" }}
                        type="number"
                    />



                    <p className='d-flex flex-column text-light mt-4'>Password</p>

                    <input
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        id='message'
                        name='message'
                        className=' w-25 p-2 mx-auto '
                        style={{ borderRadius: "8px", backgroundColor: "#212529", color: 'white', border: "none" }}
                        type=""
                    />
                </div>


                <div className="  d-flex justify-content-center " >
                    <button type="button" className="btn btn-danger">Request OTP</button>
                </div>
                <div className='text-center mt-4'>
                    <p>Already have an account ? <Link to={'/login'} style={{ textDecoration: "none" }}><span className='text-primary' s>Login</span></Link></p>
                </div>






            </div>
        </>
    )
}

export default Signup
