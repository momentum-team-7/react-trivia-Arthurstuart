import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './components/categories'


 function App () {
   const [categories, setCategories] = useState([])
   useEffect(() => {
       console.log('useEffect run', categories)
       axios.get('https://opentdb.com/api_category.php').then((response) => {setCategories(response.data.trivia_categories)
    }) 
  }, [])
console.log('rendering yet?', setCategories)
    return (
        <div className="Trivia_main">
        <h1 className="App-header">Let's Play Non-Wrestling Trivia</h1>
        <div className="main-container">
            <Category category={categories}
            setCategories={setCategories}
            />
                </div>
                </div>
    )
}

export default App
