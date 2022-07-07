import PropTypes from 'prop-types';
import React from 'react';

import App from './components/App';

import './index.css';

/**
 * Render main application root.
 * @param {object}  props          React props.
 * @param {boolean} [props.strict] Whether to render in strict mode.
 * @returns {React.ReactNode} Rendered app.
 */
const Root = ( {
	strict = false,
} ) => {
	if ( strict ) {
		return (
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}
	return (
		<App />
	);
};

Root.propTypes = {
	strict: PropTypes.bool,
};

export default Root;
