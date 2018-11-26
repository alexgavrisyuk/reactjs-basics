import React from 'react'

export default class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href=""> Home </a></li>
                            <li><a href=""> User </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}