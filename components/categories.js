export default function Categories({ categories }) {
  return (
    <span className="ml-2">
      
      {categories > 0 ? (
        categories((category, index) => (
          <span key={index} className="ml-2">
            {category}
          </span>
        ))
      ) : (
        <span className="ml-2">{categories}</span>
      )}
    </span>
  ) 
}
