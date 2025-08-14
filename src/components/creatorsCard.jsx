import '../styles/CreatorCard.css'
import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  const navigate = useNavigate();
  const handleEdit = async (e) => {
    const creatorID = data.id;
    navigate(`/editCreator?id=${creatorID}`)
  }

  return (
    <div className="card" style={{ backgroundImage: `url(${data.imageURL})` }}>
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