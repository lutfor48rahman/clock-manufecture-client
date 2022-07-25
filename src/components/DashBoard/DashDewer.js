import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const DashDewer = ({ children }) => {
    const [user] = useAuthState(auth);
    return (
        <div class='drawer drawer-mobile  '>
            <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
            <div class='drawer-content flex flex-col items-center  mt-8'>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class='drawer-side'>
                <label for='my-drawer-2' class='drawer-overlay'></label>
                <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>

                    <li className='text-secondary font-bold'><Link to="myprofile">My Profile</Link></li>


                    {user && <>
                        <li className='text-secondary font-bold'><Link to="myorders">My Orders</Link></li>
                        <li className='text-secondary font-bold'><Link to="myreviws">My Review</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default DashDewer;