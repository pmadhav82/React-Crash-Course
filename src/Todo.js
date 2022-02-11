import { useState } from "react";
import{useLocation} from 'react-router-dom';
import Grid from "./Grid";
const Todo = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");
  let [people, setPeople] = useState([]);

let [button, setButton]= useState("Add Person")


  const formHandeler = (e) => {
    e.preventDefault();
    setButton("Add Person");
    if (name && email && age) {
      const person = { id: new Date().getTime().toString(), name, email, age };
      setPeople((p) => {
        return [...p, person];
      });

      setName("");
      setEmail("");
      setAge("");
    } else {
       return alert("field can not be empty..");
    }
  };



const editHandeler =( id)=>{


let todoToEdit = people.find((p)=>{
   return p.id === id;
 
})
let newPeople = people.filter((p) => {
    return p.id !== id;
  });
  setButton("Update Person")
  setPeople(newPeople);
setName(todoToEdit.name);
setEmail(todoToEdit.email);
setAge(todoToEdit.age);



}









  const deleteHandeler = (id) => {
    let newPeople = people.filter((p) => {
      return p.id !== id;
    });
    setPeople(newPeople);
  };


//useLocation hook
let location = useLocation();


  return (

    <div className="card">
      <h2>Add Person</h2>
<h2>{location.state} </h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label>Age:</label>
        <input
          type="text"
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />
        <button id="addperson" type="submit" onClick={formHandeler}>
        {button}
        </button>
      </form>
<table className="table">
  <thead>{people.length>0 && <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>}
   
  </thead>

      {people.map((p) => {
        return (
  <tbody>
    <tr key={p.id}>
      <td>{p.name}</td>
      <td>{p.email}</td>
      <td>{p.age}</td>
      <td>  <button
              onClick={() => {
                deleteHandeler(p.id);
              }}
            >
              Delete
            </button>

            <button  onClick={()=>{editHandeler(p.id)}}>Edit</button></td>
    </tr>
    </tbody>
    


        );
      })}
      </table>
      
    </div>
  );
};
export default Todo;
