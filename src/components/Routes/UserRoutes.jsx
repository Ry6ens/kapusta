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
const SettingsPage = lazy(() => import('pages/SettingsPage/SettingsPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const SupportPage = lazy(() => import('pages/SupportPage/SupportPage'));
const TermsPage = lazy(() => import('pages/TermsPage/TermsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export default function UserRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/account" element={<AccountPage />} />
          <Route path="/settings/support" element={<SupportPage />} />
          <Route path="/settings/terms" element={<TermsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
