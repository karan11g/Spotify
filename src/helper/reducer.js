export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   " BQBiia-Tj_cbDQtTVcAtyahKApao6L4hrUbA_DBNfv7Fu20f6BbQDdhHkPjjp9FLJM2r2i6C27hL8Q9avqdAY6yGdUs0zDI_ZF1OfNzdRuxWpObXJUsqFigQgE6U0nGVdcmzDyj2xr7dTs9V6lXM_T0Fh3EtH3-5CqGyD4jQmI82p8Th",
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
