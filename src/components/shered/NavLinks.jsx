"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ children, href, className }) => {

    const pathName = usePathname()
    const isActive = href === pathName;
    return (
        <div>
            <Link className={`${className}${isActive ? "bg-black text-white border-r-4" : ""}`} href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;