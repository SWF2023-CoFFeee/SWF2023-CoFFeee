import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/common/layout/Layout';
import RouterMeta from './lib/RouterMeta';
import ErrorFallback from './components/common/layout/ErrorFallback';
import LoadingFallback from './components/common/layout/LoadingFallback';

const lazyImport = (pageName: string) =>
  lazy(() => import(`@/pages/${pageName}`));

const pages = Object.keys(RouterMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    path: RouterMeta[componentKey].path,
  };
});

const DynamicRoutes = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map(({ Component, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ resetErrorBoundary }) => (
                    <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
                  )}
                >
                  <Component />
                </ErrorBoundary>
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default DynamicRoutes;
