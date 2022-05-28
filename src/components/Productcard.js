import { Box, Checkbox, Divider, Grid, Paper, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles, } from '@mui/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import { styled } from '@mui/material/styles';




const usestyle = makeStyles({
    box: {
        "&:hover": {
            backgroundColor: "pink"
        }
    }
})



const Productcard = ({ mapview }) => {

    const matches = useMediaQuery('(max-width:600px)');
    const [droww, setdrow] = useState(false)
    const [droww1, setdrow1] = useState(false)
    const classes = usestyle()

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        backgroundColor: '#e0d3d3',
        borderRadius: 15

    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: 'https://is1-2.housingcdn.com/4f2250e8/27b3f5e68f253ad93fa6c02988108957/v2/medium/vatika_xpressions-sector_88b-gurgaon-vatika.jpeg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: 'https://is1-2.housingcdn.com/012c1500/6509fdf0df946f5b37ee9790dbdc5daf/v0/medium.jpeg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: 'https://is1-3.housingcdn.com/012c1500/cfc600315043afaf0af5ac47eb23646f/v0/medium.jpeg'
        }
    ]

    return (

        <Grid container>






            <Box onMouseOver={() => setdrow1(true)} onMouseLeave={() => setdrow1(false)} sx={{ margin: matches ? 'auto' : '10px', cursor: 'pointer', boxShadow: droww1 ? 5 : 0, borderRadius: 3, border: '2px solid #F2F2F2', padding: '5px 0px', display: 'flex', flexDirection:matches?'column' : mapview? 'flex':'column', alignItems: 'center', justifyContent: 'center' }}>


                <Grid item lg={mapview?5:null}>
                    <Box sx={{ borderRadius: 5, boxSizing: 'border-box', }} onMouseOver={() => setdrow(true)} onMouseLeave={() => setdrow(false)}>
                        <Carousel
                            showThumbs={false}
                            swipeable={true}
                            showStatus={false}
                            autoPlay
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                                        <ArrowForwardIosIcon sx={{ fontSize: 14, alignSelf: 'center' }} />
                                    </Box>
                                )
                            }

                            renderArrowPrev={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 12 }}>
                                        <ArrowBackIosIcon sx={{ fontSize: 14, alignSelf: 'center' }} />
                                    </Box>
                                )
                            }

                            infiniteLoop
                            showArrows={droww}

                        >
                            {items.map((val, i) => (<Box ><img style={{ borderRadius: 8,width:'100%', height:220 }} src={val.img} /></Box>))}
                        </Carousel>
                    </Box>
                </Grid>

                <Grid item lg={mapview?7:null}>
                    <Box sx={{ margin: '5px 10px' }}>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'start', margin: '5px 10px' }}>
                            <Box>
                                <Typography fontSize='14px' color='#909090'>Sector 46, Gurugram, Haryana</Typography>
                                <Typography fontWeight={'bold'} color={'#222222'} fontSize='18px'>3 Bhk Semi-furnished flat</Typography>
                            </Box>
                            <Box>
                                <Checkbox
                                    {...label}
                                    icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon sx={{ color: '#4F46E5' }} />}
                                />
                            </Box>
                        </Box>

                        <Divider sx={{ width: 60, margin: '0px 10px' }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', margin: '10px 50px 10px 10px' }}>
                            <Box >
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 14, color: '#909090', margin: '7px 0px' }}><LocalLaundryServiceOutlinedIcon sx={{ color: '#909090', fontSize: 14 }} /> 3 washrooms</Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 14, color: '#909090' }}><LocalLaundryServiceOutlinedIcon sx={{ color: '#909090', fontSize: 14 }} />Builder floor</Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 14, color: '#909090', margin: '7px 0px' }}><LocalLaundryServiceOutlinedIcon sx={{ color: '#909090', fontSize: 14 }} />Open Parking</Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 14, color: '#909090' }}><LocalLaundryServiceOutlinedIcon sx={{ color: '#909090', fontSize: 14 }} />1200 sq. ft.</Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ width: 60, margin: '0px 10px' }} />


                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'start', margin: '10px 10px' }}>
                            <Box>
                                <Typography fontSize='14px' color='#909090'>Monthly Rent</Typography>
                                <Typography fontWeight={'bold'} color={'#222222'} fontSize='18px'>Rs. 30,000</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox
                                    {...label}
                                    icon={<GradeOutlinedIcon />}
                                    checkedIcon={<GradeIcon sx={{ color: '#4F46E5' }} />}
                                />
                                <Box sx={{ display: 'flex' }}>
                                    <Typography fontSize='14px' fontWeight={'bold'}>3.6 </Typography>
                                    <Typography m={'0px 5px'} fontWeight={'bold'} fontSize={'14px'} color='#909090'>(10)</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>






            </Box>
        </Grid>
    )
}


export default Productcard