import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

    componentDidCatch(error , info){
        this.setState({hasError : true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children;
    }
}