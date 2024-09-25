import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';  // Verify the path is correct
import MainLayout  from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
// Create a router instance using createBrowserRouter and configure routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} /> 
      <Route path="/jobs" element={<JobsPage />} />
    </Route>
  )
);
// Define the App component
const App = () => {
  return (
    <>

      {/* Render the MainLayout component */}
      {/* RouterProvider component provided by React Router to enable routing */}

      <RouterProvider router={router} />
    </>
  );
}

// Export the App component as the default export of this module
export default App;
