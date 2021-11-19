import './NavBar.css'
import logo from '../../../images/logo192.png'

export const NavBar = () => {
    return (
        <div className="ContainerNavBar">
            <img className="ImgNav" alt="ImgNavBar" src={logo}></img>
            <nav className="Navbar">
                <ul className="UlNavBar">
                    <li className="liNavBar"><a href="#" className="LinkNavBarLi">Home</a></li>
                    <li className="liNavBar"><a href="#" className="LinkNavBarLi">About</a></li>
                    <li className="liNavBar"><a href="#" className="LinkNavBarLi">Products</a></li>
                    <li className="liNavBar"><a href="#" className="LinkNavBarLi">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}