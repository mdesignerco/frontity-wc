import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/core';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'frontity';

const LoadingProduct = () => (
    <Flex  fontSize='0.8em'>
        <Text>Loading...</Text>
    </Flex>
)

const CartDetailItem = ({ state, actions, item }) => {

    const onClick = (e, productId) => {
        e.preventDefault();
        actions.theme.onTrashCartItem({
            productId,
        })
    }

    if (state.source.product) {
        const product = state.source.product[item.productId];
        if (product) {
            return (
                <Flex
                    justifyContent='space-between'
                    fontSize='0.8em'
                >
                    <Text>{product.title.rendered}</Text>
                    <Flex>
                        <Text as='span'>${product.price}</Text>
                        <Text
                            padding='5px'
                            onClick={(e) => onClick(e, item.productId)}
                        >
                            <FaTrash size='10px' />
                        </Text>
                    </Flex>
                </Flex>
            );
        } else { return <LoadingProduct />; }
    } else { return <LoadingProduct />; }
}

export default connect(CartDetailItem);