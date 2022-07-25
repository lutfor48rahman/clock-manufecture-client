import AOS from 'aos';
import React, { useEffect } from 'react';
import Homebanner from './Homebanner';
import LatestImg from './LatestImg';
import LatesTool from './LatesTool';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const HomePart = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>

            <Homebanner></Homebanner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <LatesTool></LatesTool>
            <LatestImg></LatestImg>
        </div>
    );
};

export default HomePart;