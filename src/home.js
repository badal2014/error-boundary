import React from 'react';
// import LazyLoad from './lazyLoad';
import ExtraComponent from './extraComponent';
import ErrorBoundary from './errorBoundary';
const OtherComponent = React.lazy(() => import('./lazyLoad'));

class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
  }
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            ref: 0
        }
    }

    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        console.log(this.state.count)
    }
    handleSomething = () => {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    // handleClick(e) {
    //    throw new Error("Icrashed")
    // }
    render() {
        return (
            <div>
                <h1>In Home</h1>
                <ErrorBoundary>
                    <BuggyCounter />
                </ErrorBoundary>
                <button type="button" data-letter="badal" data-getasdf="huria" onClick={this.handleClick}>Letter</button>
                <React.Suspense fallback={<ExtraComponent />}>
                    <OtherComponent />
                </React.Suspense>
            </div>
        )
    }
}