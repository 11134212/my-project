import { Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [nameDirty, setNameDirty] = useState(false)
	const [emailError, setEmailError] = useState('E-mail не может быть пустым')
	const [passwordError, setPasswordError] = useState(
		'Пароль не может быть пустым'
	)
	const [nameError, setNameError] = useState('Заполните имя')

	const blurHandler = e => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
			case 'name':
				setNameDirty(true)
				break
		}
	}
	const emailHandler = e => {
		setEmail(e.target.value)
		const re =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некорректный Email')
		} else {
			setEmailError('')
		}
	}
	const passwordHandler = e => {
		setPassword(e.target.value)
		if (e.target.value.length < 3 || e.target.value.length > 8) {
			setPasswordError('Ваш пароль должен содержать не менее 3 симовлов')
			if (!e.target.value) {
				setPasswordError('Пароль не должен быть пустым')
			}
		} else {
			setPasswordError('')
		}
	}
	const postData = event => {
		event.preventDefault()
		let user = {
			name,
			password,
			email,
		}

		let response = fetch('https://635fd274ca0fe3c21aa57afd.mockapi.io/dxsca', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(user),
		})

		console.log(postData)
	}
	return (
		<div className='flex gap-3 flex-col'>
			<form onSubmit={postData}>
				<Typography
					fontFamily='Poppins'
					textAlign='center'
					variant='h4'
					component='h2'
					padding={2}
				>
					Регистрация
				</Typography>
				{emailDirty && emailError && (
					<div style={{ color: 'red' }}>{emailError}</div>
				)}
				<TextField
					margin='normal'
					fullWidth={true}
					label='Введите свой e-mail'
					variant='standard'
					placeholder='Введите E-mail'
					value={email}
					type='text'
					onBlur={e => blurHandler(e)}
					onChange={e => emailHandler(e)}
				/>
				{passwordDirty && passwordError && (
					<div style={{ color: 'red' }}>{passwordError}</div>
				)}
				<TextField
					fullWidth={true}
					label='Password'
					variant='standard'
					placeholder='Введите ваш пароль'
					type='password'
					value={password}
					onChange={e => passwordHandler(e)}
					onBlur={e => blurHandler(e)}
				/>
				{nameDirty && nameError && (
					<div style={{ color: 'red' }}>{nameError}</div>
				)}
				<TextField
					fullWidth={true}
					label='Password'
					variant='standard'
					placeholder='Введите ваше имя'
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					onBlur={e => blurHandler(e)}
				/>

				<button>Зарегестрироваться</button>
				<Typography
					fontFamily='Poppins'
					textAlign='center'
					variant='subtitle2'
					component='h2'
					padding={2}
				></Typography>
			</form>
		</div>
	)
}
export default Register
