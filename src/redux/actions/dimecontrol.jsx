const dimecontrol = (aux) => (dispatch) => {
    dispatch({
        type: 'CONTROL',
        payload: {
            control: aux
        }
    })
}
export default dimecontrol;