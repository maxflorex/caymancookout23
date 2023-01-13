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
    hidden: { opacity: 0, y: -25},
    show: { opacity: 1, y: 0 },
    scaleUp: { scale: 1.2 }
}