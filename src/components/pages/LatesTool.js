import React from 'react';

const LatesTool = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFoekx0T256QUwuX0FDX1NMMTUwMF8uanBn.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 data-aos='fade-right'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                        class="text-5xl font-bold">Latest Clocks Tools</h1>
                    <p data-aos='fade-right'
                        data-aos-delay='400'
                        data-aos-duration='900' class="py-6">A clock or a timepiece is a device used to measure and indicate time. The clock is one of the oldest human inventions, meeting the need to measure intervals ...</p>
                    <button data-aos='zoom-in'
                        data-aos-delay='1300' class="btn btn-primary text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default LatesTool;