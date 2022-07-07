import React from 'react';
import ReactDOM from 'react-dom/client';

import Root from './Root';

import './index.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render( <Root strict={ ! ! module.hot } /> );

if ( module.hot ) {
	module.hot.accept( './Root', () => {
		// eslint-disable-next-line global-require
		const NextRoot = require( './Root' ).default;
		root.render( <NextRoot /> );
	} );
}
