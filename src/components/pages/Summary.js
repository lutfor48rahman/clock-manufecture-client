import React from 'react';
import { FcServices } from 'react-icons/fc';
import { BsTools } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
const Summary = () => {
    return (
        <div >
            <h1 className=' text-center text-3xl text-primary my-16 text-bold '>Our Business Summary</h1>


            <div>

                <div class="card mx-12 bg-base-100 ">
                    <div class=" card-body">

                        <div>
                            <h2 class="card-title text-slate-800"> We found the best alarm clocks for all kinds of spaces, from analog and digital ones to smart alarms that gradually wake you up.</h2>

                            <p className='  font-bold font-serif'>Starting a wall clock and alarm clock business requires a great deal of effort, dedication, and most importantly passion.

                                If you're interested in how to sell wall clock and alarm clock, or selling wall clock and alarm clock online, you can use this page as a guide for everything you'll need to know.</p>

                            <p className='text-secondary font-bold'>You should contacts us</p>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn text-white px-12 btn-primary">Book now</button>
                            <button class="btn btn-secondary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div class="card w-96 bg-base-100 ">
                    <div class="card-body">
                        <h2 class="card-title justify-center"><FcServices></FcServices></h2>
                        <h2 class="card-title justify-center"> 100+</h2>
                        <p className='text-center'>served </p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 ">
                    <div class="card-body">
                        <h2 class="card-title justify-center"><BsTools></BsTools></h2>
                        <h2 class="card-title justify-center"> 120M+ </h2>
                        <p className='text-center'>Annual revenue</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 ">
                    <div class="card-body">
                        <h2 class="card-title justify-center"><HiUserGroup></HiUserGroup></h2>
                        <h2 class="card-title justify-center">33K+</h2>
                        <p className='text-center'> Reviews</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;