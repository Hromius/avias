/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
export default function reducer(state, action) {
  if (state === undefined) {
    state = {
      chechBoxAll: true,
      chechBoxTransferNull: true,
      chechBoxTransferOne: true,
      chechBoxTransferTwo: true,
      chechBoxTransferThree: true,
      loadTicketsFirst: false,
      showLowPrice: true,
      showFastFly: false,
      error: false,
      tickets: [],
      showTickets: 5,
      loadTickets: false,
      ErrorLoadTickets: false,
    };
  }

  if (action.type === 'CHECH_BOX_All_TRUE') {
    return state = {
      ...state,
      chechBoxAll: true,
      chechBoxTransferNull: true,
      chechBoxTransferOne: true,
      chechBoxTransferTwo: true,
      chechBoxTransferThree: true,
    };
  }
  if (action.type === 'CHECH_BOX_TRANSFER_NULL_TRUE') return { ...state, chechBoxTransferNull: true };
  if (action.type === 'CHECH_BOX_TRANSFER_ONE_TRUE') return { ...state, chechBoxTransferOne: true };
  if (action.type === 'CHECH_BOX_TRANSFER_TWO_TRUE') return { ...state, chechBoxTransferTwo: true };
  if (action.type === 'CHECH_BOX_TRANSFER_THREE_TRUE') return { ...state, chechBoxTransferThree: true };

  if (action.type === 'CHECH_BOX_All_FALSE') {
    return state = {
      ...state,
      chechBoxAll: false,
      chechBoxTransferNull: false,
      chechBoxTransferTwo: false,
      chechBoxTransferOne: false,
      chechBoxTransferThree: false,
    };
  }
  if (action.type === 'CHECH_BOX_TRANSFER_NULL_FALSE') return { ...state, chechBoxTransferNull: false };
  if (action.type === 'CHECH_BOX_TRANSFER_ONE_FALSE') return { ...state, chechBoxTransferOne: false };
  if (action.type === 'CHECH_BOX_TRANSFER_TWO_FALSE') return { ...state, chechBoxTransferTwo: false };
  if (action.type === 'CHECH_BOX_TRANSFER_THREE_FALSE') return { ...state, chechBoxTransferThree: false };

  if (action.type === 'CHECH_BOX_ONLY_All_FALSE') return { ...state, chechBoxAll: false };
  if (action.type === 'CHECH_BOX_ONLY_All_TRUE') return { ...state, chechBoxAll: true };

  if (action.type === 'ADD_TIKETS_TWO') return { ...state, tickets: [...state.tickets, ...action.tikets.tickets], loadTicketsFirst: true };
  if (action.type === 'ERROR') return { ...state, error: true, loadTicketsFirst: true };
  if (action.type === 'LOAD_TICKETS_NO_OK') return { ...state, loadTickets: true };
  if (action.type === 'LOAD_TICKETS_OK') return { ...state, loadTickets: false };
  if (action.type === 'ERROR_ON_LOAD' && state.tickets.length === 0) return { ...state, error: true, loadTicketsFirst: true };
  if (action.type === 'ERROR_ON_LOAD') return { ...state, ErrorLoadTickets: true, loadTickets: false };

  if (action.type === 'SHOW_MORE_TICKETS') return { ...state, showTickets: state.showTickets + 5 };
  if (action.type === 'SHOW_LOW_PRICE') return { ...state, showLowPrice: true, showFastFly: false };
  if (action.type === 'SHOW_FAST_FLY') return { ...state, showLowPrice: false, showFastFly: true };

  return state;
}
