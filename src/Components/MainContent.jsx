import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import Cards from './cards';

const MainContent = () => {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../public/Data.JSON')
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data.Dhaicha); // Update state with the fetched data
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once


  return (
    
         
    <Box className='flex justify-center items-center h-auto pb-4 bg-gray-700'>
    {loading ?
        <CircularProgress className='text-[8rem]'/>
    : error ? <p className='text-6xl text-red-500'>{error.massage}</p> 
    : <Cards Data={users}/> }
    </Box>
     
   
  )
}

export default MainContent