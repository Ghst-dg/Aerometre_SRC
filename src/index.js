import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Landing from './landing/landing';
import Main from './main/Main';
import MainDataContextProvider from './context/MainDataContext';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <span className='err'>Sorry For Inconvenience, Please Try Refreshing</span>
          <img src = "clipart2.png" alt = 'trouble getting it'/>
        </>
      );
    }

    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <MainDataContextProvider>
      <Landing />
      <Main/>
    </MainDataContextProvider>
  </ErrorBoundary>
  </React.StrictMode>
);