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
    hidden: { opacity: 0, y: -25 },
    show: { opacity: 1, y: 0 },
    scaleUp: { scale: 1.2 }
}


// ANIMATE TEXT
// const ref = useRef(null)
// const inView = useInView(ref)
// const ctrl = useAnimation()
// const text = 'Cayman Cookout 2023'

// const characterAnimation = {
// 	hidden: {
// 		opacity: 0,
// 		y: `0.25em`,
// 	},
// 	visible: {
// 		opacity: 1,
// 		y: `0em`,
// 		transition: {
// 			duration: 1,
// 			ease: [0.2, 0.65, 0.3, 0.9],
// 		},
// 	},
// };

// const wordAnimation = {
// 	hidden: {},
// 	visible: {},
// };

// useEffect(() => {
// 	if (inView) {
// 		ctrl.start("visible");
// 	}
// 	if (!inView) {
// 		ctrl.start("hidden");
// 	}
// }, [ctrl, inView]);


//  - - - - 


{/* - - - ANIMATION - - - */ }
{/* <h1 id='TITLE' className="bg-mx-100 text-mx-400 p-2 rounded">
						{text.split('').map((word, i) => {
							return (
								<motion.span
									id='WORD'
									key={i}
									// className='inline-block whitespace-nowrap'
									ref={ref}
									aria-hidden="true"
									initial="hidden"
									animate={ctrl}
									variants={wordAnimation}
									transition={{
										delayChildren: i * 0.1,
										staggerChildren: 0.5,
									}}
								>
									{word.split('').map((character, i) => {
										return (
											<motion.span id='CHAR'
												aria-hidden="true"
												key={i}
												variants={characterAnimation}
												className='inline-block'
											>
												{character}
											</motion.span>
										)
									})}

								</motion.span>)
						})}
					</h1> */}