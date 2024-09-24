// Define a functional component called App
const intro = () => {
    // Declare a variable to store the name that will be displayed in the greeting
    var name = "John"
    // Declare constants for arithmetic operations
    const x = 10;
    const y = 20;
    const styles = {
      color: "red",
      fontSize: "24px",
    }
  
    // Array of names to be rendered in a list
    const names = ["John", "Jane", "Joe", "Jill"];
  
    const loggedIn = false;
  
    if (loggedIn) {
      return <p>You are logged in</p>
    }
    
    
  
    // Return JSX to be rendered
    return (
      // React Fragment allows grouping a list of children without adding extra nodes to the DOM
      <>
        <h1 className="text-8xl">Hello {name}</h1>
  
        <p style={styles}>The sum of {x} and {y} is {x + y}</p>
  
        {/* Map over the names array and render each name in a list item */}
        <ul>
          {names.map((name, index) => (
            // Render list item with a key for React's reconciliation process
            <li key={index}>{name}</li>  // Using index as a key here; consider a unique ID if available
          ))}
        </ul>
          {/* another way iternary kind like if ? or && and : as else */}
        {loggedIn ? <p>You are logged in</p> : <p>You are not logged in</p>}
      </>
    )
  }
  
  // Export the App component as the default export of this module
  export default intro;
  