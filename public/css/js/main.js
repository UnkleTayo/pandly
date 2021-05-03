const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const {username, room } = Qs.parse(location.search,{
  ignoreQueryPrefix: true,
})

const socket = io()