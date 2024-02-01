import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
    const handleScroll = (id) => {
        const element = ReactDOM.findDOMNode(document.getElementById(id));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" onClick={() => handleScroll('myCarousel')}>Marko</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => handleScroll('Services')}>Services</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => handleScroll('Projects')}>Projects</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => handleScroll('Contact')}>Contact Me</button>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                {/* Your existing download link */}
                                <a className="btn btn-warning" href="https://drive.google.com/file/d/1ff86xZ8vPOicN7GkrbRH1-Bz52ybZXX0/view?usp=sharing" download>Download CV</a>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};
export default Nav;
