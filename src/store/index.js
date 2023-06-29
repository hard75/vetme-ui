import { createStore } from 'vuex';
import { onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../firebase.js';

export default createStore({
  state: {
    user: null,
    token: ''
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    initializeAuth({ commit }) {
      onAuthStateChanged(auth, (user) => {
        commit('setUser', user);
      });
    },
    async login({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        commit('setUser', user);
        commit('setToken', await user.getIdToken());
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async signUp ({ commit }, { email, password }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        commit('setUser', user);
        commit('setToken', await user.getIdToken());
        // Handle successful sign-up
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
    async signInWithGoogle() {
      try {
        // Pass the access token to gapi
        /*
        const request = {
          calendarId: "primary",
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: "startTime",
        };

        const response = await gapi.client.calendar.events.list(request);

        console.log('>>>>', response);
        */
      } catch (error) {
        console.error('Error signing in with Google:', error);
      }
    },
    logout({ commit }) {
      auth.signOut();
      commit('setUser', null);
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user;
    },
    token(state) {
      return state.token;
    }
  },
});
