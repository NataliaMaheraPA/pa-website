'use client'

import { FC, useEffect, useState } from 'react'
import { AUTH_LOGIN, AUTH_PASSWORD } from '@/envs'

interface AuthWrapperProps {
	children: React.ReactNode
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
	const [isAuth, setIsAuth] = useState<boolean>(false)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [authCode, setAuthCode] = useState<string>('')
	const [authValue, setAuthValue] = useState<string>('')

	const isValid = authCode === AUTH_PASSWORD && authValue === AUTH_LOGIN

	const handleAuth = () => {
		if (!AUTH_LOGIN || !AUTH_PASSWORD) {
			setIsAuth(true)
			return
		}

		if (isValid) {
			setIsAuth(true)
			if (typeof window !== 'undefined') {
				window.sessionStorage.setItem('isAuth', 'true')
			}
			setIsModalOpen(false)
		} else {
			alert('Authentication failed. Please try again.')
		}
	}

	const handleSubmit = () => {
		handleAuth()
		setAuthCode('')
		setAuthValue('')
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedAuth = window.sessionStorage.getItem('isAuth') === 'true'
			setIsAuth(storedAuth)
		}
	}, [])

	useEffect(() => {
		if (!isAuth) {
			setIsModalOpen(true)
		}
	}, [isAuth])

	if (!AUTH_LOGIN || !AUTH_PASSWORD) return <>{children}</>

	return (
		<>
			{isAuth ? <>{children}</> : null}
			{isModalOpen && !isAuth && (
				<div className='fixed z-99999 inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-5 rounded shadow-md'>
						<h2 className='text-yellow-400 text-lg font-semibold'>Hold on!</h2>
						<p className='my-2 text-base text-black'>Fill the fields before moving forward</p>
						<label>
							Login
							<input
								type='text'
								value={authValue}
								onChange={e => setAuthValue(e.target.value)}
								className='border text-black p-2 mb-4 w-full'
								placeholder='Enter the login'
							/>
						</label>
						<label>
							Password
							<input
								type='password'
								value={authCode}
								onChange={e => setAuthCode(e.target.value)}
								className='border text-black p-2 mb-4 w-full'
								placeholder='Enter the password'
							/>
						</label>
						<div className='flex justify-end'>
							<button onClick={handleSubmit} className='px-4 py-2 bg-green-600 text-white rounded' aria-label='Submit'>
								Submit
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default AuthWrapper
