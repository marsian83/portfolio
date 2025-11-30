import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { ErrorBoundary } from "./ErrorBoundary";
import { Button } from "../ui/button";
import ThemeSwitch from "../custom/ThemeSwitch";
import Icon from "../custom/Icon";

interface PageErrorBoundaryProps {
  children: React.ReactNode;
}

const DefaultErrorFallback = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-background/95">
      <div className="fixed bottom-4 right-4">
        <ThemeSwitch />
      </div>

      <div className="relative w-full max-w-md p-8 overflow-hidden duration-500 border rounded-lg shadow-md bg-card border-border animate-in fade-in slide-in-from-bottom-4">
        {/* Animated top border */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 duration-300 rounded-full bg-primary/10 text-primary animate-in zoom-in-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h2 className="mb-2 text-2xl font-bold duration-300 delay-100 text-foreground animate-in fade-in slide-in-from-bottom-2">
            Something went wrong
          </h2>

          <p className="mb-6 duration-300 delay-150 text-muted-foreground animate-in fade-in slide-in-from-bottom-2">
            There was an error loading this page.
          </p>

          <div className="flex flex-col justify-center gap-3 duration-300 delay-200 sm:flex-row animate-in fade-in slide-in-from-bottom-2">
            <Button
              onClick={() => {
                window.location.reload();
              }}
              variant="default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 2v6h-6"></path>
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                <path d="M3 22v-6h6"></path>
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
              </svg>
              Reload Page
            </Button>

            <Button onClick={() => navigate({
              to: "/",
            })} variant="outline">
              <Icon name="House" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageErrorBoundary: React.FC<PageErrorBoundaryProps> = ({ children }) => {
  const handleError = (error: Error) => {
    console.error("Page error:", error);
  };

  return (
    <ErrorBoundary fallback={<DefaultErrorFallback />} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
};

const withPageErrorBoundary = <P extends {}>(Component: React.ComponentType<P>) => (props: P) =>
(
  <PageErrorBoundary>
    <Component {...props} />
  </PageErrorBoundary>
);

export { PageErrorBoundary, withPageErrorBoundary };
