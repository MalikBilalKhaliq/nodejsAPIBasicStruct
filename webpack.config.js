// import.meta.url workaround to set __dirname
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development', // Set the mode to 'development'
  entry: './src/server.js', // Entry point of your Node.js application
  target: 'node', // Specify Node.js as the target environment
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the compiled code
    filename: 'bundle.cjs', // Output filename,
    libraryTarget: 'commonjs2', // Specify the library target for CommonJS modules
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript (optional)
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
};
