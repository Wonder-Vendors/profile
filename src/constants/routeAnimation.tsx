export const expand = {
    initial: {
        top: 0,
    },
    enter: (index: number) => ({
        top: '100%',
        transition: {
            duration: 0.4,
            delay: 0.05 * index,
        },
        transitionEnd: {
            height: 0,
            top: 0,
        }
    }),
    exit: (index: number) => ({
        height: '100%',
        transition: {
            duration: 0.4,
            delay: 0.05 * index,
        }
    })
}

export const overlay = {
    initial: {
        opacity: 0.4
    },
    enter: {
        opacity: 0,
    },
    exit: {
        opacity: 0.4
    }
}