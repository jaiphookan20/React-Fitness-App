import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" 
        sx = { 
            { gap: 
                {sm: '122px', xs: '40px'}, 
                mt: { sm: '32px', xs: '20px'},
                justifyContent: 'none'}} 
                px="20px">
        {/* Logo */}
        <Link to="/">
            <img src = {Logo} alt='logo' style={{width: '48px', height: '48px', margin: '0 20px'}}/>
        </Link>
        {/* Navigation Links */}
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to="/" style={
                {textDecoration: 'none', 
                color: '#3A1212', 
                borderBottom: '3px solid #DD2625' }}
                >Home
            </Link>
            <a href="#exercises" style={
                {textDecoration: 'none', 
                color: '#3A1212'}} 
                > Exercises
            </a>
        </Stack>
    </Stack>
  )
}

export default Navbar


/* 

The Navbar component is structured as a vertical stack 
(<Stack> component) with a direction of row, which 
arranges its children in a horizontal line. 

Here's an explanation of the different parts:

direction="row": This sets the direction of the stack to be 
horizontal, so its children will be placed in a row.

justifyContent="space-around": This aligns the children within 
the stack and distributes the available space evenly around them, 
creating equal spacing between each child.

sx: The sx prop in Material-UI allows you to define custom styles 
for a component using the inline CSS syntax. 

In this case, it sets the following styles:

gap: Sets the gap between the children elements. It uses a 
responsive approach, providing different values for different 
screen sizes. 

For small (sm) screens, the gap is set to 122px, and for extra 
small (xs) screens, the gap is set to 40px.
mt: Sets the top margin of the stack. Similar to the gap property, it provides different values for 
different screen sizes.

justifyContent: Overrides the previous justifyContent property 
and sets it to 'none', effectively removing the space 
distribution between the children.

(padding along x axis) px="20px": Sets the horizontal padding of the stack to 20px, 
creating space on the left and right sides of the stack.

Now, let's look at the in-line styling applied to the child elements within the Navbar component:

Logo Image:

style={{ width: '48px', height: '48px', margin: '0 20px' }}: 
This sets the width and height of the image to 48px and adds a 
margin of 0 on the top and bottom, and 20px on the left and 
right sides. This will create a logo image with a fixed size 
and some spacing around it.

Home Link:
style={{ textDecoration: 'none', color: '#3A1212', 
borderBottom: '3px solid #DD2625' }}: 

This sets the styling of the <Link> component to 
remove the default underline decoration 
(textDecoration: 'none'), set the color of the text to #3A1212, 
and add a 3px solid border at the bottom with the color #DD2625. 

This creates a visual indication (a colored line at the bottom) 
when the link is active or selected.

Exercises Link:
style={{ textDecoration: 'none', color: '#3A1212' }}: 
This sets the styling of the <a> component to remove the 
default underline decoration and set the color of the text to 
#3A1212. 

This creates a regular link without any additional visual effects.

*/