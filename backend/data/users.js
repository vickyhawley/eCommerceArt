import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@SianMcGill.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Sian McGill',
        email: 'sian@SianMcGill.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'John Doe',
        email: 'JD@SianMcGill.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users