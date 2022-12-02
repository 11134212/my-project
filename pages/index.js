import Link from 'next/link'

export default function Home() {
	return (
		<div className='wrapper'>
			<header className='header'>
				<div className='spotify-logo'>
					<img
						src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png'
						style={{ width: '60px' }}
					/>
					<span>Spotify</span>
				</div>
				<div className='links'>
					<Link className='link' href={'/'}>
						Premium
					</Link>
					<Link className='link' href={'/'}>
						Справка
					</Link>
					<Link className='link' href={'/'}>
						Скачать
					</Link>
					|
					<Link className='link' href={'/Register'}>
						Зарегистрироваться
					</Link>
					<Link className='link' href={'/LoginPage'}>
						Войти в аккаунт
					</Link>
				</div>
			</header>
			<div className='first-block'>
				<h1></h1>
				<svg
					viewBox='0 0 290 590.58'
					aria-hidden='true'
					focusable='false'
					class='sc-dnORZt iZZwlB'
				>
					<path
						d='M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z'
						fill='#fff'
					></path>
					<path
						d='M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z'
						fill='#231f20'
					></path>
				</svg>
			</div>
		</div>
	)
}
