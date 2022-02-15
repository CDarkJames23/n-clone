import React from "react";
import ErrorBoundaryComponent from "./component";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorName: error.toString(),
      componentStack: errorInfo.componentStack,
    });
  }
  render() {
    const { errorName, componentStack, hasError } = this.state;
    return hasError ? (
      <ErrorBoundaryComponent
        errorName={errorName}
        componentStack={componentStack}
      />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
