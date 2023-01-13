import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

export const PlaylistSide = () => {
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
					<Link
						className='link'
						href={'/Register'}
						style={{ letterSpacing: '0px' }}
					>
						Зарегистрироваться
					</Link>
					<Link className='link' href={'/Login'}>
						<button>
							<span>Войти</span>
						</button>
					</Link>
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
