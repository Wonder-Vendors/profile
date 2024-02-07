import { footerColumnOne, footerColumnTwo } from "@/constants/footerLinks";
import { socialHandles } from "@/constants/socialHandles"
import styles from '@/styles/footer.module.css'
import Link from "next/link";
import {motion} from 'framer-motion'
import { animation } from "@/constants/animtation";

const Footer = () => {
    

    return (
        <div id={styles.container}>
            <div id={styles.left}>
                <motion.span {...animation()} id={styles.heading}>Wonder Vendors.</motion.span>
                <motion.span {...animation()} id={styles.text}>Transforming ideas into reality, Wonder Vendors is your trusted partner for innovative web and mobile solutions. Explore our creative expertise in web app design, development, and mobile app creation. Let's build something extraordinary together!</motion.span>
                <div id={styles.socialContainer}>
                    {socialHandles.map((handle, index) => {
                        const IconComponent = handle.icon;
                        return <motion.a {...animation()} href={handle.link} id={styles.socialLink} key={index}>{<IconComponent />}</motion.a>
                    })}
                </div>
                <motion.span {...animation()} id={styles.text}>Copyright @ Wonder Vendors 2024</motion.span>
            </div>

            <div id={styles.right}>
                <motion.div {...animation()} className={styles.children}>
                    {footerColumnOne.map((item, index) => {
                        return <Link href={item.route} className={styles.item}>{item.name}</Link>
                    })}
                </motion.div>
                <motion.div className={styles.children} {...animation()}>
                    {footerColumnTwo.map((item, index) => {
                        return <Link href={item.route} className={styles.item}>{item.name}</Link>
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Footer;