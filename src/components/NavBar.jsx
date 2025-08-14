import '../styles/NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/');
    };
    
    return (
        <div className="nav-Container">
            <div className="page-name" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                Creatorverse
            </div>
            <div className='button-section'>
                <button onClick={() => navigate('/addCreator')}>Add Creator</button>
            </div>
        </div>
    )
}

export default NavBar;