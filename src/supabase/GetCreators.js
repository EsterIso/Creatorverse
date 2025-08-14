import { supabase } from '../client.js';

async function GetCreators() {
        try {
            const { data, error, count } = await supabase
            .from('creators')
            .select('*', { count: 'exact' }) // Include count

            // Handle errors
            if (error) {
            console.error('Database error:', error.message);
            throw error
            }

            // Check response
            console.log('Response data:', data);
            console.log('Total count:', count);
            console.log('Records retrieved:', data?.length || 0);

            // Validate data
            if (!data || data.length === 0) {
            console.log('No records found in the table');
            return []
            }

            // Process each record
            data.forEach((record, index) => {
            console.log(`Record ${index + 1}:`, record)
            })

            return data

        } catch (err) {
            console.error('Failed to fetch records:', err)
            return null
        }
    }

export default GetCreators;