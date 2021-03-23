import { useState, useEffect } from 'react'
import axios from 'axios'
import lodash from 'lodash'
import categories from './categories'
import triviaquestions from './triviaquestions'

function App() {
    const [] = useState([])
}

useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then(response) => {
        const = lodash.sortBy(response.data, [''])
    }
}