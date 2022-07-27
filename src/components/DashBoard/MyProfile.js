import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTools from '../../hooks/useTools';
import auth from '../firebase.init';

const MyProfile = () => {
    const { toolId } = useParams();
    // const [service] = useTools(toolId);
    const [user] = useAuthState(auth);


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const url = `https://ancient-inlet-12712.herokuapp.com/users`;
        console.log(url);
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
                toast('added information sucessfully');
            })

    };




    return (
        <>
            <div className=''>

                <div className='card bg-base-100 shadow-xl'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full p-10'>
                            <h1 className=' text-secondary text-2xl font-bold font-serif'><span className='text-primary'>Name :</span> {user?.displayName}</h1>
                            <h1 className=' text-secondary my-2 text-xl font-bold font-serif'><span className='text-primary'>Email :</span> {user?.email}</h1>
                            <h2 className=' text-primary  my-2 text-xl font-bold font-serif'> ADD MORE INFO </h2>

                            <input placeholder='Eduction' className='input my-3 input-bordered w-full max-w-xs' type='text' />

                            <input placeholder='Location' className='input input-bordered w-full max-w-xs' type='Location' {...register("Name", { required: true })} />
                            <input
                                type="number"
                                placeholder="Phone"
                                className="input input-bordered my-3 w-full max-w-xs"
                                {...register("Phone", {
                                    required: true
                                })}
                            />
                            <input placeholder='linkIn-url' className='input input-bordered w-full max-w-xs' type='text' {...register("likedIn-url")} />

                            <input className='my-3  bg-secondary p-2 rounded-3xl mt-4 text-white' type="submit" value='ADD INFORMATION' />
                        </div>
                    </form>
                </div>


            </div>

        </>
    );
};

export default MyProfile;