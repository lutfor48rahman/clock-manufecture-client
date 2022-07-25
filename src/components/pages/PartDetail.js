import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartDetail = ({ tool }) => {


    const { _id, name, img, shortDes, orderQuantity, availableQuantity, price } = tool;
    const navigate = useNavigate();

    const navigateToToolsDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200' class="card font-serif w-96 bg-base-100 shadow-xl gap-5 mt-5">
            <figure><img src={img} className="img-fluid" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title"> Name :<span className=' text-primary font-bold'>{name}</span></h2>
                <h2 class="card-title">Price :<span className=' text-primary font-bold'>{price}</span></h2>

                <h2 class="card-title"> miniOrder :<span className=' text-primary font-bold'>{orderQuantity}</span></h2>
                <h2 class="card-title"> Available Order :<span className=' text-primary font-bold'>{availableQuantity}</span></h2>
                <p className=' text-bold'>{shortDes}</p>
                <div class="card-actions justify-center my-4 ">
                    <button onClick={() => navigateToToolsDetail(_id)} class="btn btn-primary text-white  ">book now</button>
                </div>
            </div>
        </div>

    );
};

export default PartDetail;