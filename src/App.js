import axios from 'axios'
import { useState, useEffect } from 'react'
// import Category from './components/categories'


 function App () {
   const [categories, setCategories] = useState([])
   useEffect(() => {
       console.log('useEffect run', categories)
    axios.get('https://opentdb.com/api_category.php').then((response) => {
            setCategories(response.data.trivia_categories)
   })
}, [])
console.log('rendering yet?', categories)
return null;
}

export default App