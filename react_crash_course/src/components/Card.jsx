
// we use children to render what ever we rapped the content of the component
const Card = ({ children, bg='bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
}

export default Card