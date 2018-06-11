import React from "react";
import Link from "gatsby-link";

import instagram from "../img/instagram.png";
import logo from "../img/AlamBlackSmall.png";

const Navbar = () => (
	<nav className="navbar is-transparent">
		<div className="container">
			<div className="navbar-brand">
				<Link to="/" className="navbar-item">
					<figure className="image">
						<img
							src={logo}
							alt="Home"
							style={{ maxHeight: "80px" }}
							// height="70px"
						/>
					</figure>
				</Link>
			</div>
			{/* <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div> */}
			<div className="navbar-end">
				<a
					className="navbar-item"
					href="https://www.instagram.com/alampanah"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="icon is-medium">
						<img
							src={instagram}
							alt="Instagram Logo"
							style={{ maxHeight: "80px" }}
						/>
					</span>
				</a>
			</div>
		</div>
	</nav>
);

export default Navbar;
