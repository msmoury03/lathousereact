import { Divider, FormControlLabel, Switch,  } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Optionmenu from './Optionmenu'
import useMediaQuery from '@mui/material/useMediaQuery';

const Optionpage = ({setmapview}) => {
    const matches = useMediaQuery('(max-width:600px)');
    
    const myoption = [
        {type:'checkbox',name:'Bhk Type',bhkcheck:['1 bhk','2 BHK','3 BHK']},
        {type:'Pricerange',name:'Price Range'},
        {type:'Place Type',name:'Place type',bhkcheck:['11']},
        {type:'checkbox',name:'Bhk Type',bhkcheck:['1 bhk','2 BHK','3 BHK']},
        {type:'Pricerange',name:'Price Range'},
        {type:'Furnishingtype',name:'Furnishing Type',bhkcheck:[
            {name:'Semi-furnished', description:'like you will get light, fan, gyeser along with all wooden work done inside the house'},
            {name:'Fully furnished', description:'like you will get light, fan, gyeser along with all wooden work done inside the house'},
            {name:'Un-furnished', description:'like you will get light, fan, gyeser along with all wooden work done inside the house'},
        ]},

        {type:'divider',name:'divider'},
        {type:'btn',name:'More Filters '},


    ]
  return (
    <Box sx={{display:matches?'block':'flex',justifyContent:'space-between', margin:'5px 25px',alignItems:'center'}}>

        <Box>{myoption.map((val,i)=>(<Optionmenu key={i} data={val}/>))}</Box>
        <Box> <FormControlLabel sx={{color:'#404040'}} label="Map View" labelPlacement='start' control={<Switch  onChange={(e)=>setmapview(e.target.checked)} />}  /></Box>
    </Box>
  )
}

export default Optionpage