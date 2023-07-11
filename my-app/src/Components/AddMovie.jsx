import React from 'react'
import '../Components/AddMovie.css'

function AddMovie() {
    return (
        <>
            <div className="container my-5 align-items-center ">
                <h1 className='text-center text-danger cursor'>Add Movie</h1>
                <div className="row my-5">





                    {/* Title and Year Input Box  */}

                    <div className="d-flex justify-content-center my-auto">
                        <div className='d-block'>
                            <p className=' text-light'>Title</p>
                            <input className='px-5 p-2 img-link1' type="text" />
                        </div>
                        <div className='d-block mx-2'>
                            <p className=' text-light'>Year</p>
                            <input className='px-5 p-2  img-link1' type="text" />
                        </div>

                    </div>

                    {/* Image-Link-Input  */}
                    <div className=" col d-flex justify-content-center">
                        <div className='d-block mx-2'>
                            <p className=' text-light'>Image-Link</p>
                            <input className='px-5 p-2 text-start img-link' type="text" />
                        </div>
                    </div>

                    {/* Description-Input-Box  */}
                    <div className="  d-flex justify-content-center">
                        <div className='d-block mx-2'>
                            <p className=' text-light'>Description</p>

                            <textarea name="" id="" cols="76" rows="5" className='img-link'></textarea>
                        </div>
                    </div>

                    {/* Button  */}
                    <div className="  d-flex justify-content-center my-2">
                    <button type="button" className="btn btn-danger">Submit</button>
                    </div>

                </div>
            </div>







        </>
    )
}

export default AddMovie
