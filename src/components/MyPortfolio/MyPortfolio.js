import React from 'react';

const MyPortfolio = () => {
    return (
        <div data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-delay='200'>
            <h1 className=' text-center text-secondary font-bold font-serif text-4xl my-4'>MY PORTFOLIO</h1>
            <div className=''>
                <div class="card mx-12 my-12  justify-center items-center  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 data-aos='fade-right'
                            data-aos-delay='600'
                            data-aos-duration='800'
                            class=" font-bold font-serif text-2xl text-secondary">Md. Lutfor Rahman</h2>
                        <h2 class=" font-bold font-serif text-2xl  ">lutforcse48@gmail.com</h2>
                        <p className='font-bold font-serif  '> I am Bsc in CSE Student</p>

                        <div>
                            <h1 className='font-bold font-serif text-2xl'>My Technologies skills</h1>
                            1.html <br />
                            2.class<br />
                            3.Bootstrap and Tailwind<br />
                            4.javascript<br />
                            5.React<br />
                            6.Node js<br />
                            7.Mongodb<br />
                        </div>
                        <div >
                            <h1 className='font-bold font-serif text-2xl  '>Three of my Projects</h1>
                            1.  https://independent-service-prov-60d93.web.app/ <br />
                            2.https://chic-valkyrie-285869.netlify.app/ <br />
                            3.https://whear-house.web.app/ <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;