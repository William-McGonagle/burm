import Head from 'next/head'
import '@fontsource/jetbrains-mono'
import '@fontsource/merriweather'

export default function Home({ documentation }) {
	// console.log(documentation)
	return (
		<>
			<Head>
				<title>Burm</title>
				<meta name='description' content='Get started with burm' />
				<link rel='icon' href='/images/svg/logo.svg' />
			</Head>
			<header>
				<nav>
					<h3 className='logo'>Burm</h3>
					<ul>
						<li>
							<a href='#'>docs</a>
						</li>
						<li>
							<a href='#'>github</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<h1>Burm is an object relational manager for bun</h1>
				<div className='command-content'>
					<h3>Install burm 0.0.10</h3>
					<p>
						To download the project from NPM, just use the command below. This
						will include burm as one of your dependencies
					</p>
					<input className='copy-command' placeholder='> npm i burm' />
					<p>See on npm</p>
				</div>
			</main>
		</>
	)
}

// export const getStaticProps = async () => {
// 	const res = await fetch('https://registry.npmjs.com/burm/latest')
// 	const data = await res.json()

// 	return {
// 		props: {
// 			documentation: data,
// 		},
// 	}
// }
