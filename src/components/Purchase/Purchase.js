import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);

    const { toolId } = useParams();
    const [tools, setTools] = useState({});
    console.log(tools);
    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [toolId]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('successfully added');
            })
        console.log(data)
    };

    return (
        <div className='flex  my-16 justify-center items-center'>

            <div class="card w-96 bg-base-100 shadow-xl p-5">
                <h1 className=' mt-6 text-secondary text-2xl font-bold font-serif'><span className='text-primary'>Name :</span> {user.displayName}</h1>
                <h1 className=' text-secondary my-2 text-xl font-bold font-serif'><span className='text-primary'>Email :</span> {user.email}</h1>
                <figure><img src={tools.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Name: <span className=' text-secondary'>{tools.name}</span></h2>

                    <h2 class="card-title"> miniOrder :<span className=' text-primary font-bold'>{tools.orderQuantity}</span></h2>
                    <h2 class="card-title"> Available Order :<span className=' text-primary font-bold'>{tools.availableQuantity}</span></h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="label">
                            <span className="label-text">Products Name:</span>
                        </label>
                        <input placeholder='description' className=' mb-2 p-2 border-2 rounded-3 ' type='text' {...register("tools")} />
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input className=' mb-2 p-2 border-2 rounded-3 ' placeholder='Quantity' type="number" {...register("orderQuantity")} />

                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input className=' mb-2 p-2 border-2 rounded-3 ' type="number" {...register("Number")} />
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input placeholder='Enter Yur Address' className=' mb-2 p-2 border-2 rounded-3 ' type='text' {...register("Address")} />
                        <input className=' bg-secondary p-2 rounded-3xl mt-4 text-white' type="submit" value='ADD TO REVIEWS' />
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Purchase;