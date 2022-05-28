
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Menu, MenuItem, Select, Slider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import { CheckBox } from '@mui/icons-material';


const Optionmenu = ({ data }) => {

    const [flag1, setflag1] = useState(false)






    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);


    };

    const [val, setVal] = useState([5000, 40000]);

    const updateRange = (e, data) => {
        setVal(data);


    };




    const renderMenu = (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem> */}

                {data.type == 'checkbox' ? <FormGroup sx={{ padding: '1px 8px' }}>
                    {data.bhkcheck.map((val, i) => (<FormControlLabel key={i} control={<Checkbox style={{ color: '#4F46E5' }} />} label={val} />))}
                </FormGroup> : null}




                {data.type == 'Pricerange' ?
                    <Box style={{ width: 300, margin: '10px 20px' }}>
                        <Typography sx={{ fontWeight: 'bold' }} >Price per month </Typography>
                        <Slider min={5000} max={100000} value={val} onChange={updateRange} sx={{ color: '#4F46E5' }} />
                        <Box >
                            <TextField label="Min" focused value={`Rs. ${val[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`} sx={{ color: '#C2C2C2', width: 140, margin: '0px 5px' }} />

                            <TextField label="Max" value={`Rs. ${val[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`} focused sx={{ color: '#C2C2C2', width: 140, margin: '0px 5px' }} />
                        </Box>

                        <Box sx={{ margin: '8px 0px' }}>
                            <Typography fontSize={12} color='#C2C2C2'>*Minimum price can not be less than Rs. 5,000</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button sx={{ border: '1px solid #4F46E5', color: '#4F46E5', padding: '8px 30px', marginTop: 5, borderRadius: '12px' }}>Save</Button>
                        </Box>

                    </Box>
                    : null}

                {data.type == 'Furnishingtype' ? <FormGroup sx={{ padding: '1px 8px' }}>
                    {data.bhkcheck.map((val, i) => (<FormControlLabel key={i} control={<Checkbox style={{ color: '#4F46E5' }} />} 
                    label={<Box sx={{width:250}}>
                        <Typography color={'#404040'} fontSize={14} fontWeight="bold">{val.name}</Typography>
                        <Typography letterSpacing={0.5} color={'#909090'} fontSize={11}>{val.description}</Typography>
                    </Box>} 
                     />))}
                </FormGroup> : null}



            </Menu>


        </>


    );

    return (
        <>

      

      {data.type=='divider'?  <Divider  sx={{display:'inline',fontSize:25,textAlign:'center'}} orientation="vertical" variant='fullWidth'    />: 

      

            <Button
                id="basic-button"
                aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={handleProfileMenuOpen}
                style={{ textTransform: 'capitalize', margin: '5px 7px', border: isMenuOpen ? '1px solid #4F46E5' : '1px solid #EEEEEE', borderRadius: 100, color: isMenuOpen ? '#4F46E5' : '#C2C2C2', }}
                endIcon={<img style={isMenuOpen ? { width: 10, height: 10, backgroundColor: '#dad8f8', fontWeight: 'bold', padding: 7, borderRadius: 50 } : { width: 15, height: 15 }} src={isMenuOpen ? 'https://s3-alpha-sig.figma.com/img/66f2/7102/57ce2142303fcd508637aa9a56758545?Expires=1654473600&Signature=hwuyf0d5GUAgAvndPcV8K7iyJ0cMnuGJCwDHmMczRQygoyh4rn7~NZEfcPeiKQHpQFtU8r4B2WFhrtEAyjfes~nuVZ8gbFvvrVe6Dpi6JTrmcwPMhadC-aEGBrRYdsFkdU0efBYKOSl77NclY8qY0b~S0~eWU6CUK90ZoRTNBngB8eHjoOyi4-XoVXmXtqGwne~fwsC-KOqFW4hZxA7DuU0fz7A-YntWkwcs0VZddWEe~fPonZGaH3PuWMe3eazzYpiWdl~sgAvxe4NhexbONNkKlxXhnhdv1kf9YQfx9GSQ9nzxrCV5nwu1AOKLlrsKEMVA71PRQWHDatfe4TatVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' : 'https://s3-alpha-sig.figma.com/img/ce90/0b9e/8244ab5adc1c7100210c0a054d418d6c?Expires=1654473600&Signature=dtTw2ZS37oRKO7waxib1Cn8D3Bu8Y5JubsxEsq-TQ73rUb6YGljh~CpXM8HZJFoz8nXTU3RR1BBiGrvvyYn~iE36dNdjoFw9thVbws5BL8BEAo-BaDucnHUfRBdRDh9sNX2jkc~6ZbmTzV~VtG-~ilw1KnNtEHswkbubcw9Uw3l9A-8wNrp62s-IzO1tRUI8kikHUM45WFnc7evlAZJf-f6u1JU2hYEYAQtWCmysK2bCOKQ4zOqn8LtW2wOGUpAE0FbnZzxc7oh9xiE26~OAjfzoowwcGeHGwosMMqIsYjgEVHHjyxP82xw~-YHQEsqV-diW-rECsJzXylHBve1cWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} />}
            >
                {data.name}
            </Button>
            }

            {renderMenu}

            


        </>
    )
}

export default Optionmenu