// Main App component that renders the entire page
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Joblisting from "./components/JobListings";
import Nav from "./components/Nav";
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


 

     
      {/* Link to view all jobs */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a href="jobs.html" className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
          View All Jobs
        </a>
      </section>
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
