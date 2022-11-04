import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg"

import icoMeditate from "../../assets/icon-meditate.svg"
import icoSwimming from "../../assets/icon-swimming.svg"
import icoBike from "../../assets/icon-bike.svg"
import icoDumbbells from "../../assets/icon-dumbbell.svg"
import "./layout.scss"

/**
 * TODO:
 */
export default function Layout() {
    const pathname = useLocation().pathname
  return (
    <>
        <header>
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            <nav>
                <Link className={`${pathname === '/' ? "active" : ""}`} to='/'>Accueil</Link>
                <Link className={`${pathname === '/a-propos' ? "active" : ""}`} to='/profil/18'>Profil</Link>
                <a href="#">Réglage</a>
                <a href="#">Communauté</a>
            </nav>
        </header>
        <div className="mainContainer">
            <aside>
                <div className="content">
                    <nav>
                        <a href="#">
                            <img src={icoMeditate} alt="logo" />
                        </a>
                        <a href="#">
                            <img src={icoSwimming} alt="logo" />
                        </a>
                        <a href="#">
                            <img src={icoBike} alt="logo" />
                        </a>
                        <a href="#">
                            <img src={icoDumbbells} alt="logo" />
                        </a>
                    </nav>
                    <p>Copiryght, SportSee 2020</p>
                </div>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    </>
  )
}
