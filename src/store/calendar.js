export default {
  namespaced: true,
  state: {
    calendarDates: [],
  },
  mutations: {
    setCalendarDates(state, dates) {
      state.calendarDates = dates;
    },
  },
  actions: {
    async fetchCalendarDates({ commit, rootState }) {
      const response = await rootState.auth.gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });

      const events = response.result.items;
      const dates = events.map(event => event.start.dateTime || event.start.date);

      commit('setCalendarDates', dates);
    },
  },
};