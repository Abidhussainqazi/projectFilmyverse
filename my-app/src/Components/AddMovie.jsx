import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from 'firebase/firestore';
import { moviesRef } from '../FireBase/firebase';
import swal from 'sweetalert'

import '../Components/AddMovie.css'

function AddMovie() {
    const [form, setForm] = useState({
        title: "",
        year: "",
        description: "",
        image: "",
        rated:0,
        rating:0,
    })

    // Loading-Spinner 
    const [loading, setLoading] = useState(false);

    //  Create-Function
    const addMovie = async () => {
        setLoading(true);
        try {
            await addDoc(moviesRef, form);
            swal({
                title: "Successfully Added",
                icon: "Success",
                buttons: false,
                timer: 3000,
            })
        } catch (err) {
            swal({
                title: err,
                icon: "error",
                buttons: false,
                timer: 3000,
            })
        }
        setLoading(false);
    }

    return (
        <>
            <div className="container my-5 align-items-center ">
                <h1 className='text-center text-danger cursor'>Add Movie</h1>
                <div className="row my-5">





                    {/* Title and Year Input Box  */}

                    <div className="d-flex justify-content-center my-auto">
                        <div className='d-block'>
                            <p className=' text-light'>Title</p>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                value={form.title}
                                required
                                onChange={(e) => setForm({ ...form, title: e.target.value })}

                                className='px-5 p-2 img-link1' />
                        </div>
                        <div className='d-block mx-2'>
                            <p className=' text-light'>Year</p>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                value={form.year}
                                required
                                onChange={(e) => setForm({ ...form, year: e.target.value })}

                                className='px-5 p-2 img-link1' />
                        </div>

                    </div>

                    {/* Image-Link-Input  */}
                    <div className=" col d-flex justify-content-center">
                        <div className='d-block mx-2'>
                            <p className=' text-light'>Image-Link</p>
                            <input
                                type="img"
                                id='img'
                                name='img'
                                value={form.image}
                                required
                                onChange={(e) => setForm({ ...form, image: e.target.value })}

                                className='px-5 p-2 text-start img-link' />
                        </div>
                    </div>

                    {/* Description-Input-Box  */}
                    <div className="  d-flex justify-content-center">
                        <div className='d-block mx-2'>
                            <p className=' text-light'>Description</p>

                            <textarea
                                name="message"
                                id="message"
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}



                                cols="76" rows="5" maxLength={540} className='img-link'></textarea>
                        </div>
                    </div>

                    {/* Button  */}
                    <div className="  d-flex justify-content-center my-2">
                        <button onClick={addMovie} type="button" className="btn btn-danger">{loading ? <TailSpin height={25} color='white' /> : 'Submit'}</button>
                    </div>

                </div>
            </div>







        </>
    )
}

export default AddMovie
