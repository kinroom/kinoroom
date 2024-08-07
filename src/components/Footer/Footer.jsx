import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<h1>
					Kino<span>Room</span>
				</h1>
				<ul>
					<li>
						<h2><a href="https://wa.me/79159391426" target="_blank">Связаться с нами</a></h2>
					</li>
					<li>
						<h3>Адрес:</h3>
					</li>
					<li>ул. Тверская, 13с2 </li>
					<li>ул. Арбат, 29/2с1</li>
					<li>1-й Хорошёвский проезд, 14к1</li>
					<li>Беговая 1А</li>
					<li>Люсиновская улица 64</li>

					<li>
						<h3>Режим работы:</h3>Круглосуточно
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
