import './App.css';
import InputForm from './components/InputForm';
import Header from './components/HelloComponent';
import { useState } from 'react';
import Cardtab from './components/cardtab';
//import Item from './components/item';
function App() {

  const initData =[
    
    {id : 1 , name : "สมชาย" , age : 3 , type :"ชาย"},
    {id : 2 , name : "สมชาย1" , age : 4 , type :"หญิง"},
    {id : 3 , name : "สมชาย2" , age : 5 , type :"ชาย"},
    {id : 4 , name : "สมชาย3" , age : 5 , type :"ชาย"},
    {id : 5 , name : "สมชาย4" , age : 2 , type :"ชาย"},
    {id : 6 , name : "สมชาย5" , age : 13 , type :"หญิง"},
  
  ]
  const [dataItem,setDataitem] = useState(initData)
  const onAddNewItems = (newItems)=>{
              
  
    setDataitem((prevData)=> {

      return [newItems,...prevData]
    })

  }


  
  return (
 <div>
    < Header   />

    < InputForm onaddItems ={onAddNewItems}   />
    <div className='container mt-3'>
    
    
 
       
      
     
           < Cardtab sendItem ={dataItem} />
  
   
      
     
      
      </div>
  
  
 </div>

  );
}

export default App;
