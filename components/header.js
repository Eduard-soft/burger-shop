import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

const Header = () => {
	return (
		<header>
		  <div>
				<SiBurgerking />
			</div>
			<nav>
				<Link href='/'>Главная</Link>
				<Link href='/about'>О нас</Link>
				<Link href='/reviev'>Отзывы</Link>
				<Link href='/burgers'>Бургеры</Link>
			</nav>
		</header>

	)
}

export default Header;