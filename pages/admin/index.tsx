import { signInWithEmailAndPassword } from 'firebase/auth'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../api/firebase/config'

const Admin = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [loginUser, setLoginUser] = useState({
		email: '',
		password: ''
	})
	const { email, password } = loginUser


	// * LOGIN
	const login = (e: any) => {
		e.preventDefault()
		try {
			signInWithEmailAndPassword(
				auth,
				email,
				password
			).then(() => {
				router.push('/admin/dashboard')
			})

		} catch (error: any) {
			console.log(error.message);
			alert('Wrong credentials')
		}
	}

	// * HANDLE CHANGE
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLoginUser({
			...loginUser, [e.target.name]: e.target.value
		})
	}

	return (
		<>
			<Head>
				<title>Sign In | Deep Blue Images</title>
				<meta name="description" content="Admin page for Deep Blue Images" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="noindex" />
			</Head>

			<main className='bg-mx-100 w-full flex justify-center items-center min-h-screen texture'>
				<form
					onSubmit={login}
					className="bg-white min-h-48 w-64 rounded-md drop-shadow-sm flex flex-col justify-center md:px-8 px-6 md:py-12 py-8 gap-2 my-16">
					<Image alt='Deep Blue Images Logo' src='/images/dbi-icon.png' width={48} height={48} className='self-center' priority />
					<h1 className='text-2xl self-center pb-4 font-semibold'>Login</h1>
					<label className='pl-2 text-xs' htmlFor="username">Email</label>
					<input
						name='email'
						type="text"
						placeholder='Email...'
						onChange={handleChange}
						className='outline-none bg-mx-100 p-2 rounded-md text-sm' />
					<label className='pl-2 text-xs mt-4' htmlFor="password">Password</label>
					<input
						name='password'
						type="password"
						placeholder='Password'
						onChange={handleChange}
						className='outline-none bg-mx-100 p-2 rounded-md text-sm' />
					<button
						className='self-center mt-4 px-4 py-2 rounded-md bg-mx-400 text-white hover:bg-mx-300 hover:text-mx-400 duration-200'>
						Login
					</button>
				</form>
			</main>
		</>
	)
}

export default Admin