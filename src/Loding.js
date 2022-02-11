import { useEffect,useState } from "react";

const Loding = ()=>{
let [product, setProduct] = useState([]);



useEffect(()=>{
setTimeout(()=>{
    setProduct(["Go to work","Go for shopping","Learn React", "Buy eggs"])
},5000)
},[])

let hasProduct = product.length>0;

return(
<div className="card">
    
    <ul>
       {hasProduct? product.map((p)=>{return(<li>{p}</li>)}): <p style ={{fontSize: "50px"}}>Loding...</p> }
        {}
    </ul>
</div>

)
}

export default Loding;