
// we can pass props from App.jsx to Hero.jsx or inside the hero it self as a prop or only or as a parameters in the function
const Hero = ({ title, subtitle }) => {
  return (
    <div>

             {/* Hero section to attract attention and provide main message */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                {/* Ensure that `title` or props.title is being passed as a prop */}
                {title}            
            </h1>
            <p className="my-4 text-xl text-white">
                {/* Ensure that `subtitle` or props.subtitle is being passed as a prop */}
              {subtitle}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero