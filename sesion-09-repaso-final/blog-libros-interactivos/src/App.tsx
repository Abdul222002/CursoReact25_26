import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

const BookDetailPage = lazy(() => import("./pages/BookDetailPage"));
const CreateBookPage = lazy(() => import("./pages/CreateBookPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritosPage"));


const App = () => {
  return (
    <Routes>
      <Route path="/books/:id" element={<BookDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/libro/:id" element={
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <BookDetailPage />
          </Suspense>

        </ErrorBoundary>
      } />
      <Route path="/create" element={
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <CreateBookPage />
          </Suspense>
        </ErrorBoundary>
      } />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default App;
