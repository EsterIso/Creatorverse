import { supabase } from '../client.js'

async function DelCreator(ID) {
    try{
        const { data, error } = await supabase
            .from('creators')
            .delete()
            .eq('id', ID)

        if (error) throw error
        return data
    } catch (error) {
      console.error('Error Deleting Creator:', error.message);
    } 
}

export default DelCreator;