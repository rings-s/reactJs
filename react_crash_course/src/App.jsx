import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';  // Verify the path is correct
import MainLayout  from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';




// Define the App component
const App = () => {

  // add new job function
  const addJob = async (newJob) => {
    const res = fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  // Delete Job
  const deleteJob = async (id) => {
    // console.log('delete', id);
    const res = fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
      
     });
    return;
  };
  
  // Create a router instance using createBrowserRouter and configure routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> 
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage AddJobSubmit={addJob} />} />
        {/* <Route path="/jobs/:id" element={<JobPage />} /> */}
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

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
