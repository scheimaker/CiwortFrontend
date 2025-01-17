// Define your constant(s)
 // Example backend URL
// export const BASE_URL = 'http://192.168.178.51:3000/api'; // Example backend URL

// You can export more constants as needed
import { getAuth } from 'firebase/auth';
export const getFirebaseIdToken = async () => {
    const auth = getAuth(); // Get Firebase Auth instance
    const user = auth.currentUser; // Get the current authenticated user
  
    if (!user) {
      throw new Error('User not authenticated');
    }
  
    // Retrieve the Firebase ID token
    const idToken = await user.getIdToken();
    return idToken;
  };
  
  console.log('BASE_URL', process.env.NODE_ENV);
  export const BASE_URL  = process.env.NODE_ENV === 'production'
  ? 'https://heroku-ciwort-13b37a8b7e1e.herokuapp.com/api'
  : 'http://localhost:3000/api';


  // export const BASE_URL = 'https://heroku-ciwort-13b37a8b7e1e.herokuapp.com';