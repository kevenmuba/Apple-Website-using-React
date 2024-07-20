import NavbarList from './NavbarList'
import logo from '../../images/icons/logo-sm.png'
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import { useEffect } from "react";
import $, { event } from "jquery";
import { Navbar } from "react-bootstrap";


function Nav() {
	useEffect(() => {
		$(".search-link").click(function (event) {
			event.preventDefault();
			$(".navbar-collapse.collapse").removeClass("show");
			$(".searchbox").slideDown();
		});
	}, []);
 
	return (
		<div>
			<div className="nav-tool fixed-top ">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md ">
						<Navbar
							className="w-100"
							collapseOnSelect
							expand="lg"
							variant="dark">
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />

							<a className="navbar-brand mx-auto apple-logo" href="/">
								<img src={logo} alt="Apple logo" />
							</a>

							<Navbar.Collapse id="responsive-navbar-nav">
								<ul className="navbar-nav nav-justified w-100 nav-fill costom-color">
									<NavbarList LinkUrl="/mac/" LinkName="Mac" />
									<NavbarList LinkUrl="/iphone/" LinkName="iphone" />
									<NavbarList LinkUrl="/ipad/" LinkName="ipad" />
									<NavbarList LinkUrl="/watch/" LinkName="watch" />
									<NavbarList LinkUrl="/tv/" LinkName="tv" />
									<NavbarList LinkUrl="/Music/" LinkName="Music" />
									<NavbarList LinkUrl="/Support/" LinkName="Support" />
									<li className="nav-item">
										<a
											className="search-link nav-link js-scroll-trigger"
											href="/search/">
											<img src={search} alt="Search logo" />
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link js-scroll-trigger logo-link"
											href="/cart/">
											<img src={cart} alt="Cart logo" />
										</a>
									</li>
								</ul>
							</Navbar.Collapse>
						</Navbar>
					</nav>
				</div>
			</div>

			<section className="searchbox">
				<form>
					<input type="text" name="searchbox" />
					<button id="submitButton" className="btn btn-primary" type="submit">
						Search
					</button>
				</form>
			</section>
		</div>
	);
}

export default Nav;

/*
1, navbar: This class is used to create a navigation bar, which is a horizontal bar
 2,navbar-toggleable-sm: This class is used to make the navigation bar "toggleable" on small screens 
 3,collapseOnSelect: This property tells the Navbar to collapse (hide the navigation links) when a user clicks on a link. This is useful for mobile devices where screen space is limited.
 4,variant="dark": This sets the color scheme of the Navbar to a dark background with light text. There is also a "light" variant that has a light background with dark text
 5,<Navbar.Toggle aria-controls="responsive-navbar-nav" />: This is a special component that creates a button or icon to toggle the visibility of the Navbar's navigation links on smaller screens. The aria-controls attribute associates this toggle button with the Navbar's navigation links(When the screen size is small, the Navbar will collapse, and the navigation links will be hidden. The <Navbar.Toggle> component creates a button or icon that users can click to show or hide the navigation links.)
 6,<Navbar.Collapse id="responsive-navbar-nav">: This is the component that holds the actual navigation links or menu items. When the Navbar is in its collapsed state (on smaller screens), this is the section that will be hidden and revealed by the toggle button.
 7,nav-fill: This class makes sure that the navigation links fill the available width, even if there are only a few of them.
 8,show:-The "show" class is likely used to show or hide the navbar collapse element, which contains the navigation links. By removing the "show" class, the code is effectively hiding the navbar collapse when the user clicks on the search link. it is bootstrap class
 9,*/