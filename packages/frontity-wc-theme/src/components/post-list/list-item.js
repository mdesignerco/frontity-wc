import React from 'react';
import { Box, Link } from "@chakra-ui/core";
import {connect} from 'frontity';
import Anchor from '../anchor';
import FeaturedMedia from '../featured-media';

const Item = ({state, item}) => {
    return (
        <Box>
            <Anchor link={item.link}>
                <FeaturedMedia id={item.featured_media} />
            </Anchor>
        </Box>
    );
}

export default connect(Item)