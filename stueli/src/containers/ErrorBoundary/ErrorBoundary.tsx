import { Component } from 'react';
import ErrorPage from '../../components/ErrorPage';
// import { getLoggerInstance } from "utils/logger"

// const logger = getLoggerInstance()

interface ErrorBoundaryProps {
  showScreen?: boolean;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(_error: any, _errorInfo: any) {
    // You can also log the error to an error reporting service
    // logger.jsError(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.showScreen ? (
        <ErrorPage
          header="Oops, an error has occurred"
          title={this.state.error?.message}
        />
      ) : (
        <span>Oops, an error has occurred</span>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
