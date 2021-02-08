import React, { Component } from "react";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="top-left">
                    <div className="top-left-frame">
                        <div className="top-left-box">
                            <a href="" style={{cursor: "pointer"}}>
                                <div className="top-left-box-line">
                                    <svg data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img">
                                        <g><path d="M146,52V4H4v192h192v-48h4v52H0V0h200v52H196z"></path></g>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div className="top-left-word">
                            <p>
                                <a href="" target="_self">
                                    <span style={{letterSpacing: "0.1px"}}>deep<span style={{color: "#26574B"}}>in</span>.dev</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;