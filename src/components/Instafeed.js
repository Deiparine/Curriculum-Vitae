import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import InstagramEmbed from 'react-instagram-embed'

class Instafeed extends React.Component {
	render() {
		const Instagram = () => (
			<StaticQuery
				query={graphql`
					allInstaNode {
						edges {
							node {
								id
								likes
								comments
								mediaType
								preview
								original
								timestamp
								caption
								localFile {
									childImageSharp {
										fixed(width: 150, height: 150) {
											...GatsbyImageSharpFixed
										}
									}
								}
								thumbnails {
									src
									config_width
									config_height
								}
								dimensions {
									height
									width
								}
							}
						}
					}
				`}
		)
		return (
			
		)
	}
}

export default Instafeed

const 