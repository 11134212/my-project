import PlaylistSide from './components/PlaylistSide'
import Sidebar from './components/Sidebar'

export const MainPage = () => {
	return (
		<div className='wrapper2'>
			<div>
				<Sidebar />
			</div>
			<div>
				<PlaylistSide />
			</div>
			{/* <div>player</div> */}
		</div>
	)
}
export default MainPage
