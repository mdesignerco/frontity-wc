import React from 'react';
import { Box, Grid, Image, Link } from "@chakra-ui/core";
import { connect } from 'frontity';

const ShopItem = ({ product }) => {
    //const data = state.source.get(state.router.link);
    //const product = state.source[data.type][data.id];

    //const {product} = props;
    return (
        <Box maxW='sm' borderWidth='1px' rounded='5px' overflow='hidden'>
            <Image src={product.images[0].src} />
            <Box p='2'>
                <Box fontWeight='bold'>
                    {product.name}
                </Box>
                <Box 
                    fontSize='0.8em'
                    dangerouslySetInnerHTML={{ 
                        __html: product.short_description
                    }} 
                />
            </Box>
        </Box>
    );
}

export default connect(ShopItem);