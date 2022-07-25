import React from 'react';

import useOrders from '../../hooks/useOrders';


const MyOrders = () => {
    const [orders, serOrder] = useOrders()

    const handdleDetele = id => {
        const proceed = window.confirm('Are You Want Delete This item!!');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainning = orders.filter(order => order._id !== id);
                    serOrder(remainning)
                })
        }
    }
    return (
        <div>
            <h1 className=' text-center text-3xl text-secondary  my text-bold '>My Order</h1>
            <div className=' lg:mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 gap-15 my-4'>
                {
                    orders.map(order =>
                        <div class="card card-side bg-base-100 shadow-xl gap-5 mt-5 mx-6 mb-5 ">
                            <figure><img src={order.img} alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title "><span className='text-secondary font-bold'>Name:</span><span className=' text-primary font-bold'>{order.name}</span></h2>
                                <h3 class="card-title "><span className='text-secondary font-bold'>price:</span> <span className=' text-primary font-bold'>{order.price}</span></h3>
                                <h3 class="card-title "><span className='text-secondary font-bold'>Quantity:</span><span className=' text-primary font-bold'>{order.orderQuantity}</span></h3>

                                <div class="card-actions justify-end">
                                    <div onClick={() => handdleDetele(order._id)} >
                                        <button class="btn btn-secondary">DELETE</button>
                                    </div>
                                    <div><button class="btn btn-primary">Paid</button></div></div>
                            </div>
                        </div>)


                }
            </div>
        </div>
    );
};

export default MyOrders;