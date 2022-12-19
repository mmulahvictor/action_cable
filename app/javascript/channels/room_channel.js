import consumer from "channels/consumer"

document.addEventListener( 'turbolinks:load', () => {
  consumer.subscriptions.create( { channel: "RoomChannel", room_id: 1 }, {
    connected () {
      console.log( "Connected to room channel..." );
    },

    disconnected () {
      // Called when the subscription has been terminated by the server
    },

    received ( data ) {
      // Called when there's incoming data on the websocket for this channel
      console.log( data );
    }
  } );
})
