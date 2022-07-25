import React from 'react';
import { FcRating } from 'react-icons/fc'

const ReviewsDetails = ({ tool }) => {


    const { _id, ratting, description } = tool;

    return (
        <div data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200' class="card text-center font-serif w-96 bg-base-100 shadow-xl gap-5 mt-5">

            <div class="card-body">
                <h2 class="card-title justify-center items-center"><span><FcRating></FcRating></span>{ratting}</h2>


                <p className=' text-bold'>{description}</p>

            </div>
        </div>

    );
};

export default ReviewsDetails;