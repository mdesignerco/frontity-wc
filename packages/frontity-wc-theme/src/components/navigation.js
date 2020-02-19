import React from 'react';
import { Box, Link, Text } from '@chakra-ui/core';
import { connect } from 'frontity';
import Anchor from './anchor';

const NavLink = ({ children, ...props }) => (
    <Anchor px={2} fontWeight='bold' textTransform='uppercase' link={props.link} {...props}>
        {children}
    </Anchor>
);

const Navigation = ({ props, state, actions }) => {

   // const { categories } = state.source.data['product-categories/'];

    //console.log(categories);

    return (
        <Box>
            {state.theme.menu.map(([name, link]) => {
                const isCurrentPage = state.router.link === link;
                //const catId = categories.find(cat => cat.slug===slug).id;
                /* const link = slug.split('/')[0] === 'product-category'
                                ?;

                console.log(link);
                link =  */

                return (
                    <NavLink link={link} key={name}>
                        {name}
                    </NavLink>
                )
            }
            )}
        </Box>
    );
}

export default connect(Navigation);