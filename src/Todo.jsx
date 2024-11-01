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
// export default function Todo({task,isDone}){
//     if (isDone){
//         return <li>Finished:{task}</li>
//     }
//     return <li>Not Finished:{task}</li>
// }

// conditional rending option 3

// export default function Todo({task,isDone}){
   
//     return(
//         <li>{isDone ? 'Finished': 'Do it'}:{task}</li>
//     )
// }

// // condition rending option 4 &&

// export default function Todo({task,isDone}){
   
//     return(
//         <li>{task}{isDone && ':Done'}</li>
//     )
// }

// condition rending option 5 ||

// export default function Todo({task,isDone}){
   
//     return(
//         <li>{task}{isDone || ':Done'}</li>
//     )
// }

// conditional rendering option 6
export default function Todo({task,isDone}){
    let listItem;
    if (isDone){
        listItem= <li>Finished:{task}</li>
    }
    else{
        listItem= <li>Not Finished:{task}</li>  
    }
    return listItem
    
}





