"use client";

import { navbarItems } from "@/constants/navbarItems"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from '../styles/navbar.module.css'
import {motion} from 'framer-motion'
import Button from "./button";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div id={styles.container}>
            <span id={styles.left}>Wonder Vendors.</span>

            <div id={styles.right}>
                {navbarItems.map((navbarItem) => {
                    if(navbarItem.route === pathname){
                        return <Link href={navbarItem.route} id={styles.activeItem}>{navbarItem.name}</Link>
                    };

                    return <Link href={navbarItem.route} id={styles.item}>{navbarItem.name}</Link>
                })}
            </div>

            <Button text="Contact us" type="button" theme="default" />
        </div>
    )
}

export default Navbar;