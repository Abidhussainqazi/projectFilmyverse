import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import app from '../firebase/firebase';
import swal from 'sweetalert';
// import bcrypt from 'bcrypt';
import { usersRef } from '../firebase/firebase';
import { addDoc } from 'firebase/firestore';

const auth = getAuth(app);

function Signup() {

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [optSent, setOtpSent] = useState(false);
    const [OTP, setOTP] = useState("");

    // const generateRecaptha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //             // reCAPTCHA solved, allow signInWithPhoneNumber.
    //         }
    //     }, auth);
    // }


    const requestOtp = () => {
        setLoading(true);
        // generateRecaptha();
        // let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+92${form.mobile}`)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
                swal({
                    text: "OTP Sent",
                    icon: "success",
                    buttons: false,
                    timer: 3000,
                });
                setOtpSent(true);
                setLoading(false);
            }).catch((error) => {
                console.log(error)
            })
    }



    const verifyOTP = () => {
        try {
            setLoading(true);
            window.confirmationResult.confirm(OTP).then((result) => {
                uploadData();
                swal({
                    text: "Sucessfully Registered",
                    icon: "success",
                    buttons: false,
                    timer: 3000,
                });
                // navigate('/login')
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const uploadData = async ()=>{
        await addDoc(usersRef,{
            form
        });
    }


    // const uploadData = async () => {
    //     try {
    //         const salt = bcrypt.genSaltSync(10);
    //         var hash = bcrypt.hashSync(form.password, salt);
    //         await addDoc(usersRef, {
    //             name: form.name,
    //             password: hash,
    //             mobile: form.mobile
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    return (
        <>
            <div className="d-flex flex-column justify-content-center text-light mt-5">
                {optSent ?
                    <>
                        <h1 className='text-center text-danger'>Sign Up</h1>

                        <div className='text-center my-5'>

                            <p className='d-flex flex-column text-light'>OTP</p>

                            <input
                                value={OTP}
                                onChange={(e) => setOTP(e.target.value)}
                                id='message'
                                name='message'
                                className=' w-25 p-2 mx-auto '
                                style={{ borderRadius: "8px", backgroundColor: "#212529", color: 'white', border: "none" }}

                            />
                        </div>
                        <div className="  d-flex justify-content-center " >
                            <button
                                onClick={verifyOTP}
                                type="button"
                                className="btn btn-danger">
                                {loading ? <TailSpin height={25} color='white' /> : 'Confirm OTP'}
                            </button>
                        </div>
                    </>
                    :


                    //  Real-Code 
                    <>
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
                            <button
                                onClick={requestOtp}
                                type="button"
                                className="btn btn-danger">
                                {loading ? <TailSpin height={25} color='white' /> : 'Request OTP'}
                            </button>
                        </div>
                    </>
                }
                <div className='text-center mt-4'>
                    <p>Already have an account ? <Link to={'/login'} style={{ textDecoration: "none" }}><span className='text-primary' s>Login</span></Link></p>
                </div>



                <div id="recaptcha-container" ></div>


            </div>
        </>
    )
}

export default Signup;
