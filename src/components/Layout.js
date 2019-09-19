import React from 'react'

import Footer from './Footer'

class Layout extends React.Component {
	render() {
		const { children } = this.props
		let header
		let footer

		return (
			<div>
				{header}
				{children}
				{footer}
				<Footer />
			</div>
		)
	}
}

export default Layout