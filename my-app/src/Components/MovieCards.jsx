import React, { useState } from 'react'
import '../Components/MovieCards.css'
import Movie from '../assets/Images/Movie-tem1.png'
import ReactStars from 'react-stars'

function MovieCards() {
    const [data, setData] = useState([
        {
            name: "after",
            year: "2011",
            rating: 3,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            name: "after",
            year: "2011",
            rating: 3.3,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            name: "after",
            year: "2011",
            rating: 4,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            name: "after",
            year: "2011",
            rating: 0.5,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            name: "after",
            year: "2011",
            rating: 2,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            name: "after",
            year: "2011",
            rating: 1,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            name: "after",
            year: "2011",
            rating: 1,
            img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
    ])

    return (
        <>
            <div className="container flex-container">
                {data.map((e, i) => {
                    return (
                        <div key={i} className="card">
                            <img src={e.img} className="h-72 card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">
                                    <span style={{ color: "red" }}>Name:</span> {e.name}
                                </h6>
                                <h6>
                                    <span style={{ color: "red" }}>Rating:</span>
                                    <div className="stars-container">
                                        <ReactStars
                                            size={25}
                                            half={true}
                                            value={e.rating}
                                        />
                                    </div>
                                </h6>
                                <h6>
                                    <span style={{ color: "red" }}>Year:</span> {e.year}
                                </h6>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default MovieCards
