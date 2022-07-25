import React from 'react';
import { AiOutlineCopyrightCircle, AiOutlineFacebook, AiOutlinePhone } from 'react-icons/ai';
import { SiHomeassistantcommunitystore, SiGmail } from 'react-icons/si';
import { GiCuckooClock } from 'react-icons/gi';
import { BsInstagram } from 'react-icons/bs';
import { ImPinterest2 } from 'react-icons/im';
import { FiTwitter } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer class="footer footer-center p-10 bg-black  text-base-content rounded">
            <div class="grid grid-flow-col gap-4 text-white">
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>

            </div>
            <div>
                <div class="grid grid-flow-col gap-4 text-white">
                    <span className='icons'><AiOutlineFacebook></AiOutlineFacebook></span>
                    <span className='icons'><BsInstagram></BsInstagram></span>
                    <span className='icons'><ImPinterest2></ImPinterest2></span>
                    <span className='icons'><FiTwitter></FiTwitter></span>
                </div>
            </div>
            <div>
                <p className=' text-white font-serif'>Copyright © {year} - All right reserved by ClocksParts Ltd</p>
            </div>
        </footer>

    );
};

export default Footer;