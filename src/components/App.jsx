import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
const HomePage = lazy(() => import('../Pages/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const TasksPage = lazy(() => import('../Pages/Tasks'));
const NotFoundPage = lazy(() => import('../Pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register"
         element={<RestrictedRoute redirectTo="/tasks" component= {<RegisterPage/>}/>} />
        <Route path="/login"
         element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage/>}/>} />
        <Route path="/tasks" 
        element={<PrivateRoute redirectTo="/login" component={<TasksPage/>}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
