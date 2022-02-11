import {Link} from 'react-router-dom';

const PageNotFound = ()=>{

return(
    <div className="card">
<h2>Page is not found :( </h2>
<h3><Link to = "/">Go to Home Page</Link></h3>
    </div>
)

}
export default PageNotFound;