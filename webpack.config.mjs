import { fileURLToPath } from "url";
/** @type {import("webpack").Configuration} */
const extensionConfig = {
	mode: "none", // when packaging we set this to 'production'
	entry: "./src/inline-console.js",
	output: {
		path: fileURLToPath(new URL("dist", import.meta.url)),
	},
	devtool: "nosources-source-map",
};

export default extensionConfig;
