import { Typography, TextField, Button } from '@mui/material'
import Link from 'next/link'

const Register = () => {
	return (
		<div>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='h4'
				component='h2'
				padding={2}
			>
				Регистрация
			</Typography>
			<TextField
				margin='normal'
				fullWidth={true}
				label='username'
				variant='standard'
				placeholder='Введите E-mail'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='E-mail'
				variant='standard'
				placeholder='Введите E-mail'
			/>
			<TextField
				fullWidth={true}
				label='Password'
				variant='standard'
				placeholder='Введите ваш пароль'
				type='password'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				label='password'
				variant='standard'
				placeholder='Введите ваш пароль'
			/>
			<Button
				sx={{ marginTop: '10px', background: '#000' }}
				fullWidth={true}
				variant='contained'
			>
				Войти
			</Button>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='subtitle2'
				component='h2'
				padding={2}
			>
				У вас есть аккаунт?
				<Link style={{ marginLeft: '5px' }} href='/register'>
					Регистрация
				</Link>
			</Typography>
		</div>
	)
}
export default Register
