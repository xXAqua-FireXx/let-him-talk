import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';
export async function handle({ event, resolve }) {
    const token = event.cookies.get('token');
    event.locals.user = null;
    if (token) {
        try {
            const decoded = jwt.verify(token, env.JWT_SECRET);
            event.locals.user = decoded;
        } catch (err) {
            console.log('Invalid token', err);
            event.cookies.delete('token', { path: '/' });
        }
    }
    const response = await resolve(event);
    return response;
}