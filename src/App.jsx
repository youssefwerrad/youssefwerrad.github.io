import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
