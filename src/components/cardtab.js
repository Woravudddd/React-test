
import Item from "./item";
function Cardtab(props){

     const {sendItem} = props

    return(
        <div className='row' >
          {sendItem.map((element,index)=> {
             return (
              
    
        
        <div className="col-md-4 mt-3" key={index}>
        <div className='cardAll card shadow rounded ' style={{width: "18rem" , boxShadow: "5px" }}>
        <img className="card-img-top" src="https://img.freepik.com/premium-vector/cute-cat-head-cartoon-logo-cat-head-good-cat-care-related-products_487414-292.jpg?w=360" width="200" height="250"  alt="Card cap" />
        <div className=' card-body' >
        <div className="card-title">The Cat</div>
        <p className="card-text">discriptions </p>
        <ul className="list-group list-group-flush">
             

                    < Item {...element} key={index}  />
            
         
        </ul>
          </div>
          <div className="d-grid gap-2 d-md-block align-center text-center">
          <button  name="buy" className="btnBuy btn-light btn-sm btn-outline-danger btn-box text-center mx-2" >ซื้อ</button> 
          <button name="buy" className="btnTitle btn-light btn-sm btn-outline-danger btn-box mt-1 mb-1 text-center">ดูข้อมูล</button>
          </div>
          </div>
          </div>
        
          );   })}
          </div>   
        
          
    );
    
}

export default Cardtab