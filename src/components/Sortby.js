import { FormControl, Menu, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';



const Sortby = () => {

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{display:'flex',justifyContent:'space-between',margin:matches?'10px 3px':'10px 25px',alignItems:'center'}}>

            <Box>
                <Typography variant='subtitle1' fontWeight={'bold'} >Propeties in Gurugram</Typography>
                <Typography fontSize={'12px'} color='#909090'>979 Properties - Flat</Typography>
            </Box>

            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select
                    style={{ fontSize: '15px',color:'#909090' }}
                    IconComponent={props => (
                        <i {...props} className={`material-icons ${props.className}`} style={{ position: 'relative', display: 'flex' }}>
                            <KeyboardArrowDownOutlinedIcon sx={{ color: '#C2C2C2' }} />
                        </i>
                    )}
                    disableUnderline={true}
                    

                    defaultValue={'Sort By'}
                >

                    <MenuItem  value={'Sort By'}>Sort By</MenuItem>
                    <MenuItem value={'Price Low To High'}>Price Low To High</MenuItem>
                    <MenuItem value={'Price High To Low'}>Price High To Low</MenuItem>
                    <MenuItem value={'Popularity'}>Popularity</MenuItem>
                </Select>
            </FormControl>


        </Box>
    )
}

export default Sortby