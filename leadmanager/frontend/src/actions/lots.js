
import { GET_LOTS, GET_SELETED_LOT } from './types'

export const getSelectedLot =(lotID) => dispatch => {
    console.log(lotID)
    
    dispatch ({
        type: GET_SELETED_LOT,
        payload : lotID

    })
}
export const getLots = () => dispatch => {
    // define a list of lots:
    let lots_list_action = [
        { 'id': 1, 'name': 'Lot 1', },
        { 'id': 2, 'name': 'Lot 2', },
        { 'id': 3, 'name': 'Lot 3', },
        { 'id': 4, 'name': 'Lot 4', },

    ]
    
    dispatch({
        // send to the reducer
        type: GET_LOTS,
        payload: lots_list_action
    })

    // perform the http req
    // axios.get('/api/leads')
    //     .then(res => {
    //         dispatch({
    //             // send to the reducer
    //             type: GET_LEADS,
    //             payload: res.data
    //         })
    //     }).catch(
    //         err => console.log(err)
    //     )

    // constructor(props) {
    //     super(props);
    //     this.state = { value: 'coconut' };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    // handleSubmit(event) {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }
}

