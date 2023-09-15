import SearchBar from "../SearchBar/SearchBar";
import style from "./navBar.module.css"
import { Link } from "react-router-dom";


function NavBar ({ onSearch }) {
    return(
        <>
        
         <div>
            <SearchBar onSearch={onSearch}/>
        </div>
        
        <div className={style.buttons}>
            <Link to="/about">
              <button className={style.aboutBtn}>About</button>
            </Link>

            <Link to="/home">
              <button className={style.homeBtn}>Home</button>
            </Link>

            <Link to="/favorites">
              <button className={style.favoritesBtn}>Favorites</button>
            </Link>

            <Link to="/">
              <button className={style.logOutBtn}>LogOut</button>
            </Link>

        </div>

        </>
    );
}

export default NavBar;