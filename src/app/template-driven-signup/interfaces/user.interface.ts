export interface User {
    name: string,
    account: {
        email: string,
        confirm: string
    },
    password: string
}