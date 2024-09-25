import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Nav = () => {
    const linkClass = ({ isActive }) => 
        isActive ? 'bg-black text-white py-2 px-3 rounded-md' : 'text-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <div>
            {/* Navigation bar with a responsive design */}
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo and company name */}
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                React Jobs
                            </span>
                        </NavLink>
                        {/* Navigation links */}
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={({ isActive }) => linkClass({ isActive })}>Home</NavLink>
                                <NavLink to="/jobs" className={({ isActive }) => linkClass({ isActive })}>Jobs</NavLink>
                                <NavLink to="/add-job" className={({ isActive }) => linkClass({ isActive })}>Add Job</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
