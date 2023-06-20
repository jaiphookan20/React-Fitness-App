import {React, useState, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

/* The Exercises component is responsible for displaying a 
    paginated list of exercises based on the provided exercises 
*/
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
  const [currentPage, setCurrentPage ] = useState(1);
  const exercisesPerPage = 9; //number of exercises to display per page.
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  /* IMPORTANT*/
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise); 

  /* logic explanation of currentExercises:
  
  Let's consider an array of 20 exercises:
  For page 3 (currentPage = 3), the calculations would be as follows:

  indexOfLastExercise = 3 * 9 = 27. However, since the maximum index in the array is 19, indexOfLastExercise is capped to 19.
  indexOfFirstExercise = 19 - 9 = 10
  currentExercises = exercises.slice(10, 19) (This would extract elements at indices 10 to 18 from the exercises array)
  So, on page 3, currentExercises would contain the exercises with indices 10 to 18 from the exercises array.
  
  */

  //accepts the event and the value of current page (material UI automatically passes both the event and value of clicked page unde the hood)
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top: 1800, behavior: 'smooth'}) //when a page is clicked, scroll to the top of the results page
  }

  useEffect(() => {
    const fetchExercisesData = async() => {
      let exercisesData = [];

      //bodyPart is already set to 'all' by default at the start
      if(bodyPart === 'all') {
        // Then fetch all the exercises
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises'
        , exerciseOptions);
      }
      else {
        // Otherwise if a particular bodyPart has been selected, fetch only the data related to that bodyPart chosen from the horizontal scroll - bar
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
        , exerciseOptions);
      }

      setExercises(exercisesData); 
      //set value of exercises (chosen) on the basis of chosen bodyPart from horizontal scroll bar
      // if no bodyPart chosen, show all exercises
    }

    fetchExercisesData(); //called each time chosen bodyPart (from horizontal scroll menu changes)
  },[bodyPart]);

  return (
    <Box id="exercises" sx={{mt: {lg: '110px'}}} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
          Showing Results
      </Typography>
      <Stack direction="row" sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center"> 
        {/* mapping through currentExercises and not full 'exercises' */}
        { currentExercises.map((exercise, index) => {
            return <ExerciseCard key={index} exercise={exercise}/>
          })
        }
      </Stack>
      <Stack mt="100px" alignItems="center">
          {/* Show Pagination only if num of exercises is greater than 9 */}
          {exercises.length > 9 && (
            <Pagination 
              color="standard" shape="rounded" defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage} onChange={paginate} size="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises