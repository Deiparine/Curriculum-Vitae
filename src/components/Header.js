import React from 'react'
import { Link } from 'gatsby'
import LazyHero from 'react-lazy-hero'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'

import HeroBanner from '../images/hero-banner.jpg'
import headerStyles from './header.module.css'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: true
		}
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	render() {
		return (
			<div>
				{/* HERO SECTION */}
				<LazyHero
					className='hero'
					imageSrc={HeroBanner}
					color='#000000'
					opacity={0.5}
					isCentered={true}
					minHeight='85vh'
					parallaxOffset={100}
					transitionDuration={600}
					transitionTimingFunction='ease-in-out'
				>
					<div className="hero-header">
						<h1>
							{this.props.heroHeader}
						</h1>
					</div>
				</LazyHero>

				{/* NAVIGATION SECTION */}
				<Navbar expand="lg" className={headerStyles.navigationBar}>
					<NavbarBrand>
						<Link to="/" className={headerStyles.navigationBarBrand}>BAEMAXX</Link>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto navigation-list" navbar>
							<NavItem>
								<Link to="/portfolio" className={headerStyles.navigationListItem}>Portfolio of Mine!</Link>
							</NavItem>
							<NavItem>
								<Link to="/about" className={headerStyles.navigationListItem}>About Me!</Link>
							</NavItem>
							<NavItem>
								<Link to="/contact" className={headerStyles.navigationListItem}>Contact Me!</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default Header