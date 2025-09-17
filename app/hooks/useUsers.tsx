// Fetch users from: https://jsonplaceholder.typicode.com/users.

import { useFetch } from "./useFetch";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export const useUsers = () => {
    const { data: users, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

    return { users: users || [], loading, error };
};