// import  {useEffect, useState} from 'react'
// import{Table,Button} from '@mui/material';
// import axios from 'axios';

// export default function stuTable() {

//     const[apiData,setApiData]=useState([]);
//     useEffect(()=>{
// axios.get("http://localhost:8080/api/student/all")
// .then(getData)
// setApiData(getData);
//     })
//     };[]
//    const setID=(id)=>
//    console.log(id);
//    localStorage.setItem('ID',id)
//   return (
//     <div style={marginTop=20}>
//       <Table called>
//         <Table.Header>
//             <Table.Row>
//                 <Table.HeaderCell>ID</Table.HeaderCell>
//                 <Table.HeaderCell>userName</Table.HeaderCell>
//                 <Table.HeaderCell>regNo</Table.HeaderCell>
//                 <Table.HeaderCell>email</Table.HeaderCell>
//                 <Table.HeaderCell>password</Table.HeaderCell>
//                 <Table.HeaderCell>program</Table.HeaderCell>
//                 <Table.HeaderCell>level</Table.HeaderCell>
//                 <Table.HeaderCell>Update</Table.HeaderCell>
//                 <Table.HeaderCell>Delete</Table.HeaderCell>

//             </Table.Row>
//         </Table.Header>
//         <Table.Body>
//             {apiData.map((data)=>{
//                 return
//                 <Table.Row>
//                 <Table.Cell>data.ID</Table.Cell>
//                 <Table.Cell>data.userName</Table.Cell> 
//                 <Table.Cell>data.regNo</Table.Cell>
//                 <Table.Cell>data.email</Table.Cell> 
//                 <Table.Cell>data.password</Table.Cell>
//                 <Table.Cell>data.program</Table.Cell> 
//                 <Table.HeaderCell>data.level</Table.HeaderCell>
//                 <Table.Cell>
//                     <Button color="green" onClick={()=> setID (data.id)}>Update</Button>
//                 </Table.Cell>
//                 <Table.Cell>
//                     <Button color="red" onClick={()=> setID (data.id)}>Delete</Button>
//                 </Table.Cell>
//               </Table.Row>
            

//             })}

           
           
           
//         </Table.Body>
//       </Table>
//     </div>
// //   )
// // }
