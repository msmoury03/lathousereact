import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import AllProduct from './AllProduct'
import Mapview from './Mapview'
import ReplayIcon from '@mui/icons-material/Replay';

const Searchhome = ({ mapview }) => {

    const [data,setdata] = useState([1,2,3,4,5,6,7,8])

    const handleclk = ()=>{
        setdata([...data,6,7,8,9])
    }
    return (
        <Box>

            <Grid container spacing={2}>

                <Grid item md={mapview ? 7 : 12} >
                    <AllProduct data={data} mapview={mapview} />
                    <Button onClick={handleclk} color='inherit' sx={{fontSize:12,borderRadius:5,margin:5, border:'1px solid grey', color:'grey'}}  startIcon={<ReplayIcon  />}>
                        Load More
                    </Button>
                </Grid>

                {mapview ? <Grid item md={4} lg={4} xs={12} >
                    <Mapview />
                </Grid> : null}


            </Grid>





        </Box>
    )
}

export default Searchhome