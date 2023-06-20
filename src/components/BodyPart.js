import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png';

//It takes three props: item, setBodyPart, and bodyPart.
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    /* The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.*/
    <Stack type="button" alignItems="center" justifyContent = "center" className="bodyPart-card"
      /* in-line Dynamic styling (sx) applied conditionally based on the value of bodyPart.
        If bodyPart is equal to item (if it is the selected item), the component will have a top border (borderTop) with a color of #ff2625 and a white background color (backgroundColor).
        If the condition is not met, no additional styles are applied ('').
      */
      sx={{   
            borderTop: bodyPart === item ? '5px solid #ff2625' : '',
            background: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer', 
            gap: '47px'
        }}
        onClick={() => {
          setBodyPart(item); //all setBodyPart does is put the top red border on top of the selected ie clicked item
          window.scrollTo({top: 1800, left: 100, behavior: 'smooth' }); // when we click on an item, we should scroll down below to one of the exercises
        }}
    >
        <img  src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
          {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart;