// const CompressionPlugin = require("compression-webpack-plugin");
// const zlib = require("zlib");
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	watch: true,
	// optimization: {
	// 	minimize: true,
	//   },
	// plugins: [
	// 	new CompressionPlugin({
	// 		filename: "[path][base].gz",
	// 		algorithm: "gzip",
	// 		test: /\.js$|\.css$|\.html$/,
	// 		threshold: 10240,
	// 		minRatio: 0.8,
	// 	}),
	// 	new CompressionPlugin({
	// 		filename: "[path][base].br",
	// 		algorithm: "brotliCompress",
	// 		test: /\.(js|css|html|svg)$/,
	// 		compressionOptions: {
	// 			params: {
	// 				[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
	// 			},
	// 		},
	// 		threshold: 10240,
	// 		minRatio: 0.8,
	// 	}),
	// ],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					{
						loader: "sass-loader",
						options: {
							implementation: require("node-sass"),
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								config: "./postcss.config.js",
							},
						},
					},
				],
			},
		],
	},
};
