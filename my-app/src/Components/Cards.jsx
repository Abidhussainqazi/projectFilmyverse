import React, { useState } from 'react'


import ReactStars from "react-rating-stars-component";
import '../Components/Cards.css'
function Cards() {
    const [data, setData] = useState([
        {
            name: "Avenger",
            year: "2019",
            rating: 1.9,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },

        {
            name: "Avenger",
            year: "2019",
            rating: 1,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },

        {
            name: "Avenger",
            year: "2019",
            rating: 4,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },
        {
            name: "Avenger",
            year: "2019",
            rating: 2,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },
        {
            name: "Avenger",
            year: "2019",
            rating: 5,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },
        {
            name: "Avenger",
            year: "2019",
            rating: 3,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },
        {
            name: "Avenger",
            year: "2019",
            rating: 3,
            img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
        },


    ]);
    return (
        <>
            <div className="d-flex my-4 mx-4 ">
                <div className="row zom">

                    {data.map((e, i) => {

                        return (

                            <div key={i} className='card mx-2 col-xl-2 col-lg-2 col-md-4 col-sm-4  my-3'>
                                <img className='h-75' src={e.img} alt="MOvie-Image" srcset="" />
                                <h1 className='text-light heading'><span className='text-secondary span-text'>Name: </span>{e.name}</h1>
                                <h1 className='text-light heading d-flex'><span className='text-secondary span-text'>Rating:  </span>
                                    <ReactStars
                                        size={20}
                                        half={true}
                                        value={e.rating}
                                        edit={false}

                                    />


                                </h1>
                                <h1 className='text-light heading'><span className='text-secondary span-text'>Year: </span>{e.year}</h1>

                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Cards
