import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/core';
import { connect } from 'frontity';
import CartDetailItem from './cart-detail-item';

const CartDetail = ({ state }) => {

    return (
        <Box>
            {state.theme.cart.items.map((item) => {
                return (
                    <CartDetailItem
                        key={item.productId}
                        item={item}
                    />
                );
            })}
            <Flex borderTop='1px solid #ccc' marginTop='10px' paddingTop='10px'>
                Total: ${state.theme.cart.cartTotal}
            </Flex>
        </Box>
    );
};

export default connect(CartDetail);