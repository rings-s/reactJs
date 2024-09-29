import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "100px auto", // Ensure proper CSS unit usage
};

const Spinner = ({ loading }) => { // Accept 'loading' as a prop
  return (
    <ClipLoader
      color="#4338ca" // Style the loader color
      loading={loading} // Use the 'loading' prop to control the spinner's visibility
      cssOverride={override} // Custom CSS styles
      size={150} // Set the size of the spinner
    />
  );
};

export default Spinner;
