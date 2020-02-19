import React from 'react';
import { Box, Text } from "@chakra-ui/core";

import { connect } from 'frontity';

const Post = ({state}) =>{
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    return (
        <Box>
            <Text 
                fontWeight='bold' 
                fontSize='2xl' 
                as='h1'
            >
                {post.title.rendered}
            </Text>
            <Box 
                dangerouslySetInnerHTML={
                    {__html: post.content.rendered}
                } 
            />
        </Box>
    );
};

export default connect(Post);