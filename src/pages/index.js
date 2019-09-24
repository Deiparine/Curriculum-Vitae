import React from 'react'
import { graphql } from 'gatsby'
// import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.css'
import '../components/Styles.css'

class Index extends React.Component {

	render() {
		const siteTitle = this.props.data.site.siteMetadata.title
		const siteDescription = this.props.data.site.siteMetadata.description

		return (
			<Layout>
				<Header heroHeader='SALVE MUNDI' />
				<SEO title={siteTitle} description={siteDescription} />
				<div className="page-content">
					<div className="container">
						<div className="row">
							<div className="col">
								<h1>Index Text</h1>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default Index

export const IndexPageQuery = graphql `
 query IndexPageQuery {
	site {
		siteMetadata {
			title
			description
			author
		}
	}
 }
`