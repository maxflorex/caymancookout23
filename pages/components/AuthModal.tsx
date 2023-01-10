import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { isAuth } from '../../redux/isAuthSlice'

type Props = {
	setShow: any
}

const Auth = ({ setShow }: Props) => {
	const dispatch = useDispatch()
	const router = useRouter()
	const [pw, setPw] = useState('')

	const handleSubmit = (e: any) => {

		e.preventDefault()

		if (pw === 'pass') {
			router.push('/galleries')
		} else {
			alert('Wrong password! Try again')
		}

		dispatch(isAuth(true))
	}

	const closeAuth = (e: any) => {
		e.preventDefault()
		setShow(false)
	}

	return (
		<>
			<div className="absolute top-0 letf-0 w-screen z-10 overflow-hidden">
				<div className="flex justify-center items-center min-h-screen w-full relative">

					{/* LOGO */}
					<Link href='/' className='text-3xl font-handwritten text-mx-400 text-center pt-4 z-20 w-full flex justify-center absolute top-0 left-0' onClick={closeAuth}>Deep Blue Images</Link>

					{/* FORM */}
					<form className="p-8 rounded-md bg-mx-200 bg-opacity-80 flex flex-col gap-4 items-center relative"
						onSubmit={handleSubmit}
					>
						<Image alt='Cayman Cookout Logo' src='/images/cc23logo.webp' width={168} height={65} />
						<i className="ri-lock-line py-4 px-5 bg-mx-100 rounded-full my-2 shadow" />
						<p className='text-center'>Enter a password <br />to access your images</p>
						<input
							placeholder='Enter your code...'
							type="password"
							className='outline-none rounded drop-shadow-sm focus:drop-shadow-md p-2 placeholder:text-mx-400 placeholder:text-opacity-30'
							onChange={(e) => setPw(e.target.value)}
						/>
						<button className='px-4 py-2 rounded-md bg-mx-400 text-white'>Access</button>

						{/* CLOSE BUTTON */}
						<div className="absolute top-0 right-0">
							<button className="absolute -right-2 -top-2 bg-white rounded-md leading-none p-2 z-30 hover:bg-mx-300 duration-200" onClick={closeAuth}>
								<i className="ri-close-fill"></i>
							</button>
						</div>
					</form>
				</div>
				<footer className='w-full flex items-center justify-center absolute bottom-4 gap-4 text-mx-400 z-20'>
					<a href='https://www.instagram.com/deepblueimages/' target='_blank' rel='noreferrer' className="ri-instagram-line text-mx-400 text-opacity-30 hover:text-opacity-100 hover:scale-110 duration-200" />
					<a href='https://www.facebook.com/deepblueimages/' target='_blank' rel='noreferrer' className="ri-facebook-line text-mx-400 text-opacity-30 hover:text-opacity-100 hover:scale-110 duration-200" />
				</footer>
			</div>


		</>
	)
}

export default Auth