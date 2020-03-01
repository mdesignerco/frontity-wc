export const openModal = ({ state }) => ({content}) => {
    state.theme.showModal = true;
    state.theme.modalContent = content;
    setTimeout(() => { state.theme.showModal = false }, 5000);
}