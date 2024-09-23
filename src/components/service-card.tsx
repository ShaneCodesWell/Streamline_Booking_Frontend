import styles from './service-card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "/lib/fontawesome.js";

const ServiceCard = () => {
    return (
        <div>
            <div className={styles.serviceCard}>
                <div className="text-neutral-700 text-left">
                    <p className="font-semibold">How to write a conference paper.</p>
                    <p className="text-xs">Dr. Amos Oppong</p>
                    <p className="text-sm">Writing an introduction for your research can be a very arduous process, Let me simplify the process for you.</p>
                    <div className="flex justify-between items-center mt-2">
                        <ul className="flex space-x-1">
                            <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                            <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                            <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                            <li><FontAwesomeIcon icon="star" className="checked custom-size" /></li>
                            <li><FontAwesomeIcon icon="star" className="unchecked custom-size" /></li>
                        </ul>
                        <p className="font-semibold">$15.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;