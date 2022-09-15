import { Link } from 'react-router-dom';

function Links() {
    return (
        <>
            <div className='topbar-links'>
                <Link to="/" className='t-tab-link'>Home</Link>
                <Link to="/showAll" className='t-tab-link'>Show All Projects</Link>
                <Link to="/addProject" className='t-tab-link'>Add New Project</Link>
            </div>
        </>
    )
}

export default Links;