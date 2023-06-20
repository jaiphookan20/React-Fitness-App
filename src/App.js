import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element ={<ExerciseDetail />}/>
        </Routes>
        <Footer/> 
    </Box>
  )
}

export default App



/* 

sx={{ width: { xl: '1488px'}}}: 
The sx prop in Material-UI allows you to define custom styles 
for a component using the inline CSS syntax. 

In this case, it sets the width of the <Box> component to 1488 
pixels when the viewport size matches the xl breakpoint. 
This means that when the screen size is extra-large (xl breakpoint), 
the width of the box will be 1488 pixels.

m="auto": This sets the margin property of the <Box> component to 
auto. This centers the box horizontally within its parent 
container by automatically allocating equal margins on the left 
and right sides.

To summarize, the <Box> component in the code snippet creates a 
container element with a fixed width of 400 pixels. 
When the screen size is extra-large (xl breakpoint), the width 
of the box expands to 1488 pixels. 
The box is then centered horizontally within its parent 
container.

*/