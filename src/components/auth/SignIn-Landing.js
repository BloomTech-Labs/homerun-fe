import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Form, Loader, Dimmer } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import actions from '../../actions';

const googleAuth = () => {
	window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
};

const SignInLanding = (props) => {
	const { register, handleSubmit, errors } = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		setIsLoading(true);
		// clear local storage before signing in to prevent bugs
		localStorage.clear();
		axios
			.post(`${process.env.REACT_APP_BE_URL}/auth/login`, data)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				dispatch(actions.user.setUser(res.data));
				props.history.push('/dashboard');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<section className='flex flex-col items-center justify-center h-full'>
				<div className='py-4 text-center'>
					<h2 className='text-4xl text-gray-700 text-l bold'>
						Welcome to <span className='text-hive'>TidyHive!</span>
					</h2>
					<p className='text-2xl text-gray-600'>Sign in to access your account</p>
				</div>
				<div className='w-4/5 max-w-lg'>
					{isLoading ? (
						<Dimmer active inverted>
							<Loader size='large'>Loading</Loader>
						</Dimmer>
					) : (
						<Form className='w-full' onSubmit={handleSubmit(onSubmit)}>
							<Form.Field>
								<label>Email</label>
								<input
									className=''
									type='email'
									placeholder='Email'
									name='email'
									ref={register({ required: 'Email is invalid.' })}
								/>
								{errors.username && <p>{errors.username.message}</p>}
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									className=''
									type='password'
									placeholder='Password'
									name='password'
									ref={register({ required: 'Password is required.' })}
								/>
								{errors.email && <p>{errors.email.message}</p>}
							</Form.Field>
							<div>
								<button
									type='submit'
									className='h-10 px-8 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500'
								>
									Submit
								</button>
								<button
									className='h-10 px-8 ml-2 font-semibold text-gray-700 bg-gray-300 border rounded shadow-lg hover:bg-gray-400'
									onClick={() => props.history.push('/forgot-password')}
								>
									Forgot Password
								</button>
							</div>
							<div>
								<p className='py-4 text-gray-700'>
									Don't have an account?{' '}
									<Link to='/signup' className='font-semibold text-hive hover:text-orange-500'>
										Sign Up
									</Link>
								</p>
								<Divider horizontal className='py-4'>
									OR
								</Divider>
							</div>
							<div className='flex justify-center py-4'>
								<button
									onClick={googleAuth}
									className='h-10 px-3 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500'
								>
									<i className='ui icon google white' />
									Sign in with Google
								</button>
							</div>
						</Form>
					)}
				</div>
			</section>
		</>
	);
};

export default SignInLanding;
