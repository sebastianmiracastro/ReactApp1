import './Footer.css'
import {FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaUserAlt} from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="Icons">
            <nav className="Links">
                <ul className="List">
                    <li><a href="" alt="WhatsApp"><FaWhatsapp/>WhatsApp</a></li>
                    <li><a href="" alt="Instagram"><FaInstagram/>Instagram</a></li>
                    <li><a href="" alt="FaceBook"><FaFacebook/>FaceBook</a></li>
                    <li><a href="" alt="Twitter"><FaTwitter/>Twitter</a></li>
                    <li><a href="https://competent-mirzakhani-463e67.netlify.app/" alt="User"><FaUserAlt/> Sebastian Mira Castro</a></li>
                </ul>
            </nav>
        </div>

    )
}