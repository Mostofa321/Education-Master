"use client"

import { useState, useEffect } from 'react'
// import {
//     Navbar,
//     Collapse,
//     IconButton,
// } from "../materialTailwind/MaterialComponents";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NavList from './NavList';
import { Collapse, IconButton, Navbar } from '@material-tailwind/react';



export const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className="shadow-md sticky top-0 z-50 bg-[white] p-3">
            <Navbar className="mx-auto shadow-none max-w-screen-2xl px-4 py-2">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Image src="/logo.png" width={250} height={250} alt={"Logo"} />
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
        </div>
    );
}