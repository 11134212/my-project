import Link from 'next/link'
import { useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { signOut } from 'next-auth/react'

export const PlaylistSide = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className='playlists'>
			<div className='header2' style={{ height: '65px' }}>
				<div style={{ marginLeft: '25px', display: 'flex', gap: '15px' }}>
					<button>
						<MdArrowBackIos />
					</button>
					<button>
						<MdArrowForwardIos />
					</button>
				</div>
				<div className='links2'>
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
					<Link className='link' href={'/'} style={{ letterSpacing: '0px' }}>
						Зарегистрироваться
					</Link>
					<Link className='link' href={'/Login'}>
						<button>
							<span>Войти</span>
						</button>
					</Link>
					<button Onclick={() => signOut()}>log out</button>
				</div>
			</div>
			<div className='mainplaylist'>
				<div className='playlist'>
					<img />
					<p></p>
					<p></p>
				</div>
			</div>
		</div>
	)
}
export default PlaylistSide
