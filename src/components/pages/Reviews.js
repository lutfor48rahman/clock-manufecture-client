import React, { useEffect, useState } from 'react';

import ReviewsDetails from './ReviewsDetails';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <h1 className=' text-center text-3xl text-primary my-16 text-bold '>Our Reviews</h1>
            <div className='  mx-14 mx-auto'>

                <div className=' lg:mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 gap-15 my-4'>
                    {
                        reviews.map(review => <ReviewsDetails
                            key={review._id}
                            tool={review}
                        ></ReviewsDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;