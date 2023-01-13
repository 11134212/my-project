import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
	return (
		<div className='center'>
			<img
				src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
				className='w-52 mb-5'
			/>
			{Object.values(providers).map(provider => (
				<div key={provider.name}>
					<button
						onClick={() => signIn(provider.id, { callbackUrl: '/MainPage' })}
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	)
}
console.log(Login)

export default Login

export async function getServerSideProps() {
	const providers = await getProviders()

	return {
		props: {
			providers,
		},
	}
}
