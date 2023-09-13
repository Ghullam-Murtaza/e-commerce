// used '@babel/plugin-proposal-export-default-from' but the error did not went. But the following works

// imported from a 'default export' and exported as 'default export'
// export logo from "./logo/logo.png";

// imported from a 'default export' and exported as 'named export' (so when needed I can 'import' multiples 'images' in one line using 'named imports')
export {default as logo} from "./logo/logo.png";
