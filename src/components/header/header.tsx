
import * as React from "react";
import { RoughNotation, RoughNotationProps } from "react-rough-notation";

const Header = (
  { color, notation, text }:
  { color: { color: string } , notation: RoughNotationProps, text: string }
) => {

    //#region STYLE
    const container = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        margin: '0 1rem 1rem',
    }
    const sized = {
        fontSize: '24px',
        marginBottom: '-17px',
    };
    //#endregion


    return (
      <div style={container}>
          <h1 style={sized}><div style={{ ...color}}><RoughNotation {...notation}>{text}</RoughNotation></div></h1>
          <p className="tag">View all</p>
          {/* <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span> */}
      </div>
    )
}

export default Header;
