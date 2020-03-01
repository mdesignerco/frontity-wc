import React, { useRef } from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ModalOverlay, ModalContent } from '@chakra-ui/core';
import { connect } from 'frontity';

const ModalNotification = ({ state, actions }) => {
    const initialRef = useRef();
    const finalRef = React.useRef();
    return (
        <Modal
            isOpen={state.theme.showModal}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton
                    onClick={actions.theme.closeModal}
                    size='sm'
                />
                <ModalBody>
                    {state.theme.modalContent}
                </ModalBody>

                <ModalFooter>
                    <Button
                        variantColor="blue"
                        mr={3}
                        onClick={actions.theme.closeModal}
                        ref={initialRef}
                    >
                        Continue Shopping
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={actions.theme.goCheckout}
                    >
                        Checkout Now
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default connect(ModalNotification);