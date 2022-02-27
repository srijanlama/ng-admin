import { User } from "../models/auth.models";

/**
 * @returns registered user list
 */
function getAllUsers(): User[] {
    // array in session storage for registered users
    let users: User[] = JSON.parse(sessionStorage.getItem('users')!) || [
        {
            id: 1, username: 'test', email: 'shreyu@coderthemes.com', password: 'test', firstName: 'Nik', lastName: 'Patel',
            avatar: 'assets/images/users/avatar-1.jpg', location: 'California, USA', title: 'User Experience Specialist'
        }
    ];
    return users;
}


/**
 * Returns the current user
 */
function loggedInUser(): User | null {
    let user: User | null = {};
    user = JSON.parse(sessionStorage.getItem('currentUser')!);
    return user;
}

export { getAllUsers, loggedInUser }

