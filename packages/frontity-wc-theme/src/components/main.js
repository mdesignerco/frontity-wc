import React from 'react';
import { Box } from '@chakra-ui/core';
import { connect } from 'frontity';
import ProductList from './product-list/';
import PostList from './post-list/';
import Post from './post';
import Product from './product';
import Shop from './shop';
import Loader from './loader';

const Main = ({ state }) => {
    console.log(state.router.link);
    const data = state.source.get(state.router.link);

    console.log(data);

    return (
        <Box>
            {(data.isFetching && <Loader />) ||
             (data.isProductArchive && <ProductList />) ||
             (data.isArchive && <PostList />) ||
             (data.isPostType && <Post />) ||
             //(data.isShop && <Shop />) ||
             (data.isProduct && <Product />)}
        </Box>
    );
}

export default connect(Main);