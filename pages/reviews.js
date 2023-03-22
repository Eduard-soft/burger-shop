import React, { useState, useEffect } from "react";
import Head from "next/head";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/comments');
			const data = await response.json();
			setReviews(data);
		}
		getData();
	}, []);

	console.log(reviews)

	return (
		<>
		  <Head>
				<title>Жирные бургеры | Отзывы</title>
				<meta name="title" content="Жирные бургеры"/>
			</Head>
		  <div>
				<h1>Отзывы клиентов</h1>
				<div className="reviews">
					{ !!reviews.length && reviews.slice(0, 20).map(res => {
						return (
							<div key={res.id} className='review'>
								{res.id}
								{`${res.body.slice(0, 90)}...`}
							</div>
						)
					})}
				</div>
			</div>
		</>
		
	)
}

export default Reviews