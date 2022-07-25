import React from 'react';

const LatestImg = () => {
    return (
        <div>
            <h1 className=' mb-6 text-center text-3xl font-bold font-serif text-primary'> Latest Tools Images</h1>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9  lg:mx-28'>
                <img height={150} width={300} className=" img-fluid" src="https://i.ebayimg.com/images/g/GfQAAOSw269gtzSY/s-l400.jpg" alt="" />
                <img height={300} width={300} className=" img-fluid" src="https://i.ebayimg.com/images/g/kMEAAOSwMplfvIDS/s-l300.jpg" alt="" />
                <img height={300} width={300} className=" img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEat6No5S3uy35uamD0bXkQepNP4LtKIVaF2-C7tzdo-nyH4sLVGKXOHC_XuN5IJFozus&usqp=CAU" alt="" />
                <img height={300} width={300} className=" img-fluid" src="https://i5.walmartimages.com/asr/5b5fa9b0-bb72-4b3c-af6d-874b1c6f75a3_1.a7e1df1d63512addaa8def61c0d3622a.jpeg" alt="" />
                <img height={300} width={300} className=" img-fluid" src="https://i.ebayimg.com/images/g/6qcAAOSwerddGzUl/s-l500.jpg" alt="" />
                <img height={300} width={300} className=" img-fluid" src="https://ae01.alicdn.com/kf/H6155d9fa602241e4afb52395723c90a3K/New-DIY-Quartz-Clock-Movement-Mechanism-Hands-Wall-Clock-Repair-Tools-Parts-Silent-Kit-27-Types.jpg_Q90.jpg_.webp" alt="" />
            </div>
        </div>
    );
};

export default LatestImg;