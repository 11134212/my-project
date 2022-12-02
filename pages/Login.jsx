import { TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
export const LoginPage = () => {
	return (
		<div>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='h4'
				component='h2'
				padding={2}
			>
				Войдите в свой профиль
			</Typography>
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
				<Link style={{ marginLeft: '5px' }} to='/register'>
					Регистрация
				</Link>
			</Typography>
		</div>
	)
}
