import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { reviewsRef, db } from '../firebase/firebase';
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import swal from 'sweetalert'

function Reviews({ id, prevRating, userRated }) {

    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [reviewsLoading, setReviewsLoading] = useState(false);
    const [form, setForm] = useState("");
    const [data, setData] = useState([]);

    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(reviewsRef, {
                movieid: id,
                name: "Hassan",
                rating: rating,
                thought: form,
                timestamp: new Date().getTime()
            })

            const ref = doc(db, "movies", id);

            await updateDoc(ref, {
                rating: prevRating + rating,
                rated: userRated + 1,
            })




            setRating(0);
            setForm("");
            swal({
                title: "Review Sent",
                icon: "Success",
                buttons: false,
                timer: 3000,
            })

        } catch (error) {
            swal({
                title: error.message,
                icon: "error",
                buttons: false,
                timer: 3000,
            })
        }
        setLoading(false);
    }

    useEffect(() => {
        async function getData() {
            setReviewsLoading(true);

            let que = query(reviewsRef, where('movieid', '==', id))
            const querySnapshot = await getDocs(que);

            querySnapshot.forEach((doc) => {
                setData((prev) => [...prev, doc.data()])
            })


            setReviewsLoading(false);
        }
        getData();
    }, [])

    return (
        <>
            <div className="w-100 text-start" >
                <ReactStars
                    value={rating}
                    size={25}
                    half={true}
                    onChange={(rate) => setRating(rate)}


                />

                <input
                    value={form}
                    onChange={(e) => setForm(e.target.value)}
                    style={{ backgroundColor: "#212529", color: 'white', border: "none" }}
                    className='w-100 p-1 my-1'
                    placeholder='Share Your Thought Here'
                    type=""
                />

                <button
                    onClick={sendReview}
                    className='btn w-100 my-2 btn-danger p-2'
                >

                    {loading ? <div className='d-flex justify-content-center'><TailSpin height={15} color='white' /> </div> : 'Share'}

                </button>

                {reviewsLoading ?
                    <div className='mt-3  d-flex justify-content-center'> <ThreeDots height={15} color='white' /> </div> :

                    // Reviews-Div 
                    <div className='mt-4 '>
                        {
                            data.map((e, i) => {
                                return (
                                    <div key={i} className='text-light p-2 mt-1 border-bottom border-secondary' style={{ backgroundColor: "#212529" }}>
                                        <div className="d-flex">
                                            <p className='text-danger' style={{fontSize:"20px"}}>{e.name}</p>
                                            <p className='mx-2 mt-2' style={{fontSize:"12px"}}>{new Date(e.timestamp).toLocaleString()}</p>
                                        </div>
                                        <ReactStars
                                            value={e.rating}
                                            size={15}
                                            half={true}
                                            edit={false}                                       
                                        />
                                        <p>{e.thought}</p>
                                    </div>

                                )
                            })
                        }
                    </div>

                }
            </div>

        </>
    )
}

export default Reviews
