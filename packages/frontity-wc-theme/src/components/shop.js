import React from 'react';
import { Box, Grid, Image, Link } from "@chakra-ui/core";
import { connect, styled } from 'frontity';
import ShopItem from './shop-item';
import Anchor from './anchor';

const Shop = ({ state }) => {

    //const data = state.source.data[state.router.link].productsData;
    const data = state.source.get(state.router.link);

    console.log(data)

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
            {
                data.items.map((product) => {
                    const href = `/product/${product.slug}`;
                    return (
                        <Anchor 
                            key={product.id} 
                            link={href}
                            /* onClick={event => {
                                event.preventDefault();
                                actions.router.set(
                                    productLink
                                );
                            }} */
                        >
                            <ShopItem product={product} />
                        </Anchor>
                    );
                })
            }
            {/* {data.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <ShopItem key={item.id} item={item} />;
            })} */}
        </Grid>
    )
};

export default connect(Shop);