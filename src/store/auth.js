export default {
  namespaced: true,
  state: {
    gapi: null,
    isSignedIn: false,
  },
  mutations: {
    setGapi(state, gapi) {
      state.gapi = gapi;
    },
    setIsSignedIn(state, isSignedIn) {
      state.isSignedIn = isSignedIn;
    },
  },
  actions: {
    async initializeGapi({ commit }) {
      /*const { gapi, isSignedIn } = createGapiClient({
        apiKey: 'AIzaSyB8-eJR-CSZEN6jtbnsniQ38l34ROhX4Nk',
        clientId: '181706391015-f7tq07jdjrq350hjeko1pja0odomooec.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
      });

      commit('setGapi', gapi);
      commit('setIsSignedIn', isSignedIn); */
    },
    signIn({ state }) {
      state.gapi.signIn();
    },
    signOut({ state }) {
      state.gapi.signOut();
    },
  },
};