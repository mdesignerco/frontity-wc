import React from 'react';
import { Box, Grid, Input, Text, SimpleGrid } from '@chakra-ui/core';
import { connect } from 'frontity';
import InputField from './input-field';

const BillingDetails = ({ state, actions }) => {
    return (
        <Box>
            <Text as='h3' fontSize='2xl'>
                Billing details
            </Text>
            <SimpleGrid columns={2} spacing={6}>
                <InputField
                    title='First Name'
                    fieldName='firstName'
                />
                <InputField
                    title='Last Name'
                    fieldName='lastName'
                />
            </SimpleGrid>
            <SimpleGrid>
                <InputField
                    title='Company Name'
                    fieldName='companyName'
                />
            </SimpleGrid>
            <SimpleGrid>
                <InputField
                    title='Street address'
                    fieldName='streetAddress'
                />
            </SimpleGrid>
            <SimpleGrid>
                <InputField
                    title='Apartment'
                    fieldName='apartment'
                />
            </SimpleGrid>
            <SimpleGrid>
                <InputField
                    title='Town / City'
                    fieldName='city'
                />
            </SimpleGrid>
            <SimpleGrid>
                <InputField
                    title='Country'
                    fieldName='country'
                />
            </SimpleGrid>
            <SimpleGrid>
                <InputField
                    title='Postcode'
                    fieldName='postcode'
                />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={6}>
                <InputField
                    title='Phone'
                    fieldName='phone'
                />
                <InputField
                    title='Email address'
                    fieldName='email'
                />
            </SimpleGrid>
        </Box>
    );
}

export default connect(BillingDetails)