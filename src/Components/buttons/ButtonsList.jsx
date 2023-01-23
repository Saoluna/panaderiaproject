
export default function ButtonsList({categories, filterCategory}) {
  return (
    <div className="categories">
      {categories.map(category => (
        <button 
        type='button' className="btn-category"
        onClick={() => filterCategory (category)} 
        key= {category} >
          
        </button>
      ))}
    </div>
  )
}
