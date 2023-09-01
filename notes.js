// Auto Reload or Hot Reload not working in Gitpod by default;
// (article link: https://github.com/facebook/create-react-app/issues/11897)

// Solution: Copy the following Code to 'node_modules/react-scripts/config/webpackDevServer.config.js' inside the
//          'return' statement of 'module.exports' (normally at the end);

// client: {
//     webSocketURL: { hostname: undefined, pathname: undefined, port: '0' },
//   },
//   port: 3000,
