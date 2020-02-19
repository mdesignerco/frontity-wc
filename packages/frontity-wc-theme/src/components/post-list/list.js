import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import { connect } from 'frontity';
import Item from './list-item';

const PostList = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <Box>
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                return <Item key={item.id} item={item} />
            })}
        </Box>

    )
}

export default connect(PostList)