export default function Category({ categories, setSelectedCategory }) {
    return (
    <div>
        <h2>List of Categories</h2>
            <ul className="list_of_categories">
                {categories.map((category) => (
                        <li key={category.name}> 
                        <button
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.name}

                        
                    </button>
                    </li>
            ))}
        </ul>
            </div>
        )
    }