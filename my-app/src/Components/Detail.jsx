import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
// import '../Components/Detail.css'
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { ThreeCircles } from 'react-loader-spinner';
import Reviews from './Reviews';

function Detail() {

    const { id } = useParams();
    const [data, setData] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating:0,
        rated:0,
    });

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getData() {
            setLoading(true);
            const _doc = doc(db, "movies", id);
            const _data = await getDoc(_doc);
            setData(_data.data());
            setLoading(false);
        }
        getData();

    }, [])
    return (
        <>
            {loading ? <div className="container d-flex align-items-center justify-content-center my-5">
                <div className=' d-flex aligns-items-center justify-content-center' style={{ marginTop: "16rem" }}> <ThreeCircles height={40} color='white' /></div> </div> :
                <>
                    <div className="container  text-center my-5">


                        <div className="row ">
                            <div className="col-xl-5 col-lg-5 col-md-6 " >
                                <img className='h-75 w-75 fix-col sticky' src={data.image} alt="" />
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 ">
                                <h1 className='text-light text-start '>{data.title} <span>({data.year})</span></h1>
                                <ReactStars
                                    size={20}
                                    half={true}
                                    value={data.rating/data.rated}
                                    edit={false}

                                />
                                <p className='text-secondary text-start pt-1 '>{data.description}</p>
        
                          <Reviews id={id} prevRating={data.rating} userRated={data.rated}/>
                            </div>
                        </div>

                    </div>
                 </>
            }


        </>
    )
}

export default Detail
