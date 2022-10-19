export const getUsers = () => {
    if (localStorage.getItem('ent-lk') !== null) {
        return JSON.parse(localStorage.getItem('ent-lk'))
    } else {
        localStorage.setItem('ent-lk', JSON.stringify([]))
        return []
    }
};
export const createUser = (email, password) => {
    let users = getUsers();
    users.push({ email: email, password: password });
    localStorage.setItem('ent-lk', JSON.stringify(users));
}
export const checkUser = (email) => {
    let users = getUsers();
    let exists = false;
    users.forEach((user) => {
        user.email === email && (exists = true);
    })
    if (exists) {
        return true
    } else {
        return false
    }
}
export const logIn = (email) => {
    localStorage.setItem('ent-lk-log', 'logged')
    let users = getUsers();
    users.forEach((user) => {
        user.email === email && (user.logged = true);
    })
    localStorage.setItem('ent-lk', JSON.stringify(users));
}
export const logOut = () => {
    localStorage.setItem('ent-lk-log', 'not logged')
    let users = getUsers();
    users.forEach((user) => {
        user.logged = false;
    })
    localStorage.setItem('ent-lk', JSON.stringify(users));
}
export const checkLogin = () => {
    if (localStorage.getItem('ent-lk-log') === 'logged') {
        return true
    } else {
        return false
    }
}
export const getUserMovies = (movies) => {
    let users = getUsers()
    let online = users.find((user) => {
        return user.logged = true
    })
    if (online === undefined) {
        return movies
    } else {
        if (online.movies === undefined) {
            return movies
        } else {
            return online.movies
        }
    }
}
export const setUserMovies = (movies) => {
    let users = getUsers()
    users.forEach((user) => {
        if (user.logged === true) {
            user.movies = movies
        }
    })
    localStorage.setItem('ent-lk', JSON.stringify(users));
}