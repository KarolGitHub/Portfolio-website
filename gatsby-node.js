const path = require('path');
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
          'react-dom': '@hot-loader/react-dom',
          emotion: path.resolve('./node_modules/emotion'),
        },
      },
    });
  }
};
