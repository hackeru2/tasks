import React from 'react';
import logo from './logo.png';
function Navbar() {

    let links = ['link1', 'הוספת שטחים'

    ].map(link => <li className="nav-item" >
        <a className="nav-link" href={"#" + link.replace(" ", "-")}>{link} <span className="sr-only">(current)</span></a>
    </li>)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarTogglerDemo01">
                <a className="navbar-brand " href="#">
                    <img src={logo} />
                </a>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0 float-right">
                    {/* {links} */}
                    <li className="nav-item">
                        <a className="nav-link" href="#"> קבל הצעות אישיות   <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">מחשבון שטחים <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">תגמול שותפים</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">הוספת נכס</a>
                    </li>
                    <li className="nav-item mr-2 mb-2">
                        <button className="btn btn-outline-success my-2 my-sm-0 float-left" type="submit">Search</button>
                    </li>
                    <li>
                        <input className="form-control   float-left mr-4" type="search" placeholder="Search" aria-label="Search" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;