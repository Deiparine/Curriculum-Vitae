import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'

class About extends React.Component {
	render(props) {
		const siteTitle = 'ABOUT'
		const siteDescription = this.props.data.site.siteMetadata.description

		return (
			<Layout>
				<Header heroHeader='ABOUT' />
				<SEO title={siteTitle} description={siteDescription} />
				<div className="page-content">
					<Container>
						<Row>
							<Col>
								<h1>About</h1>
							</Col>
						</Row>
					</Container>
				</div>
			</Layout>
		)
	}
}

export default About

export const AboutPageQuery = graphql`
	query AboutPageQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`