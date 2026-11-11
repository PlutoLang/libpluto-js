import webpack from "webpack";

export default {
	mode: "production",
	devServer: {
		static: {
			directory: "dist",
		},
	},

	// For libpluto
	resolve: {
		// The Emscripten code doesn't need shims for Node APIs
		fallback: {
			child_process: false,
			crypto: false,
			fs: false,
			path: false
		}
	},
	plugins: [
		// Fix for webpack treating "node:xyz" as a URI scheme and failing with UnhandledSchemeError
		new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
			resource.request = resource.request.replace(/^node:/, "");
		}),
	],
	performance: {
		// Suppress the asset size warning
		maxAssetSize: 4_000_000
	},
};
