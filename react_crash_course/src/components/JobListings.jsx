import { useState, useEffect } from "react";
import Joblisting from "./JobListing";

const JobListings = ({ isHome = false }) => {
  // console.log(jobs); as an array we loop through it and create a list using the map method
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
  
        setJobs(data);
  
      } catch (error) {

        console.log('Error fetching jobs:', error); 
      
      } finally {

        setLoading(false);
      }
    }

    fetchJobs();
  }, []);
  return (
    <div>
         {/* Job browsing section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "All Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Individual job listings */}
              {jobs.map((job) => (
                <Joblisting key={job.id} job={job} />
              ))}
           
          </div>
        </div>
      </section>

        
    </div>
  )
}

export default JobListings