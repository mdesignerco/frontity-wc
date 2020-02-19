import React from 'react';
import { Box, CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import { Head, connect } from 'frontity';
import Header from './header';
import Main from './main';


const Theme = ({ state }) => {

    return (
        <ThemeProvider
            theme={{ ...theme }}
        >
            <Head>
                <title>Frontity Woocommerce Theme</title>
            </Head>
            <CSSReset />
            <Box
                width={[
                    '1160px',
                ]}
                margin='0 auto'
            >
                <Header />
                <Main />
            </Box>
        </ThemeProvider>
    );
}

export default connect(Theme);