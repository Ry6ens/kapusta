import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PublicRoute from './PublicRoutes';
// import PrivateRoute from './PrivateRoutes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ExpensesPage = lazy(() => import('pages/ExpensesPage/ExpensesPage'));
const AddExpensesPage = lazy(() => import('pages/AddExpensesPage/AddExpensesPage'));
const IncomePage = lazy(() => import('pages/IncomePage/IncomePage'));
const AddIncomePage = lazy(() => import('pages/AddIncomePage/AddIncomePage'));
const ReportPage = lazy(() => import('pages/ReportPage/ReportPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function UserRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/expenses" element={<ExpensesPage />}>
          <Route path="add" element={<AddExpensesPage />} />
        </Route>
        <Route path="/income" element={<IncomePage />}>
          <Route path="add" element={<AddIncomePage />} />
        </Route>
        <Route path="/report" element={<ReportPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );

  // return (
  //   <Suspense fallback={null}>
  //     <Routes>
  //       <Route element={<PublicRoute />}>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/registration" element={<RegisterPage />} />
  //         <Route path="/login" element={<LoginPage />} />
  //       </Route>
  //       <Route element={<PrivateRoute />}>
  //         <Route path="/report" element={<ReportPage />} />
  //       </Route>

  //       <Route path="*" element={<NotFoundPage />} />
  //     </Routes>
  //   </Suspense>
  // );
}
