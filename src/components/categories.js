export default function Category (categories, setselectedCategory) {
return (
<div className="category_list">
    <h2>Choose a Category</h2>
        <ul className="list_of_categories">
            {categories.map((category, idx) => (
                <li key={category.category}>      
                <button
                    classname="choose-category"
                    onClick={() => setselectedCategory(category)}
                        >
                        {category.results}
                        </button>
                </li>
            ))}
      </ul>
</div>
)
}