import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Menu, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { makeStyles } from '@mui/styles';




const usestyle = makeStyles({

})


const Menubar = () => {

    const [flag1, setflag1] = useState(false)
    const [flag2, setflag2] = useState(false)
    const [show, setshow] = useState(false)




    const classes = usestyle()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
     
    };

    const handleProfileMenuOpen1 = (event) => {
        setAnchorEl1(event.currentTarget);
       
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorEl1(null);

    };
    const isMenuOpen = Boolean(anchorEl);
    const isMenuOpen1 = Boolean(anchorEl1);

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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl1}
            open={isMenuOpen1}
            onClose={handleMenuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleMenuClose}>mm</MenuItem>
            <MenuItem onClick={handleMenuClose}>vv account</MenuItem>
            <MenuItem onClick={handleMenuClose}>fhg</MenuItem>
        </Menu>
        </>

        
    );


    return (
        <div>


            <Button
                id="basic-button"
                aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={handleProfileMenuOpen}
                style={{border: isMenuOpen?'1px solid #4F46E5':'1px solid #EEEEEE',borderRadius:100,color:isMenuOpen?'#4F46E5':'#C2C2C2',}}
                endIcon={<img style={isMenuOpen?{width:10,height:10,backgroundColor:'#dad8f8',fontWeight:'bold',padding:7,borderRadius:50}:{width:15,height:15}} src={isMenuOpen?'https://s3-alpha-sig.figma.com/img/66f2/7102/57ce2142303fcd508637aa9a56758545?Expires=1654473600&Signature=hwuyf0d5GUAgAvndPcV8K7iyJ0cMnuGJCwDHmMczRQygoyh4rn7~NZEfcPeiKQHpQFtU8r4B2WFhrtEAyjfes~nuVZ8gbFvvrVe6Dpi6JTrmcwPMhadC-aEGBrRYdsFkdU0efBYKOSl77NclY8qY0b~S0~eWU6CUK90ZoRTNBngB8eHjoOyi4-XoVXmXtqGwne~fwsC-KOqFW4hZxA7DuU0fz7A-YntWkwcs0VZddWEe~fPonZGaH3PuWMe3eazzYpiWdl~sgAvxe4NhexbONNkKlxXhnhdv1kf9YQfx9GSQ9nzxrCV5nwu1AOKLlrsKEMVA71PRQWHDatfe4TatVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA':'https://s3-alpha-sig.figma.com/img/ce90/0b9e/8244ab5adc1c7100210c0a054d418d6c?Expires=1654473600&Signature=dtTw2ZS37oRKO7waxib1Cn8D3Bu8Y5JubsxEsq-TQ73rUb6YGljh~CpXM8HZJFoz8nXTU3RR1BBiGrvvyYn~iE36dNdjoFw9thVbws5BL8BEAo-BaDucnHUfRBdRDh9sNX2jkc~6ZbmTzV~VtG-~ilw1KnNtEHswkbubcw9Uw3l9A-8wNrp62s-IzO1tRUI8kikHUM45WFnc7evlAZJf-f6u1JU2hYEYAQtWCmysK2bCOKQ4zOqn8LtW2wOGUpAE0FbnZzxc7oh9xiE26~OAjfzoowwcGeHGwosMMqIsYjgEVHHjyxP82xw~-YHQEsqV-diW-rECsJzXylHBve1cWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}/>}
            >
                Dashboard
            </Button>


            <Button
                id="basic-button"
                aria-controls={isMenuOpen1 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen1 ? 'true' : undefined}
                onClick={handleProfileMenuOpen1}
                style={{border: isMenuOpen1?'1px solid #4F46E5':'1px solid #EEEEEE',borderRadius:100,color:isMenuOpen1?'#4F46E5':'#C2C2C2',}}
                endIcon={<img style={isMenuOpen1?{width:10,height:10,backgroundColor:'#dad8f8',fontWeight:'bold',padding:7,borderRadius:50}:{width:15,height:15}} src={isMenuOpen1?'https://s3-alpha-sig.figma.com/img/66f2/7102/57ce2142303fcd508637aa9a56758545?Expires=1654473600&Signature=hwuyf0d5GUAgAvndPcV8K7iyJ0cMnuGJCwDHmMczRQygoyh4rn7~NZEfcPeiKQHpQFtU8r4B2WFhrtEAyjfes~nuVZ8gbFvvrVe6Dpi6JTrmcwPMhadC-aEGBrRYdsFkdU0efBYKOSl77NclY8qY0b~S0~eWU6CUK90ZoRTNBngB8eHjoOyi4-XoVXmXtqGwne~fwsC-KOqFW4hZxA7DuU0fz7A-YntWkwcs0VZddWEe~fPonZGaH3PuWMe3eazzYpiWdl~sgAvxe4NhexbONNkKlxXhnhdv1kf9YQfx9GSQ9nzxrCV5nwu1AOKLlrsKEMVA71PRQWHDatfe4TatVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA':'https://s3-alpha-sig.figma.com/img/ce90/0b9e/8244ab5adc1c7100210c0a054d418d6c?Expires=1654473600&Signature=dtTw2ZS37oRKO7waxib1Cn8D3Bu8Y5JubsxEsq-TQ73rUb6YGljh~CpXM8HZJFoz8nXTU3RR1BBiGrvvyYn~iE36dNdjoFw9thVbws5BL8BEAo-BaDucnHUfRBdRDh9sNX2jkc~6ZbmTzV~VtG-~ilw1KnNtEHswkbubcw9Uw3l9A-8wNrp62s-IzO1tRUI8kikHUM45WFnc7evlAZJf-f6u1JU2hYEYAQtWCmysK2bCOKQ4zOqn8LtW2wOGUpAE0FbnZzxc7oh9xiE26~OAjfzoowwcGeHGwosMMqIsYjgEVHHjyxP82xw~-YHQEsqV-diW-rECsJzXylHBve1cWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}/>}
            >
                Dashboard
            </Button>



            <Box>
                {renderMenu}
            </Box>










            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select
                    label='shfk'
                    sx={{ border: '1px solid red' }}

                    className={classes.btn}
                    style={{ fontSize: '15px', border: flag1 ? '1px solid #4F46E5' : '1px solid #C2C2C2', borderRadius: 50 }}
                    IconComponent={props => (
                        <i {...props} className={`material-icons ${props.className}`} style={{ position: 'relative', display: 'flex' }}>
                            <KeyboardArrowDownOutlinedIcon sx={{ color: '#C2C2C2' }} />
                            {
                                props.className == 'MuiSelect-icon MuiSelect-iconStandard MuiSelect-iconOpen css-1vm6oxl-MuiSelect-icon' ? setflag1(true) : setflag1(false)
                            }

                        </i>

                    )}
                    disableUnderline={true}
                    defaultValue={'hiii'}

                >

                    {/* <FormGroup>
                        <FormControlLabel value={'hiii'} control={<Checkbox  />} label="Label" />
                        <FormControlLabel control={<Checkbox value={'label2'}/>} label="Disabled" />
                    </FormGroup> */}

                    <Checkbox />
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select

                    sx={{ border: '1px solid red' }}

                    className={classes.btn}
                    style={{ fontSize: '15px', border: flag2 ? '1px solid #4F46E5' : '1px solid #C2C2C2', borderRadius: 50 }}
                    IconComponent={props => (
                        <i {...props} className={`material-icons ${props.className}`} style={{ position: 'relative', display: 'flex' }}>
                            <KeyboardArrowDownOutlinedIcon sx={{ color: '#C2C2C2' }} />
                            {
                                props.className == 'MuiSelect-icon MuiSelect-iconStandard MuiSelect-iconOpen css-1vm6oxl-MuiSelect-icon' ? setflag2(true) : setflag2(false)
                            }

                        </i>

                    )}
                    disableUnderline={true}
                    defaultValue={'Services'}
                >

                    <MenuItem value={'Services'}>Services</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>












        </div>
    )
}

export default Menubar