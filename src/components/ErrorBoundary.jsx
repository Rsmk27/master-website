import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
                    <div className="max-w-2xl text-center">
                        <div className="mb-8">
                            <svg
                                className="w-24 h-24 mx-auto text-red-500 mb-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-xl text-slate-400 mb-8">
                                We're sorry, but something unexpected happened. Please try refreshing the page.
                            </p>

                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <details className="text-left bg-slate-900 p-6 rounded-lg border border-red-500/20 mb-6">
                                    <summary className="cursor-pointer text-red-400 font-mono mb-4 hover:text-red-300">
                                        Error Details (Development Only)
                                    </summary>
                                    <div className="text-sm text-slate-300 font-mono overflow-auto">
                                        <p className="text-red-400 mb-2">{this.state.error.toString()}</p>
                                        <pre className="text-xs whitespace-pre-wrap">
                                            {this.state.errorInfo?.componentStack}
                                        </pre>
                                    </div>
                                </details>
                            )}

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Refresh Page
                                </button>
                                <a
                                    href="/"
                                    className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors"
                                >
                                    Go Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
