//import './card.css'
import PropTypes from 'prop-types';


const Item = (props)=>{

    
    const {name,age,type} = props

    return(

    <div>
          <li className="list-group-item">ชื่อ = {name}</li>
          <li className="list-group-item">อายุ = {age}</li>
          <li className="list-group-item">เพศ = {type}</li>
          
     </div>
     
      
    );


}
   Item.propTypes={
    name:PropTypes.string.isRequired ,
    age:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired,


}

export default Item