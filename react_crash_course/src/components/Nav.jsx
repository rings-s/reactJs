
import logo from '../assets/images/logo.png';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A responsive navigation bar with a logo and three links: Home, Jobs, and Add Job.
 *
 * The logo is displayed on the left side of the navigation bar and the links are displayed on the right side. The links are
 * displayed horizontally when the screen size is large enough and vertically when the screen size is small.
 */
/******  386a73e9-53f2-4fdd-957d-8e1dc377a92d  *******/
const Nav = () => {
  return (
    <div>
          {/* Navigation bar with a responsive design */}
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo and company name */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />

                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </a>
              {/* Navigation links */}
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a href="/" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Home</a>
                  <a href="/jobs" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Jobs</a>
                  <a href="/add-job" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav