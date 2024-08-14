import * as React from "react"
import { main, icon, navbar__item, navBar__title, navbar__brand, links } from './style';
import { Link } from 'gatsby';
//@ts-ignore
import insta from '../../img/social/instagram.svg';
//@ts-ignore
import soundcloud from '../../img/social/soundcloud.svg'
//@ts-ignore
import spotify from '../../img/social/spotify.svg'
//@ts-ignore
import fb from '../../img/social/facebook.svg'
//@ts-ignore
import tube from '../../img/social/youtube.svg'
import { RoughNotation } from "react-rough-notation";

const Navbar = () => {

    const [menu, setMenu] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<string>('');
    let navBarActiveClass: string = '';

    // const toggleMenu = React.useCallback(
    //     () => {
    //         menu 
    //             ? navBarActiveClass = 'is-active'
    //             : navBarActiveClass = '';
            
    //         menu = !menu;
    //     },
    //     [],
    // );

    return (
      <nav
        className="
          navbar
          is-transparent
          is-three-quarters-mobile
          is-two-thirds-tablet
          is-half-desktop
          is-one-third-widescreen
          is-one-quarter-fullhd
        "
        role="navigation"
        aria-label="main-navigation"
      >
        <div style={main} className="container">
          <div className="is-flex-touch" style={navbar__brand}>
            <Link
              to="/"
              onClick={() => { setSelectedItem('') }}
              className="is-flex-touch"
              style={navbar__item}
              title="Logo"
            >
                <RoughNotation
                  animationDelay={5000}
                  animationDuration={1500}
                  color="linen"
                  type="highlight"
                  show={true}
                >
                  <h1 style={navBar__title}>Asymetrics</h1>
                </RoughNotation>
            </Link>
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
            //   onClick={() => toggleMenu()}
            //   onKeyDown={() => toggleMenu()}
              onClick={() => setMenu}
              onKeyDown={() => setMenu}
              role="navigation"
            >
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
