import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'


const AllProduct = ({mapview,data}) => {

 


  return (
    


        <Grid container >

            
           
            {data.map((val,i)=>(<Grid item lg={mapview?12:3} md={mapview?12:3} sm={4} xs={12}><Productcard myarr={data} mapview={mapview} key={i}/></Grid>))}
           
            
  
        </Grid>



  
  )
}

export default AllProduct