import dotenv from 'dotenv';
dotenv.config()

export const config = {

    secret_key: {
        session_key: process.env.session_Secret,
        cookie_key: process.env.cookie_Secret
    }
    
}
