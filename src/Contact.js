import {Component} from 'react';

class Contact extends Component{
    render(){
   let   {name,email}= this.props;
        return(<div className='card'>
            <h2>{name}</h2>
            <h3>{email}</h3>

        </div>)
    }
}
export default Contact;