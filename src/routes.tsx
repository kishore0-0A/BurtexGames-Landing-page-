import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, Component: HomePage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
