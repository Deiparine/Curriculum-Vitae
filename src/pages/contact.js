import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Header from '../components/Header'

class Contact extends React.Component {
	render(props) {
		const siteTitle = 'CONTACT'
		const siteDescription = this.props.data.site.siteMetadata.description

		return (
			<Layout>
				<Header heroHeader='CONTACT' />
				<SEO title={siteTitle} description={siteDescription} />
				<div className="page-content">
					<Container>
						<Row>
							<Col>
								<h1>Contact</h1>
							</Col>
						</Row>
					</Container>
				</div>
			</Layout>
		)
	}
}

export default Contact

export const ContactPageQuery = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
				author
				description
			}
		}
	}
`