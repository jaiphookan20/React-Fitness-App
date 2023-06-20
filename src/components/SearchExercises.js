import React, {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {fetchData, exerciseOptions} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);


//We want to call this only at the start, so dependencies array will be empty
useEffect(() => {
    const fetchExercisesData = async() => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
    , exerciseOptions);
      
    setBodyParts(['all', ...bodyPartsData]);
  }
  
   fetchExercisesData(); //we want to call this useEffect & fetchExercisesData func immediately ie when app loads
}, [])

const handleSearch = async () => {
  if(search) {
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises'
    , exerciseOptions);

    const searchedExercises = exercisesData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search) 
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      console.log(searchedExercises);   
      setSearch('');
      setExercises(searchedExercises)
      /* handleSearch() explanation:
        This function is called when the user performs a search.
        It first checks if the search variable is not empty.
        If it's not empty, it fetches exercises data using the fetchData function.
        It filters the fetched exercises based on whether the exercise name, target, equipment, or body part includes the search query (case-insensitive).
        The filtered exercises are stored in the searchedExercises variable.
        The console.log statement logs the searched exercises to the console (you may remove this line if not needed).
        The search state is reset to an empty string using setSearch('').
        Finally, the setExercises function is called with the searchedExercises array, presumably to update the exercises displayed based on the search results.
        The component is returned as the result of the function.
      */
  }
}
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700}
          sx={{
            fontSize: {lg: '44px', xs: '30px'}
          }}
          mb="50px"
          textAlign="center"
        >
            Awesome Exercises You  <br />
            Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField 
              sx={{
                input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
                width: { lg: '800px', xs: '350px'},
                backgroundColor: '#fff', 
                borderRadius: '40px'
              }}
              height="76px"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              /* 
                value={search} binds the search state variable to the value of the TextField. This ensures that the input field reflects the value stored in search.
                onChange={(e) => setSearch(e.target.value.toLowerCase())} is an event handler that updates the search state variable with the lowercase value of the input field whenever the user types or changes the value.
              */
              placeholder="Search Exercises"
              type="text"
            />
            <Button className="search-btn"
              sx={{
                bgcolor: '#FF2625',
                color: '#fff',
                textTransform: 'none',
                width: {lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                right: '0'
              }}
              onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises