import { Component } from 'react';

import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <div>Error Occured!</div>;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
