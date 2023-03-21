import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className='not-found'>
			<h1>ОЙ...</h1>
			<h2>Такой страницы нет!</h2>
			<p>Перейти на <Link href='/'>главную страницу</Link></p>
		</div>
	)
}

export default NotFoundPage;