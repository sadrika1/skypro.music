import { Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  const isAuthenticated = localStorage.getItem('user') === 'true';
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />;
}
