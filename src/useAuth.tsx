import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://tjlwggvvpuuptbkevuvs.supabase.co', process.env.PUBLIC_ANON_KEY)


async function signInWithEmail(email: String) {
  const { user, error } = await supabase.auth.signIn({
    email: email
  })
}