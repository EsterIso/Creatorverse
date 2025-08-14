import { supabase } from '../client.js'

async function PostCreator(formData) {
    try{
    const { data, error } = await supabase
        .from('creators')
        .insert([formData])
        .select()

      if (error) throw error

      return data;
    } catch (error) {
      console.error('Error creating creator:', error.message)
    } 
}

export default PostCreator;