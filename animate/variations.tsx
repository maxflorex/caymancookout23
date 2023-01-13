export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}

export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export const pushDown = {
    hidden: { opacity: 0, x: -20, scale: 0.5, rotate: 10 },
    show: { opacity: 1, x: 1, scale: 1, rotate: 0 },
    scaleUp: { scale: 1.2 }
}