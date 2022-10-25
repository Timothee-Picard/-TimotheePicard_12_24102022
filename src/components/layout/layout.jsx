import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg"

import icoMeditate from "../../assets/icon-meditate.svg"
import icoSwimming from "../../assets/icon-swimming.svg"
import icoBike from "../../assets/icon-bike.svg"
import icoDumbbells from "../../assets/icon-dumbbell.svg"
import "./layout.scss"

export default function Layout() {
    const pathname = useLocation().pathname
  return (
    <>
        <header>
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            <nav>
                <Link className={`${pathname === '/' ? "active" : ""}`} to='/'>Accueil</Link>
                <Link className={`${pathname === '/a-propos' ? "active" : ""}`} to='/profil/18'>Profil</Link>
                <a href="src/components/layout/layout.jsx#">Réglage</a>
                <a href="src/components/layout/layout.jsx#">Communauté</a>
            </nav>
        </header>
        <div className="mainContainer">
            <aside>
                <nav>
                    <a href="src/components/layout/layout.jsx#">
                        <img src={icoMeditate} alt="logo" />
                    </a>
                    <a href="src/components/layout/layout.jsx#">
                        <img src={icoSwimming} alt="logo" />
                    </a>
                    <a href="src/components/layout/layout.jsx#">
                        <img src={icoBike} alt="logo" />
                    </a>
                    <a href="src/components/layout/layout.jsx#">
                        <img src={icoDumbbells} alt="logo" />
                    </a>
                </nav>
                <p>Copiryght, SportSee 2020</p>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    </>
  )
}
