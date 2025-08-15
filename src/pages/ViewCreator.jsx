import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { supabase } from '../client.js'
import { useNavigate } from "react-router-dom";
function ViewCreator () {

    const [searchParams] = useSearchParams();
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
            name: '',
            url: '',
            description: '',
            imageURL: ''
        });

    const handleEdit = async (e) => {
        navigate(`/editCreator/${id}`);
    }
    useEffect(() => {
            const fetchCreator = async () => {
                const { data, error } = await supabase  // Don't forget to destructure 'error'
                    .from('creators')
                    .select('*')
                    .eq('id', id)
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
    
            if (id) {
                fetchCreator();
            }
        }, [id]);

    return (
        <div>
            <NavBar />
            <div className="card" style={{ backgroundImage: `url(${formData.imageURL})`, scale: '90%', height: '50vw'}}>
                <div className="card-content">
                    <h3>{formData.name}</h3>
                    <a href={formData.url}><img src="/images/youtube-icon.png" alt="YouTube" /></a>
                    <p>{formData.description}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default ViewCreator;