import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStatefromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("An error has occured", { error, errorInfo });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Error</h1>;
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
