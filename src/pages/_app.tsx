import { useRouter } from "next/router"
import '../styles/global.css';
import { AnimatePresence, motion } from "framer-motion";
import { AppProps } from "next/app";
import { expand, overlay } from "@/constants/routeAnimation";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const numberOfColumns = 5;

    const animation = (variants: any, custom?: number) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants,
            custom
        }
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div key={router.route}>
                <Component {...pageProps} />

                <motion.div {...animation(overlay)} id="background"/>
                <div id="animation-container">
                    {[...Array(numberOfColumns)].map((_, index) => {
                        return <motion.div {...animation(expand, numberOfColumns - index)} id="column" key={index}/>
                    })}
                </div>
            </motion.div>
        </AnimatePresence>

    )
}

export default App;