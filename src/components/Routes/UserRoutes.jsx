import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PublicRoute from './PublicRoutes';
// import PrivateRoute from './PrivateRoutes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ReportPage = lazy(() => import('pages/ReportPage/ReportPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function UserRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/home" element={<HomePage />} />

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
