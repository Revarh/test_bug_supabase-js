import { supabaseDataProvider } from 'ra-supabase'
import supabase from './supabase'

const dataProvider = supabaseDataProvider({
    instanceUrl: process.env.REACT_APP_SUPABASE_URL,
    apiKey: process.env.REACT_APP_SUPABASE_ANON_KEY,
    supabase
})

export default dataProvider