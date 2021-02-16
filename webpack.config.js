module.exports = {
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
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
