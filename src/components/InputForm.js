import { useState } from "react"

const InputForm = (props)=>{

    
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [type,setType] = useState('')



   const InputName = (event)=>{

        setName(event.target.value)
     } 
     const InputAge = (event)=>{

        setAge(event.target.value)
     } 
     const InputType = (event)=>{

        setType(event.target.value)
     } 
     const saveItem = (event)=>{
        event.preventDefault()
       
     
         
         
        const data = {
        
            name:name,
            age:age,
            type:type,
        }
        props.onaddItems(data)
        console.log(data)
        setName('')
        setAge('')
        setType('')
     }

   
    return(
         <div >
            <div className="container mt-3">
                
         
            <form onSubmit={saveItem}>
            <div className="row g-3 align-center">
            <div className="col-6 ">
                <label  className="label-control"> ชื่อ-นามสกุล</label>
                <input className="form-control " type="text" id='name' name="name" onChange={InputName} value={name} required/>
                </div>
                <div className="col-md-2 col-6 ">
                <label className="label-control">อายุ</label>
                <input className="form-control" type="text" id='age' name="age" onChange={InputAge} value={age} required/>
            </div>
            <div className="col-md-6 mt-3">
                <label className="label-control">เพศ</label>
                <input className="form-radio mx-2 " type="radio" id="type" name="type" onChange={InputType} value="ตัวผู้" required/>ตัวผู้
                <input className="form-radio mx-2" type="radio" id="type" name="type" onChange={InputType} value="ตัวเมีย" required/>ตัวเมีย
            </div>
            </div>
            <input  className="btnBuy btn-light btn-sm btn-outline-danger btn-box text-center mt-3" type="submit" id='submit' name="submit" />
            
            </form>
            </div>
            </div>
            
    )


}
export default InputForm