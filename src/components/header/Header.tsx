'use client'

import Link from 'next/link';
import React, { useState, useEffect, useRef, memo } from 'react';
import { navLinks } from '../constants/constants';
import Links from './links/Links';
import { FaBars } from "react-icons/fa6";
import { LogoutGithub } from '@/lib/action';
import { CiLogout } from "react-icons/ci";
interface Session {
    session: any
}

const Header: React.FC<Session> = ({ session }) => {

    const [mobile, setMobile] = useState(false)
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const openMenu = () => {
        setMobile(!mobile)
    }

    useEffect(() => {
        const closeMenuOnOutsideClick = (event: MouseEvent) => {
            if (
                mobile &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)
            ) {
                setMobile(false);
            }
        };

        document.addEventListener('click', closeMenuOnOutsideClick);
        return () => {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, [mobile]);

    return (
        <>
            <header id='header' className={`${mobile ? "active" : ''}`}>
                <div className="row">
                    <div className="logo">
                        <Link prefetch={true} href='/'> ShwetDev</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                    </div>
                    <ul className='nav'>
                        {
                            navLinks.map((el, idx) => (
                                <Links title={el.title} path={el.path} key={idx} />
                            ))
                        }
                    </ul>
                    <div>
                        {session?.user ? (
                            <form action={LogoutGithub}>
                                <button className='login'> Logout <CiLogout /> </button>
                            </form>
                        ) : (
                            <Links title="Login" path="/login" key={-1} />
                        )}
                    </div>
                </div>
                <div onClick={openMenu} className="bar">
                    <FaBars />
                </div>
            </header>

            <div ref={mobileMenuRef} className={`mobile-header ${mobile ? "active" : ''}`}>
                <ul>
                    {
                        navLinks.map((el, idx) => (
                            <div onClick={openMenu} key={idx}>
                                <Links title={el.title} path={el.path} key={idx} />
                            </div>
                        ))
                    }
                </ul>
                <div>
                    {session?.user ? (
                        <>
                            {session.user?.isActive && <Links title="Active" path="/addpost" key={-1} />}
                            <form action={LogoutGithub}>
                                <button className='login'> Logout <CiLogout /> </button>
                            </form>
                        </>
                    ) : (
                        <div className='login-container' onClick={openMenu}>
                            <Links title="Login" path="/login" key={-1} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default memo(Header);
