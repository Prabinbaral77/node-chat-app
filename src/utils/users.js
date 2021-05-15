const users = []

//add user remove user get user  getuserin room
const addUser = ({id, username, room}) => {
    // clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //valiidate data
    if(!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    //check for exixting user
    const existingUser = users.find((user)=> {
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser) {
        return {
            error: 'Username already in use'
        }
    }

    //Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user)=>  user.id === id)

    if (index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id)=> {
   return users.find((user) => user.id === id )
}

const getUsersInRoom = (room) => {
     room = room.trim().toLowerCase()
     return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}