import React from 'react';
import { Box } from '@chakra-ui/core';
import { connect } from 'frontity';
import { useInView } from 'react-intersection-observer';
import TopNavbar from './top-navbar';
import FixedNavbar from './fixed-navbar';

const Header = ({ state }) => {

    const [ref, inView] = useInView();

    return (
        <Box>
            <TopNavbar
                ref={ref}
                title={state.frontity.description}
            />
            {
                !inView && <FixedNavbar
                    title={state.frontity.description}
                />
            }
        </Box>
    );
}

export default connect(Header);