import React from 'react';
import { Box, Image, Link } from '@chakra-ui/core';
import Navigation from './navigation';
import Logo from '../assets/logo.svg';

const TopNavbar = React.forwardRef((props, ref) => {
    return (
        <Box ref={ref}>
            <Box 
                height='90px' 
                width='auto'
                marginTop='10px'
            >

                <Image
                    src={Logo}
                    width='auto'
                    height='100%'
                    margin='0 auto'
                    title={props.title}
                />
            </Box>
            <Box textAlign='center' margin='20px 0'>
                <Navigation />
            </Box>
        </Box>
    );
})

export default TopNavbar;