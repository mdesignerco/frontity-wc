import React from 'react';
import { Box } from '@chakra-ui/core';
import { connect } from 'frontity';
import ProductList from './product-list/';
import PostList from './post-list/';
import Post from './post';
import Page from './page';
import Product from './product-single/';
//import Shop from './shop';
import Loader from './loader';

const Main = ({ state }) => {
    //console.log(state.router.link);
    const data = state.source.get(state.router.link);
    //console.log(data);

    /* if (state.theme.isCheckout) {
        return (
            <div>Checkout</div>
        );
    } else {
        state.theme.isCheckout = false;
    } */
    return (
        <Box>
            {(data.isFetching && <Loader />) ||
                (data.isProductArchive && <ProductList />) ||
                (data.isProductCat && <ProductList />) ||
                (data.isPostArchive && <PostList />) ||
                (data.isPost && <Post />) ||
                (data.isPage && <Page />) ||
                //(data.isShop && <Shop />) ||
                (data.isProduct && <Product />)}
        </Box>
    );
}

export default connect(Main);