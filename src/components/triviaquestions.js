import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from '/.components/categories'

function Triviaquestions ({category, goBackButton}) {
    const [question, setquestions] = useState([])
    useEffect(() => {
        axios.get('https://opentdb.com/api.php?amount=10&category=${selectedCategory.id').then((response) => {
            setquestions(response.data.results)
            console.log('Questions?', question)
    }}))
        }
        

export default Triviaquestions

