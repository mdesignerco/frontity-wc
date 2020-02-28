import React from 'react';
import { Grid, Box, Button, Flex, Image } from '@chakra-ui/core';
import { connect } from 'frontity';

const Product = ({ state, actions }) => {

    console.log('data.type');

    // Get information about the current URL.
    const data = state.source.get(state.router.link);
    // Get the data of the product.
    const product = state.source[data.type][data.id];

    const onClick = (e, productId) => {
        e.preventDefault();
        actions.theme.addToCart({
            productId,
            quantity: 1
        })
    }

    return (
        <Grid
            w="100%"
            templateColumns="40% 60%"
            gap={6}
        >
            <Box w='100%'>
                1
            </Box>
            <Box w='100%'>
                <Box as='h2' fontWeight='bold' fontSize='2em'>
                    {product.title.rendered}
                </Box>
                <Box
                    fontSize='0.9em'
                    borderBottom='1px solid #eee'
                    paddingBottom='10px'
                    marginBottom='10px'
                    dangerouslySetInnerHTML={{
                        __html: product.excerpt.rendered
                    }}
                />
                <Box
                    fontSize='0.9em'
                    borderBottom='1px solid #eee'
                    paddingBottom='10px'
                    marginBottom='10px'
                    dangerouslySetInnerHTML={{
                        __html: product.content.rendered
                    }}
                />
                <Flex
                    justifyContent='flex-end'
                    margin='20px 0'
                >
                    <Button
                        variantColor='green'
                        onClick={(e) => onClick(e, product.id)}
                    >
                        Add to cart
                    </Button>
                </Flex>
            </Box>
        </Grid>
    );
}

export default connect(Product);