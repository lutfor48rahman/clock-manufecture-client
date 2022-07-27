
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

import PartDetail from './PartDetail';
const Parts = () => {
    const { data: tools, isLoading } = useQuery('users', () => fetch('https://ancient-inlet-12712.herokuapp.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }




    if (tools.length) {
        tools.length = 6;
    }
    return (
        <div className='  mx-14 mx-auto'>
            <h1 className=' text-center my-10 text-primary text-3xl'>Tools Manufacturer</h1>
            <div className=' lg:mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 gap-15 my-4'>
                {
                    tools.map(tool => <PartDetail
                        key={tool._id}
                        tool={tool}
                    ></PartDetail>)
                }
            </div>
        </div>
    );
};

export default Parts;