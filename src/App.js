import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './components/categories'
import TriviaQuestions from './components/triviaquestions'


 function App () {
   const [categories, setCategories] = useState([])
   useEffect(() => {
       console.log('useEffect run', categories)
    axios.get('https://opentdb.com/api_category.php').then((response) => {
            setCategories(response.data.trivia_categories)
   })
}, [])
    
    if (setCategories) {
        return  <TriviaQuestions setCategories={setCategories} />
    }
console.log('rendering yet?', categories)
return (
    <div className="Trivia_main">
             <h1 className="App-header">Let's Play Non-Wrestling Trivia</h1>
             <div className="main-container">
                 <Category Category={categories}
                categories={categories}
                />
                </div>
                </div>
)


}

export default App
