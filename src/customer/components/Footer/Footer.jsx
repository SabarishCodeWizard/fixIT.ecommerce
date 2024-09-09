import React from 'react';
import { Grid, Typography, Button,Link } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid
                className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: 'black', color: 'white', py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Company
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Blog
                        </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Press
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Jobs
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Partners
                        </Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Solutions
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Marketing
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Analytics
                        </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Commerce
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Insights
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Support
                        </Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Documentation
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Guides
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Api Status
                        </Button>
                    </div>



                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Legal
                    </Typography>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Claim
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Privacy
                        </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Terms
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Jobs
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text' color='inherit'>
                            Partners
                        </Button>
                    </div>

                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 PS shop. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;
