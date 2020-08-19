import React, { Component } from 'react';
import Container from '../post-details-container';
import Title from '../title';


class ComponentErrorBoundery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('There is an error ', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <Title title="Something went wrong..."></Title>
                </Container>
            )
        }

        return (this.props.children);
    }
}

export default ComponentErrorBoundery;