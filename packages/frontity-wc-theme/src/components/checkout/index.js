import React from 'react';
import { Box, Grid, Input, Text } from '@chakra-ui/core';
import { connect } from 'frontity'
import OrderReview from './order-review';
import BillingDetails from './billing-details';
import { PageTitle } from '../page-title';

const Checkout = () => {
    return (
        <Box>
            <PageTitle text='Checkout' />
            <Grid
                w="100%"
                templateColumns="50% 50%"
                gap={6}
            >
                <BillingDetails />
                <OrderReview />
            </Grid>
        </Box>
    )
}

export default connect(Checkout);