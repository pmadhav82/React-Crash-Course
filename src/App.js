import PageNotFound from "./PageNotFound";
import Products from "./Products";
// import Todo from './Todo';
// import Loding from './Loding';
// import User from './jsonplaceholder';

//import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
 useNavigate,
  Outlet,
  Link
} from "react-router-dom";
import Navbar from "./Nabbar";
import { useContext, useState } from "react";
import TodoApp from "./TodoApp";
//import Grid from './Grid';

//importing Contex
import userContex from "./UserContex";

const About = () => {
  let { id } = useParams();
return(
    <div className="card">
      <h1>About Me !</h1>

      <h2>My Name is:{id} </h2>
     
    </div>
)
  
};
const Profile = () => {
  let [user] = useContext(userContex);
 

  return (
    <div className="card">
      <div className="navbar">
      
        <Link to="editprofile"> Edit Profile</Link>
      </div>
<div className="table">

    <table>
     <tr>
       <th>User Name</th>
       <th>User Email</th>
     </tr>
     <tr>
       <td>{user.name}</td>
       <td>{user.email}</td>
     </tr>
    </table>
</div>
    

      <Outlet />
    </div>
  );
};
const EditProfile = () => {
  let [user, setUser] = useContext(userContex);

  let navigate = useNavigate();

 let [newUser, setNewUser] = useState({name:"", email:""});
  const submitHandeler = (ev) => {
    if(newUser.name && newUser.email){

      ev.preventDefault();
      setUser(newUser);
      setNewUser({name:"", email:""});
      navigate(-1)
   
    } else{
      return  alert("Enter user details!");
    }
  };
  return (
    <div >
  
  
      <form>
        <h2>Set new user!</h2>
        <div style={{display:'flex', flexDirection:'column' ,width:'300px',  alignItems:'center', marginLeft:'100px'}}>

        <input style={{margin:'10px', padding:'10px'}}
      required
          type="text"
          onChange={(ev) => {
            setNewUser({ ...newUser, name: ev.target.value });
          }}
          value={newUser.name}
          placeholder="Enter user name..."
          />
        <input
        style={{margin:'10px', padding:'10px'}}
          type="text"
          required
          onChange={(ev) => {
            setNewUser({ ...newUser, email: ev.target.value });
          }}
          value={newUser.email}
          placeholder="Enter email id..."
          />
          </div>
        <button onClick={()=>{navigate(-1)}}>Cancle</button>
        <button type="submit" onClick={submitHandeler}>
          Set User
        </button>
      </form>
    </div>
  );
};


const Home = () => {
 
  let [showMore, setShowMore] = useState(false);

  let text = ` This is a react crash-course. where I have introduced contex api and how to update contex value from nasted component, react-router and its different features such as useParams, useNavigate, 
   and hooks. I have added "PageNotFound" page. where users go the different url that doesn't exit page not found page will display and has link to
   go to home page.
   I have build a Todo-app, shopping cart
     To see the current user, first have to click on Login button.
          then only you can to go profile page and see the current user and 
        to chenage user, go to EditProfile page and asign new user :)
  
  `;
  return (
    <div className="card">
     <p style={{lineHeight:'1.5'}}>
        {showMore ? text : text.substring(0, 209)}
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "show less" : "show more"}
        </button>
      </p>
    </div>
  );
};

const App = () => {
  let [login, setLogin] = useState(false);

  //user and setUser as value
  let [user, setUser] = useState({
    name: "Madhav Pandey",
    email: "pmadhav@gmail.com",
  });

  const loginHandeler = () => {
    setLogin(!login);
  };

  return (
    <div className="container">
      <button onClick={loginHandeler}>{login ? "Logout" : "Login"}</button>
      <BrowserRouter>
        <Navbar />

        <userContex.Provider value={[user, setUser]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/shopping" element={<Products />} />
            <Route
              path="/profile"
              element={login ? <Profile /> : <Navigate to="/" replace />}
            >
              <Route path="editprofile" element={<EditProfile />} />
            </Route>
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </userContex.Provider>
      </BrowserRouter>

      {/* 

 <Count incrementBy = {5} title = "Counter app by 5"/>
 <Count incrementBy = {7} title = "Counter app by 7"/>

<Products   products = {[
    { name: "Computer", price: "$500", id: 1 }
  ]}
/>

 
 <Loding/>
 <User/>
 <Todo/>
 <Width/>
  */}
    </div>
  );
};

export default App;
