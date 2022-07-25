import React from 'react';
import bannerpic1 from '../../assets/img/bannerpic1.jpg'
import bannerpic2 from '../../assets/img/bannerpic2.jpg'
import bannerpic3 from '../../assets/img/bannerpic3.jpg'
const Homebanner = () => {
    return (
        <div>
            <div>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src={bannerpic1} class="img-fluid "/>
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={bannerpic2} class="w-full" />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src={bannerpic3} class="w-full" />
                    </div>

                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>

                </div>
            </div>
        </div>
    );
};

export default Homebanner;