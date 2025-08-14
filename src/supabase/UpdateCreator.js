import { supabase } from '../client.js'

async function UpdateCreator(ID, formData) {
    try{
    const { data, error } = await supabase
        .from('creators')
        .update({
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL})
        .eq('id', ID)

      if (error) throw error
      return data;
    } catch (error) {
      console.error('Error updating creator:', error.message)
    } 
}

export default UpdateCreator;