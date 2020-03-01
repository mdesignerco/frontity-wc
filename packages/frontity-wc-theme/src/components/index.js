import React from 'react';
import { Box, CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import { Head } from 'frontity';
import Header from './header/';
import Main from './main';
import ModalNotification from './modal-notification';

const Theme = () => (
    <ThemeProvider theme={{ ...theme }}>
        <Head>
            <title>Frontity Woocommerce Theme</title>
        </Head>
        <CSSReset />
        <Box
            width={[
                '1160px',
            ]}
            margin='0 auto'
            maxWidth='100%'
        >
            <Header />
            <Main />
        </Box>
        <ModalNotification />
    </ThemeProvider>
);

export default Theme;