import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './PublicRoutes';
import PrivateRoute from './PrivateRoutes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ExpensesPage = lazy(() => import('pages/ExpensesPage/ExpensesPage'));
const IncomePage = lazy(() => import('pages/IncomePage/IncomePage'));
const ReportPage = lazy(() => import('pages/ReportPage/ReportPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function UserRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/report" element={<ReportPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );

  // return (
  //   <Suspense fallback={null}>
  //     <Routes>
  //       <Route element={<PublicRoute />}>
  //         <Route path="/signup" element={<SignUpPage />} />
  //         <Route path="/login" element={<LoginPage />} />
  //       </Route>
  //       <Route element={<PrivateRoute />}>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/expenses" element={<ExpensesPage />} />
  //         <Route path="/income" element={<IncomePage />} />
  //         <Route path="/report" element={<ReportPage />} />
  //       </Route>

  //       <Route path="*" element={<NotFoundPage />} />
  //     </Routes>
  //   </Suspense>
  // );
}
