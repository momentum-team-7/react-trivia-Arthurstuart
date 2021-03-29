// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Category from './categories';

// export default function Questions({ setCategories }) {
//     const [question, setQuestions] = useState([])
//     useEffect(() => {
//     axios.get(`https://opentdb.com/api.php?amount=10&category=${setCategories.id}`).then((response) => {
//         setQuestions(response.data.results)
//         console.log(response.data.results)
            
//     })
//     }, [])

//     return (
//         <div className="App">
//         <h1>{question.name}</h1>
//         <div>
//             {question.map((question) => (
//             <div>{question.question}
//             <ul>
//             {/* <GamepadButton>{answer}</GamepadButton>
//             <GamepadButton>{answer}</GamepadButton>
//             <GamepadButton>{answer}</GamepadButton>
//             <GamepadButton>{answer}</GamepadButton>  */}
//             </ul>
//             </div>
//             ))}
//           </div>
//         </div>
//       )
// }
