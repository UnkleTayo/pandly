const users = []

// Add user to a chat Room 

exports.newUser = (id, username, room) =>{
  const user = { id, username, room };
  users.push(user)

  return user;
}

// Get current user
exports.getActiveUser = (id) => {
  return users.find(user => user.id === id);
}

// User leaves chat
exports.exitRoom = (id) => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
exports.getIndividualRoomUsers = (room) => {
  return users.filter(user => user.room === room);
}