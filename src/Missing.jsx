import  {Link} from 'react-router-dom';

function Missing(){
    return(
       <main className='Missing'>
          <h2>Page Not Found!</h2>
          <p>
            <Link to='/'>Visit Our Home Page</Link>
          </p>
       </main>
    );
}
export default Missing;