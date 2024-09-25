import jobs from "../jobs.json";
import Joblisting from "./JobListing";
const JobListings = () => {

    // console.log(jobs); as an array we loop through it and create a list using the map method
  return (
    <div>
         {/* Job browsing section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Individual job listings */}
            {jobs.map((job) => (
              <Joblisting key={job.id} job={job} />
            ))}
            {/* Example of a job listing card */}
           
          </div>
        </div>
      </section>

        
    </div>
  )
}

export default JobListings