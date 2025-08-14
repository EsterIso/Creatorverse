'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import GetCreators from '../supabase/getCreators.js';
import CardList from '../components/creatorsCard.jsx';

function ShowCreators() {
    const [creators, setCreators] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const data = await GetCreators();
                
                if (data.length === 0) {
                    setError('No Creators Added');
                } else {
                    setCreators(data);
                }
            } catch (err) {
                console.error('Error fetching creators:', err);
                setError('Error loading creators. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchCreators();
    }, []);

    if (loading) {
        return (
            <div>
                <NavBar/>
                <div className='main container'>
                    <div className='creator-list'>
                        <p>Loading creators...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <NavBar/>
                <div className='main container'>
                    <div className='creator-list'>
                        <p style={{fontWeight: "bold", fontSize: 50}}>{error}</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        
        <div>
            <NavBar/>
            <div className='main container'>
                <div className='creator-list'>
                    <CardList creators={creators} />
                </div>
            </div>
        </div>
    )
}

export default ShowCreators;