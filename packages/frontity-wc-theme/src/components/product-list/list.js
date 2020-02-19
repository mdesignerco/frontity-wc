import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import { connect } from 'frontity';
import Item from './list-item';

const ProductList = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                return <Item key={item.id} item={item} />
            })}
        </Grid>

    )
}

export default connect(ProductList)