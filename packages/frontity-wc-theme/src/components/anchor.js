import React from 'react';
import { Link } from '@chakra-ui/core';
import { connect } from 'frontity';

const Anchor = ({
  state,
  actions,
  link,
  children,
  textTransform,
  fontWeight,
  px,
}) => {
  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith("http")) return;

    event.preventDefault();
    // Set the router to the new url.
    //console.log(link)
    /* if (link==='/checkout/') {
      state.theme.isCheckout = true;
      //alert('checkout')
    } else {
      actions.router.set(link);
    } */
    //console.log(link);

    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  return (
    <Link
      href={link}
      onClick={onClick}
      textTransform={textTransform}
      fontWeight={fontWeight}
      px={px}
    >
      {children}
    </Link>
  );
};

export default connect(Anchor);
