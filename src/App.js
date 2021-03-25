import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './components/categories'
import Triviaquestions from './components/triviaquestions'

function App () {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setselectedCategory] = useState(null)
    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then((response) => {
            setCategories(response.data.trivia_categories)
            console.log('categories showing?', response)
        }
        )
    }, [])

    return (
        <div className="Trivia_main">
            <h1 className="App-header">Let's Play Non-Wrestling Trivia</h1>
            <div className="main-container">
                <Category category={categories}
                setselectedCategory={setselectedCategory}
                />
                <Triviaquestions category={selectedCategory}
                goBackButton={() => setselectedCategory(null)}/>
                </div>
                </div>
    )
}

export default App