import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <h1>Kino<span>Room</span></h1>
                <ul>
                    <li><h1>Наши контакты:</h1></li>
                    <li><h3>Адрес:</h3></li>
                    <li>Брест, 1-я Брестская улица, 42</li>
                    <li>Гомель, ул. Ильича 333</li>
                    <li>Минск, ул. Петра Мстиславца 9</li>
                    <li><h3>Режим работы:</h3>Круглосуточно</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
