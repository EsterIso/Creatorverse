import '../styles/CreatorCard.css'
import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  const navigate = useNavigate();
  const handleEdit = async (e) => {
    const creatorID = data.id;
    navigate(`/editCreator/${creatorID}`);
  }

  const viewCreator = async (e) => {
     const creatorID = data.id;
    navigate(`/viewCreator/${creatorID}`);
  }

  const handleCardClick = (e) => {
    // Only navigate if the click wasn't on a button or link
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && !e.target.closest('button, a')) {
      viewCreator(e);
    }
  }
  return (
    <div className="card" style={{ backgroundImage: `url(${data.imageURL})` }} onClick={handleCardClick}>
      <div className="card-content">
        <h3>{data.name}</h3>
        <a href={data.url}><img src="/images/youtube-icon.png" alt="YouTube" /></a>
        <p>{data.description}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}

function CardList({ creators }) { 
  return (
    <div className="card-container">
      {creators.map((creator) => ( 
        <Card 
          key={creator.id}
          data={creator} 
        />
      ))}
    </div>
  );
}

export default CardList;