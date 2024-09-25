// Main App component that renders the entire page
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Joblisting from "./components/JobListings";
import Nav from "./components/Nav";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <div>
    
      <Nav />



      <Hero 
        title='Become a React Dev' 
        subtitle='Find the React job that fits your skills and needs'
      />


      <HomeCards />

      <Joblisting />

      <ViewAllJobs  />


 

     
     
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
