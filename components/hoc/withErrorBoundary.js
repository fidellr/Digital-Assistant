import React, { Component } from "react";

function withErrorBoundary(component) {
  const Children = component;
  return class extends Component {
    constructor() {
      super();
      this.state = {
        hasError: false
      };
    }

    static getDerivedStateFromError(err) {
      console.log("err", err);
      return { hasError: true };
    }

    render() {
      const { hasError } = this.state;
      if (hasError) return <Text>Something Went Wrong..</Text>;
      return <Children {...this.props} />;
    }
  };
}

export default withErrorBoundary;
