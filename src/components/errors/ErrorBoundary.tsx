import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex min-h-[200px] items-center justify-center p-6">
          <div className="relative max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="rounded-2xl border border-red-200/60 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-8 shadow-lg backdrop-blur-sm dark:border-red-800/30 dark:from-red-950/20 dark:to-orange-950/10">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-red-100/80 p-4 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 animate-pulse text-red-600 dark:text-red-400" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                    Oops! Something went wrong
                  </h3>
                  <p className="text-sm text-red-700/80 dark:text-red-300/80">
                    {this.state.error?.message || "An unexpected error occurred"}
                  </p>
                </div>

                <Button
                  size="sm"
                  className="group mt-2 bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600"
                  onClick={() => this.setState({ hasError: false, error: null })}
                >
                  <RotateCcw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const withErrorBoundary = <P extends {}>(Component: React.ComponentType<P>) => (props: P) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

export { ErrorBoundary, withErrorBoundary };

