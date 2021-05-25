const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCSSExtract = require('mini-css-extract-plugin')
const path = require('path')

const javascriptRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				'@babel/preset-react',
				[
					'@babel/preset-env',
					{
						'targets': {
							'chrome': '38'
						}
					}
				]
			],
			plugins: [
				'@babel/plugin-proposal-optional-chaining',
				'@babel/transform-runtime'
			]
		}
	}
}

const stylesRules = {
	test: /\.css$/i,
	use: [
		MiniCSSExtract.loader,
		'css-loader',
		// 'sass-loader',
		'postcss-loader'
	],
}

const filesRules = {
	test: /\.(webp|png|svg|jpg|gif|mp4)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: '/assets/images/'
			},
		},
	],
}

const fontsRules = {
	test: /\.(woff|woff2|eot|ttf|otf)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				name: '[name].[ext]',
				outputPath: '/assets/fonts/',
			},
		},
	],
}

const developmentPlugins = [
]

const productionPlugins = [
	new CleanWebpackPlugin(),
	new CompressionPlugin(),
	new CssMinimizerPlugin(),
]

module.exports = (_env, { mode }) => ({
	output: {
		path: path.resolve(process.cwd(), __dirname + '/webOS/app/'),
		filename: 'app.min.js',
		publicPath: 'app',
	},
	watch: (mode === 'production' ? false : true),
	module: {
		rules: [
			javascriptRules,
			stylesRules,
			filesRules,
			fontsRules
		]
	},
	devServer: {
		historyApiFallback: false
	},
	plugins: [
		...(mode === 'production' ? productionPlugins : developmentPlugins),
		new HtmlWebpackPlugin({
			favicon: './src/assets/images/logos/guiahtv/favicon.ico',
			title: 'Guíah TV | Un espacio de fe',
			template: './src/index.html',
			filename: '../index.html',
		}),
		new MiniCSSExtract({
			filename: 'app.min.css',
			chunkFilename: 'main.min.css',
		}),
	].filter(Boolean)
})