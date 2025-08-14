import NavBar from "../components/NavBar";
import { useState } from "react";
import PostCreator from "../supabase/PostCreator.js";
import { useNavigate } from "react-router-dom";
import '../styles/AddCreator.css'


function AddCreator () {
    const [formData, setFormData] = useState({ name: '', url: '', description: '', imageURL: ''});

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try{
        const data = formData;
        const result = await PostCreator(data);

        console.log(result);
        navigate('/');
      } catch (error) {
        console.error('Error Submitting Creator', error.message);
      }
    }

  return ( 
    
    <div className="Add-Creator-container">
        <NavBar />
        
        <form onSubmit={handleSubmit} className="addCreator-form">
          <span className="page-title">
            Add Creator
          </span>
          <div id="name-section">
            <label name='name'>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
          </div>
          <div id="URL-section">
            <label name='URL'>URL</label>
            <input type="text" name="url" value={formData.url} onChange={handleInputChange}/>
          </div>
          <div id="description-section">
            <label name='description'>Description</label>
            <textarea type="text" name="description" value={formData.description} onChange={handleInputChange}> </textarea>
          </div>
          <div id="image-section">
            <label name='image-URL'>Image URL</label>
            <input type="text" name="imageURL" value={formData.imageURL} onChange={handleInputChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>

        
    </div>
  )
}

export default AddCreator;