import { useState } from 'react';
import{Link} from 'react-router-dom';
import './products.css';
const Products = ()=>{
  
  const[ products, setProducts] =  useState([
    { Name: "White Shirt",id: Math.floor(Math.random()*10000), Price: 20, addedToCart: false },
    { Name: "Black Jeans",id:Math.floor(Math.random()*10000), Price: 35, addedToCart: false },
    { Name: "Leather Jacket",id:Math.floor(Math.random()*10000), Price: 50, addedToCart: false },
    { Name: "Sweater", Price: 55, id:Math.floor(Math.random()*10000), addedToCart: false },
    { Name: "Coat", Price: 80, id:Math.floor(Math.random()*10000), addedToCart: false },
  ])
  const [add, setAdd]= useState([]);
 let prices = add.map((p)=>{return p.Price});


let totalPrice = prices.reduce((pre,cru)=>pre+cru,0)





const addedToCart = (id)=>{
 

let cartItem = products.find((p)=>{
  return p.id === id;
})
cartItem.addedToCart = true;

setAdd((item)=>{return[...item, cartItem]})

setProducts(products.filter((p)=>{return p.id !== id}))
}


let[showProduct, setShowProduct]= useState(false)


const removeHandeler = (id)=>{
setProducts((item)=>{return[...item, add.find((p)=>{return p.id ===id})]})
setAdd(add.filter((p)=>{return p.id !== id}))

}


  return(
   <>
   <div className="containers">

    
     {products.map((p)=>{
      
     return( <div className="item" key={p.id}>
     <h2>{p.Name}</h2>
    
     <h3>Price:{p.Price}</h3>
     <button onClick={()=>{addedToCart(p.id)}}>Add to Cart </button>
   </div>)
     })}
   </div>
   <div>
     <button onClick={()=>{
setShowProduct(!showProduct);

     }}>Cart Items {add.length}</button>
    
   {showProduct? ( <> <h3>Total Price:{totalPrice}</h3>
     <div className='containers'>
     {add.map((item)=>{
       return(<div className='item' key={item.id}>
<p>{item.Name}</p>
<p>Price: {item.Price}</p>
<button onClick={()=>{
  removeHandeler(item.id)
}}>Remove Item</button>
       </div>)
     })}
     </div>
     </>):null}
    
   
   </div>
   </>
  )
}
 export default Products;