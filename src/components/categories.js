export default function Category (categories, setselectedCategory) {
return (
    <section>
    <h2>Choose a Category</h2>
<ul className="category_list">
{categories.map((category, idx) => (
    <li key={idx}>
        <button className="category-button" onClick={() => setselectedCategory(category)}>
            {category.name}
        </button>
        </li>
))
}
)
</ul>
    </section>
)
}

