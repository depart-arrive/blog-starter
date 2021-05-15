export default function Categories({ categories }) {
  return (
    <span className="ml-1">
      
      {categories > 0 ? (
        categories((category, index) => (
          <span key={index} className="ml-1">
            {category}
          </span>
        ))
      ) : (
        <span className="ml-1"> - {categories} </span>
      )}
    </span>
  )
}
