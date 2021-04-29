module.exports = {
	plugins: [
		require('precss'),
		require('postcss-simple-extend'),
		require('postcss-sassy-mixins'),
		require('postcss-nested-vars'),
		require('postcss-nested'),
		require('postcss-import'),
		require('postcss-custom-media'),
		require('autoprefixer')({
			'overrideBrowserslist': ['> 1%', 'last 2 versions']
		})
	]
}