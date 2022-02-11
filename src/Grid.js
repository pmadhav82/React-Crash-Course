import { Component } from "react";
import Contact
 from "./Contact";
class Grid extends Component{
constructor(){
    super();
    this.state={
        contacts: [{
            id:1,
            name:"Madhav",
            email:"pmadhav279@gmail.com"
        },{
            id:2,
            name:"Nishanta",
            email:"nishanta@gmail.com"
        },{
            id:3,
            name:"Shyam",
            email:"shyam@gmail.com"
        }
    ]
    }
}
render(){
  let  {contacts}= this.state;

    return(<div>
{contacts.map((contact)=>{
    
    return(<div>
        
        <Contact  name = {contact.name} email = {contact.email}/>
    </div>)
})}
    </div>)
}

}
export default Grid;