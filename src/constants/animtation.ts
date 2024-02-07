export const animation = () => {
    return {
        initial: { opacity: 0, filter: 'blur(5px)' },
        whileInView: { opacity: 1, filter: 'blur(0)' },
        transition: {
            duration: 0.4, 
            ease: 'easeInOut'
        }
    }
}