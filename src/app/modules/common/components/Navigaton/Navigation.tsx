'use client'

import "./Navigation.scss"
import Link from 'next/link';
import classNames from "classnames";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const [currentPath, setCurrentPath] = useState("/")

    const pathname = usePathname()
    useEffect(() => {
        setCurrentPath(pathname)
    }, [pathname])

    return (
        <nav className="nav-container">
            <Link href="/" className="nav-link">
                <div className={classNames({active: currentPath === '/'},"nav-item")}>
                    List movies
                </div>
            </Link>
            <Link href="/addBook" className="nav-link">
                <div className={classNames({active: currentPath === '/addBook'}, "nav-item")}>
                    Add movie
                </div>
            </Link>
        </nav>
    );
};

export default Navigation;