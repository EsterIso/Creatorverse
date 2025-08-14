import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import UpdateCreator from '../supabase/UpdateCreator.js';
import DelCreator from '../supabase/DelCreator.js';
import { supabase } from '../client.js'
import { useNavigate } from 'react-router-dom';
import '../styles/AddCreator.css'

function EditCreator() {  // Remove async
    const [searchParams] = useSearchParams();
    const creatorID = searchParams.get('id');

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase  // Don't forget to destructure 'error'
                .from('creators')
                .select('*')
                .eq('id', creatorID)
                .single();

            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                console.log('Retrieved data:', data);
                setFormData({
                    name: data.name,
                    url: data.url,
                    description: data.description,
                    imageURL: data.imageURL
                });
            }
        };

        if (creatorID) {
            fetchCreator();
        }
    }, [creatorID]);


    const handleSubmit = async (e) =>{
      e.preventDefault();

      try{
        const data = { ...formData, id: creatorID };
        const result = await UpdateCreator( creatorID, data);

        console.log(result);
        navigate('/');
      } catch (error) {
        console.error('Error Submitting Creator', error.message);
      }
    }

    const handleDel = async (e) =>{
      try {
        const result = await DelCreator(creatorID);

        console.log(result)
        navigate('/');
      }catch (error) {
        console.error('Error Deleting Creator', error.message);
      }
    } 

    return (
        <div className="Add-Creator-container">
        <NavBar />
        
        <form onSubmit={handleSubmit} className="addCreator-form">
          <span className="page-title">
            Edit Creator
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
          <div id='button-section'>
            <button type="submit">Submit</button>
            <button type="delete" className='delButton' onClick={handleDel}>delete</button>
          </div>
        </form>

        
    </div>
    )
}

export default EditCreator;