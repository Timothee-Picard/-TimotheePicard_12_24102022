import {Link} from "react-router-dom";
import "./home.scss"

/**
 * Display home page
 */
export default function Home() {
  return (
    <>
        <div className="home-links">
            <Link to='/profil/12'>Profil 12</Link>
            <Link to='/profil/18'>Profil 18</Link>
        </div>
    </>
  )
}
