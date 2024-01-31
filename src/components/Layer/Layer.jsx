import styles from './Layer.module.css'
import Footer from "../Footer/Footer.jsx";

const Layer = ({children}) => {
    return (
        <div className={styles.layer}>
            {children}
            <Footer/>
        </div>
    );
};

export default Layer;
