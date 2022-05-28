import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Mapview = () => {

    const mapStyles = {        
        height: "100%",
        width: "100%"};
      
      const defaultCenter = {
        lat: 28.461227612400844, lng: 77.03007085354355 

      }
  return (
    <Grid container>

        <Grid sm={12} xs={12} >
        <Box sx={{background:'green',height:400,borderRadius:2}}>

        <LoadScript
       googleMapsApiKey='AIzaSyBPtmy6yqtAkgXyOzWi_M4u04ruITQy-2w'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
       
        
    </Box>
        </Grid>
    </Grid>
  )
}

export default Mapview