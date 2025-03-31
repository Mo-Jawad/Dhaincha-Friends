import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import Cards from './Cards';

const MainContent = ({ searchQuery}) => {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../Datafet.json')
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

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
    if (filtered.length == 0) {
        setFilteredUsers(users)
    }
  }, [searchQuery, users]);


  return (
    
         
    <Box className='flex w-[100%] justify-center items-center h-auto pb-4 bg-gray-700'>
    {loading ?
         <div className='h-[60rem] w-full flex justify-center items-center'> <span className="loading loading-infinity h-[7rem] w-[7rem] text-success justify-center items-center"></span> </div>
    : error ? <p className='text-6xl text-red-500'>{error.massage}</p> 
    : <Cards filteredUsers={filteredUsers}/> }
    </Box>
     
   
  )
}

export default MainContent