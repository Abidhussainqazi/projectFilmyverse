import React, { useEffect, useState } from 'react'


import ReactStars from "react-rating-stars-component";
import '../Components/Cards.css'
import { Audio, ThreeDots } from 'react-loader-spinner';
import { getDocs } from 'firebase/firestore';
import { moviesRef } from '../firebase/firebase'
import { Link } from 'react-router-dom';

function Cards() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const _data = await getDocs(moviesRef);
            _data.forEach((doc) => {
                setData((prv) => [...prv, { ...(doc.data()), id: doc.id }])
            })


            setLoading(false);
        }
        getData();
    }, [])

    return (
        <>
            <div className="d-flex my-4 mx-4 ">
                <div className="row zom">

                    {loading ? <div className="  container d-flex align-items-center justify-content-center my-5">

                        <div className='d-flex aligns-items-center justify-content-center' style={{ marginTop: "16rem", marginLeft: "42rem" }}> <ThreeDots height={40} color='white' /></div> </div> :

                        data.map((e, i) => {

                            return (




                                <div key={i} className='card mx-2  my-3   col-xl-2 col-lg-2 col-md-4 col-sm-4'>

                                        <img className='h-75' src={e.image} alt="MOvie-Image" srcset="" />
                                    <Link to={`/detail/${e.id}`} style={{paddingLeft: 0, textDecoration: 'none'}}>
                                        <h1 className='text-light heading'><span className='text-secondary span-text '>Name: </span>{e.title}</h1>
                                        <h1 className='text-light heading d-flex'><span className='text-secondary span-text'>Rating:  </span>
                                            <ReactStars
                                                size={20}
                                                half={true}
                                                value={e.rating/e.rated}
                                                edit={false}

                                            />


                                        </h1>
                                        <h1 className='text-light heading'><span className='text-secondary span-text'>Year: </span>{e.year}</h1>

                                    </Link>
                                </div>

                            )
                        })

                    }

                </div>
            </div >
        </>
    )
}

export default Cards
