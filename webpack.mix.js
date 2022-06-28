const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .extract(['react', 'react-dom'])
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        // require('postcss-import'),
        require('tailwindcss'),
        // require('autoprefixer'),
    ])
    // .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    const ASSET_URL = process.env.ASSET_URL + "/";

    mix.webpackConfig(webpack => {
        return {
            resolve: {
                alias: {
                    '@': path.resolve('resources/js'),
                },
            },
            plugins: [
                new webpack.DefinePlugin({
                    "process.env.ASSET_PATH": JSON.stringify(ASSET_URL)
                })
            ],
            output: {
                publicPath: ASSET_URL
            }
        };
    });
}
else {
    mix.webpackConfig(require('./webpack.config'));
}
// if (mix.inProduction()) {
//     mix.version();
// }
