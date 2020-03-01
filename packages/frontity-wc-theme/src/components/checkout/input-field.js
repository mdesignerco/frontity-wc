import React from 'react';
import { Box, Grid, Input, Text } from '@chakra-ui/core';
import { connect } from 'frontity';

const InputField = ({title, fieldName, state, actions}) => {
    return (
        <Box>
            <Text mb='8px'>{title}</Text>
            <Input
                name={fieldName}
                value={state.theme.checkoutForm.fields[fieldName]}
                onChange={event => {
                    actions.theme.setCheckoutField({
                        fieldName: fieldName,
                        value: event.target.value
                    })
                }}
            />
        </Box>
    )
}

export default connect(InputField)