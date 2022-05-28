import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button'
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import InputUnstyled from '@mui/base/InputUnstyled';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Paper from '@mui/material/Paper';


import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Select, Options, } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const usestyle = makeStyles({
    root: {

        border: 'none',
        color: '#C2C2C2',


    }
})




const Header = () => {

    const classes = usestyle()
    const matches = useMediaQuery('(max-width:600px)');



    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
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
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}


        >
            <MenuItem sx={{ display: 'flex', justifyContent: 'center' }}>
            <FormControl variant="standard" sx={{ minWidth: 100 }}>
                <Select
                    style={{ fontSize: '18px' }}
                    IconComponent={props => (
                        <i {...props} className={`material-icons ${props.className}`} style={{ position: 'relative', display: 'flex' }}>
                            <KeyboardArrowDownOutlinedIcon sx={{ color: '#C2C2C2' }} />
                        </i>
                    )}
                    disableUnderline={true}
                    className={classes.root}

                    defaultValue={'Services'}
                >

                    <MenuItem value={'Services'}>Services</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </MenuItem>

            <MenuItem sx={{ display: 'flex', justifyContent: 'flex-start' }}>

                <ShowChartOutlinedIcon sx={{ color: 'grey', margin: '0px 15px' }}>

                </ShowChartOutlinedIcon>

                <p>List Your Place</p>
            </MenuItem>
            <MenuItem sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box
                    component="img"
                    sx={{
                        height: 25,
                        width: 25,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        cursor: 'pointer',
                        alignSelf: 'center',
                        margin: '0px 15px'
                    }}
                    alt="The house from the offer."
                    src="https://s3-alpha-sig.figma.com/img/9d22/3dfb/41d2caf6fe0acaccb0bebd7fe626605d?Expires=1654473600&Signature=CyuuA-8j2r-ziKxB7dbmgGM6~JrR1Vfn58Cp3zlJGkZ0xgsiDWdcOVFs5oOh6CaqsSX69bCnyN2BKUT7nwwuVw2BlbyBMZ8decRsyC-Zz-1dDK51b6-VcjZkN0lkPjSgGvPl04sItoX5-VWaW1zT1je1XmimR9TzID3scyjwFX09lRBcmurJEfjmhSEL9Uu7SIGTrOlU9E-DdGoTdZ71F8W4afb9xmmk6Y4GkfPQvJA29zoWK6S7y2jdx~~lNlkRtqqPnZCnGyLxMAjCt7VNjAD7xtS-4B0Fs8Q-2gAsQwXYX4Sk6KFsxacCwWgHGHeXwvvpbjj8UmmcSTikA0GudA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box
                    onClick={handleProfileMenuOpen}
                    component="img"
                    sx={{
                        height: 25,
                        width: 25,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                        cursor: 'pointer',
                        backgroundColor: '#F2F2F2',
                        color: 'white',
                        padding: 1,
                        borderRadius: 10,
                        alignSelf: 'center',
                        margin: '0px 15px'
                    }}
                    alt="The house from the offer."
                    src="https://s3-alpha-sig.figma.com/img/60eb/99de/f9f0ca85247d7672d28234d580bbdaa0?Expires=1654473600&Signature=PdijtSnCuwWMUUr3yzbJw8OvvxukpY~I8l~K6eDlwzSmmZpiH3RPT2xzGPQg2qdtA-wtcqT93V3ElE0ZNXd9tFUoZCyBG3d9njDZmr0fAjWw0S0bJ51WgwcDvdPs47HitvU-XNjXxQWZ34IO2uCkrgvtf502v9NhwOE8MG0JNbImGljnUf-T9pP5zbNrz-28tB5NBYErgQuHIK2Nzp~CCFd1whVFfYWN1PcYgRuTl7Bpte~5leMTmi58do3~AVNlKAK8WLWvRXliG2icAnii56SHGqZ8Gbn7YHj56JcqhKk4vq3s4hmqKImapOYmvy3XkvWUdIiHQmZn8CjO6xCsMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} position="static" style={{ backgroundColor: 'white' }}>
                <Toolbar>

                    {/* <MenuIcon /> */}

                    {matches ? (<Box
                        component="img"
                        sx={{
                            height: 40,
                            width: 35,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                            cursor: 'pointer',

                            color: 'white',
                            borderRadius: 10,
                            alignSelf: 'center',

                        }}
                        alt="The house from the offer."
                        src="https://www.houseboon.com/assets/images/favicon.ico"
                    />) : (<Box
                        component="img"
                        sx={{

                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                            cursor: 'pointer',

                            color: 'white',
                            alignSelf: 'center',

                        }}
                        alt="The house from the offer."
                        src="https://www.houseboon.com/Resources/images/logo-light.png"
                    />)}


                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >

                    </Typography>

                    {matches ? null : <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <Select
                            style={{ fontSize: '15px' }}
                            IconComponent={props => (
                                <i {...props} className={`material-icons ${props.className}`} style={{ position: 'relative', display: 'flex' }}>
                                    <KeyboardArrowDownOutlinedIcon sx={{ color: '#C2C2C2' }} />
                                </i>
                            )}
                            disableUnderline={true}
                            className={classes.root}

                            defaultValue={'Services'}
                        >

                            <MenuItem value={'Services'}>Services</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>}



                    {/* <Search sx={{border:'1px solid #F2F2F2',borderRadius:100,width:360 }}>
                        <SearchIconWrapper sx={{right: '-10px',cursor:'pointer' }}>
                            <SearchIcon sx={{backgroundColor:'#4F46E5',padding:0.5,borderRadius:50,cursor:'pointer'}}/>
                            
                        </SearchIconWrapper>
                        <StyledInputBase
                        sx={{paddingRight: 'calc(1em + 32px)',paddingLeft:'none'}}
                            placeholder="Search by Location…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}

                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: 50, boxShadow: 'none', border: '2px solid #F2F2F2', margin: '0px 20px' }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search by location"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton sx={{ p: '10px', backgroundColor: '#4F46E5', color: 'white', ":hover": { backgroundColor: '#5f59e3' } }} aria-label="search">
                            <SearchIcon />
                        </IconButton>


                    </Paper>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                        <Button
                            style={{
                                borderRadius: 12,
                                alignSelf: 'center',

                                padding: "12px 15px",
                                fontSize: "15px",

                                textTransform: 'capitalize',
                                color: '#C2C2C2',
                                margin: '0px 5px'
                            }}
                            variant="text"
                        >
                            Check Tenancy Socre
                        </Button>



                        <Button
                            style={{
                                borderRadius: 12,
                                alignSelf: 'center',
                                backgroundColor: "",
                                padding: "12px 15px",
                                fontSize: "15px",
                                border: '1px solid #EEEEEE',
                                textTransform: 'capitalize',
                                color: '#C2C2C2',
                                margin: '0px 5px'
                            }}
                            variant="outlined"
                        >
                            List Your Place
                        </Button>


                        <Box

                            component="img"
                            sx={{
                                height: 25,
                                width: 25,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                cursor: 'pointer',
                                alignSelf: 'center',
                                margin: '0px 5px'



                            }}
                            alt="The house from the offer."
                            src="https://s3-alpha-sig.figma.com/img/9d22/3dfb/41d2caf6fe0acaccb0bebd7fe626605d?Expires=1654473600&Signature=CyuuA-8j2r-ziKxB7dbmgGM6~JrR1Vfn58Cp3zlJGkZ0xgsiDWdcOVFs5oOh6CaqsSX69bCnyN2BKUT7nwwuVw2BlbyBMZ8decRsyC-Zz-1dDK51b6-VcjZkN0lkPjSgGvPl04sItoX5-VWaW1zT1je1XmimR9TzID3scyjwFX09lRBcmurJEfjmhSEL9Uu7SIGTrOlU9E-DdGoTdZ71F8W4afb9xmmk6Y4GkfPQvJA29zoWK6S7y2jdx~~lNlkRtqqPnZCnGyLxMAjCt7VNjAD7xtS-4B0Fs8Q-2gAsQwXYX4Sk6KFsxacCwWgHGHeXwvvpbjj8UmmcSTikA0GudA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        />
                        <Box
                            onClick={handleProfileMenuOpen}
                            component="img"
                            sx={{
                                height: 25,
                                width: 25,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                cursor: 'pointer',
                                backgroundColor: '#F2F2F2',
                                color: 'white',
                                padding: 1,
                                borderRadius: 10,
                                alignSelf: 'center',
                                margin: '0px 5px'
                            }}
                            alt="The house from the offer."
                            src="https://s3-alpha-sig.figma.com/img/60eb/99de/f9f0ca85247d7672d28234d580bbdaa0?Expires=1654473600&Signature=PdijtSnCuwWMUUr3yzbJw8OvvxukpY~I8l~K6eDlwzSmmZpiH3RPT2xzGPQg2qdtA-wtcqT93V3ElE0ZNXd9tFUoZCyBG3d9njDZmr0fAjWw0S0bJ51WgwcDvdPs47HitvU-XNjXxQWZ34IO2uCkrgvtf502v9NhwOE8MG0JNbImGljnUf-T9pP5zbNrz-28tB5NBYErgQuHIK2Nzp~CCFd1whVFfYWN1PcYgRuTl7Bpte~5leMTmi58do3~AVNlKAK8WLWvRXliG2icAnii56SHGqZ8Gbn7YHj56JcqhKk4vq3s4hmqKImapOYmvy3XkvWUdIiHQmZn8CjO6xCsMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        />

                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            {/* <MoreIcon /> */}
                            <MenuIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>

    );

}

export default Header