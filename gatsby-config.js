module.exports = {
	siteMetadata: {
		title: `BAEMAXX`,
		description: `Jan Karlo P. Deiparine's Curriculum Vitae powered by Gatsby and React.`,
		author: `Jan Karlo Deiparine`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/baemaxx-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-source-instagram-all`,
			options: {
				access_token: "2166738462.c339e7c.ab110dc78f274812b4d0e75a28d128f3",
			},
		},
	],
}
