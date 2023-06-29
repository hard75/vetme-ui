<template>
  <div>
    <el-button @click="signInWithGoogle" type="info">Authorize</el-button>
    <el-calendar v-model="selectedDate" />
    <div v-if="isLogged">
      <el-button type="primary" @click="addEvent">Add Event</el-button>
      <br />
      <el-button type="danger" @click="getInfo">get Event</el-button>
    </div>
  </div>
</template>

<script>
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebase.js";
import { gapi } from "gapi-script";

export default {
  data() {
    return {
      isLogged: false,
      calendarEvents: [],
      selectedDate: new Date()
    };
  },
  methods: {
    async signInWithGoogle() {
      try {
        // Initialize gapi
        gapi.load("auth2", async () => {
          /*await gapi.auth2.init({
            client_id:
              '181706391015-f7tq07jdjrq350hjeko1pja0odomooec.apps.googleusercontent.com',
          });
          */
          await gapi.auth2.getAuthInstance().signIn({
            scope: "https://www.googleapis.com/auth/calendar",
          });

          const idToken = await gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getAuthResponse().id_token;

          const credential = GoogleAuthProvider.credential(idToken);

          await signInWithCredential(auth, credential);
          // const user = userCredential.user;

          // Load the Google Calendar API
          gapi.client.load("calendar", "v3", async () => {
            // Google Calendar API is loaded successfully
            this.isLogged = true;

            gapi.client.calendar.events
              .list({
                calendarId: "primary",
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: "startTime",
              })
              .then((response) => {
                const events = response.result.items;
                console.log(events);
                // Process the calendar events here
              });
            // Now you can use the gapi.client.calendar object
            // to make API requests related to Google Calendar
          });
        });
      } catch (error) {
        // Handle sign-in errors
        console.error("Error signing in with Google:", error);
      }
    },

    async addEvent() {
      var event = {
        summary: "prueba desde vetme",
        location: "Google Meet",
        description: "descripción de evento de prueba",
        start: {
          dateTime: new Date().toISOString(),
          timeZone: "America/Los_Angeles",
        },
        end: {
          dateTime: new Date().toISOString(),
          timeZone: "America/Los_Angeles",
        },
        attendees: [{ email: "gsusposicion@gmail.com" }],
        conferenceData: {
          createRequest: {
            requestId: Date.now().toString(),
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      };

      gapi.client.calendar.events
        .insert({
          calendarId: "primary",
          resource: event,
          conferenceDataVersion: 1,
        })
        .then((response) => {
          console.log(">>>> response insert >>>>", response);
          console.log(">>>> response insert >>>>", response.result.hangoutLink);

          this.currentId = response.result.id;
        });
    },
    getInfo() {
      gapi.client.calendar.events
        .get({
          calendarId: "primary", // Replace with your calendar ID
          eventId: this.currentId,
        })
        .then(function (response) {
          const event = response.result;

          // Check if the event has conference data
          if (event.conferenceData) {
            const conferenceData = event.conferenceData;

            // Get the conference ID and status
            const conferenceId = conferenceData.conferenceId;
            const conferenceStatus = conferenceData.entryPoints[0].accessCode;

            // Use the conference ID and status as needed
            console.log("Conference ID:", conferenceId);
            console.log("Conference Status:", conferenceStatus);
          } else {
            console.log("The event does not have conference data.");
          }
        })
        .catch(function (error) {
          console.error("Error retrieving event details:", error);
        });
    },
  },
};
</script>
