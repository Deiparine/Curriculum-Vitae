import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'

class Portfolio extends React.Component {
	render(props) {
		const siteTitle = 'PORTFOLIO'
		const siteDescription = this.props.data.site.siteMetadata.description

		return (
			<Layout>
				<Header heroHeader='PORTFOLIO' />
				<SEO title={siteTitle} description={siteDescription} />
				<div className="page-content">
					<Container>
						<Row>
							<Col>
								<h1>Portfolio</h1>
							</Col>
						</Row>
					</Container>
				</div>
			</Layout>
		)
	}
}

export default Portfolio

export const PortfolioPageQuery = graphql`
	query PortfolioPageQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`