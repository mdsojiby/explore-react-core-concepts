// export default function Todo({task,isDone}){
   
//     return(
//         <li>Task:{task}</li>
//     )
// }

// conditional rendering option 1
// export default function Todo({task,isDone}){
//     if(isDone===true){
//         return <li>Finished:{task}</li>
//     }
//     else{
//         return <li>Not Finished:{task}</li>
//     }
   
// }


// conditional rendering option 2
export default function Todo({task,isDone}){
    if (isDone){
        return <li>Finished:{task}</li>
    }
    return <li>Noot Finished:{task}</li>
}