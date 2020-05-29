import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Loader, Dimmer } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		setIsLoading(true);
		axios
			.post(`${process.env.REACT_APP_BE_URL}/auth/signup`, data)
			.then((res) => {
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const googleAuth = () => {
		window.location = `${process.env.REACT_APP_BE_URL}/connect/google`;
	};

	return (
		<>
			<section className='flex flex-col items-center justify-center h-full'>
				<div className='py-4 text-center'>
					<h2 className='text-4xl text-gray-700 text-l bold'>
						Welcome to <span className='text-hive'>TidyHive!</span>
					</h2>
					<p className='text-2xl text-gray-600'>Sign up for an account</p>
				</div>
				<div className='w-4/5 max-w-lg'>
					{isLoading ? (
						<Dimmer active inverted>
							<Loader size='large'>Loading</Loader>
						</Dimmer>
					) : (
						<Form className='w-full' onSubmit={handleSubmit(onSubmit)}>
							<Form.Field>
								<label>Username</label>
								<input
									type='text'
									placeholder='Username'
									name='username'
									ref={register({ required: 'Username is required.' })}
								/>
								{errors.username && <p>{errors.username.message}</p>}
							</Form.Field>
							<Form.Field>
								<label>Email</label>
								<input
									type='email'
									placeholder='Email'
									name='email'
									ref={register({ required: 'Email is required.' })}
								/>
								{errors.email && <p>{errors.email.message}</p>}
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									type='password'
									placeholder='Password'
									name='password'
									ref={register({
										required: 'Password is required.',
										minLength: {
											value: 8,
											message: 'Password must be at least 8 characters long.',
										},
									})}
								/>
								{errors.password && <p>{errors.password.message}</p>}
							</Form.Field>
							<button
								type='submit'
								className='h-10 px-8 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500'
							>
								Submit
							</button>
							<div>
								<p className='py-4 text-gray-700'>
									Already have an account?{' '}
									<Link className='font-semibold text-hive hover:text-orange-500' to='/signin'>
										Sign In
									</Link>
								</p>
								<Divider className='py-4' horizontal>
									OR
								</Divider>
							</div>
							<div className='flex justify-center py-4'>
								<button
									onClick={googleAuth}
									className='h-10 px-3 font-semibold tracking-wider text-white border rounded shadow-lg bg-hive hover:bg-orange-500'
								>
									<i className='ui icon google white'></i>
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

export default SignUp;
