import * as React from "react"
import { main, icon, navbar__item, links } from './style';

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
import { RoughNotation } from "react-rough-notation"

const Footer = () => {

    return (
        <div style={main}>

            <p> ℗ Sabaï Strategy™️ &nbsp;&nbsp; {new Date().getFullYear()} and beyond.</p>


            <div style={ links } className="navbar-end has-text-centered">
                <a
                    style={navbar__item}
                    href="https://soundcloud.com/the-asymetrics"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon" style={icon}>
                        <img src={soundcloud} alt="Soundcloud" />
                    </span>
                </a>
                <a
                    style={navbar__item}
                    href="https://www.instagram.com/asymetrics/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon" style={icon}>
                        <img src={insta} alt="Instagram" />
                    </span>
                </a>
                <a
                    style={navbar__item}
                    href="http://www.facebook.com/asymetrics/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon" style={icon}>
                        <img src={fb} alt="Facebook" />
                    </span>
                </a>
                <a
                    style={navbar__item}
                    href="https://www.youtube.com/channel/UCjm0hKdlJVNA5X3U3KEhEow/playlists?view_as=subscriber"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon" style={icon}>
                        <img src={tube} alt="YouTube" />
                    </span>
                </a>
                <a
                    style={navbar__item}
                    href="https://open.spotify.com/user/l4j7h7m54m3042w0l1yifk031"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="icon" style={icon}>
                        <img src={spotify} alt="Spotify" />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Footer;
