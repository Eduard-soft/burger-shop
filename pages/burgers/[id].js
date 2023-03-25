import Image from 'next/image';
import styles from '../../styles/Burgers.module.css'

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:5000/items');
	const data = await res.json();

	const paths = data.map(burger => {
		return {
			params: {id: burger.id}
		}
	})

	return {
		paths,
		fallback: false
	}
}


export const getStaticProps = async (context) => {
	const id = context.params.id;

	const res = await fetch(`http://localhost:5000/items/${id}`);
	const data = await res.json();
	return {
		props: { burger: data}
	}
}


const Details = ({ burger }) => {
	console.log('details burger >>> ', burger)
	return (
		<div className={styles.singlBurger}>
			<h1>{ burger.name }</h1>
			<div className={styles.imageConta}>
				{/* <Image
						src={`${burger.image}`}
						alt={`${burger.name}`}
						width="100%"
						height="100%"
						layout="responsive"
						objectFit="cover"
						/> */}
			</div>
			<p>{ burger.desc }</p>
			<h3>{`Цена ${burger.price} рублей`}</h3>
		</div>
	)
}



export default Details;