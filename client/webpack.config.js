const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babiliPlugin = require('babili-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

let SERVICE_URL = JSON.stringify('http://localhost:5000');
//let SERVICE_URL = JSON.stringify('http://endereco-da-sua-api');
let plugins = [];

plugins.push(new HtmlWebpackPlugin({
    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
    },    
    filename: 'index.html',
    template: __dirname + '/main.html',
}));

plugins.push(
    new extractTextPlugin("styles.css")
);

plugins.push(
    new webpack.ProvidePlugin({
           $: 'jquery/dist/jquery.js',
           jQuery: 'jquery/dist/jquery.js',
           'window.jQuery' : 'jquery/dist/jquery.js'
           
    })
);

plugins.push(
    new webpack.optimize.CommonsChunkPlugin(
        { 
            name: 'vendor', 
            filename: 'vendor.bundle.js'
        }
    )
);

plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
             

if (process.env.NODE_ENV == 'production') {

    // SERVICE_URL = JSON.stringify('http://localhost:5200');

    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    plugins.push(new webpack.optimize.AggressiveMergingPlugin());

    // plugins.push(new webpack.HotModuleReplacementPlugin());
    
    plugins.push(new babiliPlugin(
    {
            mangle : false
    }, 
    { 
        test: /\.js$/i,
        comments: false//,
        //sourceMap: true
    }));

    plugins.push(new optimizeCSSAssetsPlugin({
         cssProcessor: require('cssnano'),
         cssProcessorOptions: { 
             discardComments: {
                 removeAll: true 
             }
         },
         canPrint: true
      }));  

   //   plugins.push(new CompressionPlugin());

    // plugins.push(new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0
    //   })
    // );
 }


plugins.push(new webpack.DefinePlugin({ SERVICE_URL }));

module.exports = {
    entry : {
            app: './app.js',
            vendor : ['angular', 'angular-animate', 'angular-resource', 'angular-route', 'bootstrap', 'angular-ui-bootstrap', 'fullcalendar', 'highcharts', 'highcharts-ng']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath : process.env.NODE_ENV == 'production' ? '' : '/'
    }, 
    module: {
        rules: [
            {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                     loader: 'babel-loader'
                 }
            },
            { 
                test: /\.html$/,
                use: { 
                    loader: 'html-loader', 
                    options: { ignoreCustomFragments: [/\{\{.*?}}/] }
                 }
                },
            {
                test: /\.css$/,
                use : extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : 'css-loader'
                })

                //loader: 'style-loader!css-loader'
            },

            {
                test: /\.scss$/,
                use : extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : 'css-loader!sass-loader'
                })

                //loader: 'style-loader!css-loader'
            },
            {
                test: require.resolve('highcharts'),
                use: {
                    loader: 'expose-loader',
                    options: 'Highcharts'
                }
            },
           
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            {                 test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }  
        ]
    },devServer: {
        historyApiFallback: true,
        // hot: true
       // proxy: { ... }
    },
    plugins//,
    //devtool: 'source-map'//'cheap-module-eval-source-map'// : 'source-map',
}