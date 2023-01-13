import { useSession } from 'next-auth/react'
import React from 'react'
import { MdHomeFilled, MdAdd } from 'react-icons/md'
import { RiSearchLine, RiHeartLine } from 'react-icons/ri'
import { TfiLayoutMediaRightAlt } from 'react-icons/tfi'

export const Sidebar = () => {
	const { data: session, status } = useSession()
	console.log(session)
	return (
		<div className='catalog'>
			<img
				style={{ width: '156px', paddingLeft: '24px' }}
				src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
			/>
			<div className='active'>
				<div className='all'>
					<MdHomeFilled
						className='icons'
						style={{ width: '28px', height: '28px' }}
					/>
					<span>Главная</span>
				</div>
				<div className='all'>
					<RiSearchLine
						className='icons'
						style={{ width: '28px', height: '28px' }}
					/>
					<span>Поиск</span>
				</div>
				<div className='all'>
					<TfiLayoutMediaRightAlt
						className='icons'
						style={{ width: '28px', height: '28px' }}
					/>
					<span>Моя медиатека</span>
				</div>
			</div>
			<div className='myplaylist'>
				<div className='play'>
					<MdAdd
						style={{
							width: '24px',
							height: '24px',
							backgroundColor: '#a7a7a7',
							color: 'black',
							borderRadius: '2px',
						}}
						className='icons2'
					/>
					<span>Создать плейлист</span>
				</div>
				<div className='play'>
					<RiHeartLine
						className='icons2'
						style={{ width: '24px', height: '24px' }}
					/>
					<span>Любимые треки</span>
				</div>
			</div>
		</div>
	)
}
export default Sidebar
