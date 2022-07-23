import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import '@fontsource/jetbrains-mono'
import '@fontsource/merriweather'

export default function Home({ documentation }) {
	const [copyText, setCopyText] = useState('copy')

	const copiedText = (e) => {
		navigator.clipboard.writeText('npm i burm')
		setCopyText('copied!')
	}

	return (
		<>
			<Head>
				<title>{documentation.name}</title>
				<meta name='description' content='Get started with burm' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>
				<nav>
					<h3 className='logo'>{documentation.name}</h3>
					<ul>
						<li>
							<a href='#'>docs</a>
						</li>
						<li>
							<Link href='https://github.com/William-McGonagle/burm'>
								<a href='#'>github</a>
							</Link>
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
					<button
						className='copy-command'
						data-copy-option={copyText}
						onClick={copiedText}
					>
						&gt; npm i burm
					</button>
					<p>See on npm</p>
				</div>
			</main>
		</>
	)
}

export const getStaticProps = async () => {
	const res = await fetch('https://registry.npmjs.com/burm/latest')
	const data = await res.json()

	return {
		props: {
			documentation: data,
		},
	}
}
