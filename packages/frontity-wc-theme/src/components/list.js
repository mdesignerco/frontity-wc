import React from 'react';
import { Box, Grid, Link } from "@chakra-ui/core";
import {connect} from 'frontity';

const List = ({ state, actions }) => {
    const data = state.source.get(state.router.link);

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
            {data.items.map(({ id }) => {
                const post = state.source.post[id];
                return (
                    <Box key={id}>
                        <Link 
                            href={post.link}
                            onClick={event => {
                                event.preventDefault();
                                actions.router.set(post.link);
                            }}
                        >
                            {post.title.rendered}
                        </Link>
                    </Box>
                );
            })}
        </Grid>
    );
}

export default connect(List);