import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { db } from '$lib/server/db/index.js';
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { env } from '$env/dynamic/private';
export const actions = {
    login: async ({request,cookies})=>{
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        let errors
        if(!password){errors = ["invalid email/password"]}
        if(password && password.length < 6){errors = ["invalid email/password"]}
        if(password && password.length > 32){errors = ["invalid email/password"]}

        const userData = await db.select().from(user).where(eq(user.email,email))
        if(userData.length === 0){errors = ["invalid email/password"]}
        if(userData.length > 0 && userData[0].password !== password){errors = ["invalid email/password"]}
        if(errors){
            return {errors}
        }
        const token = jwt.sign({id: userData[0].id, email: userData[0].email}, env.JWT_SECRET, {expiresIn: '1h'});
        cookies.set('token', token, {httpOnly: true, path: '/'});
        throw redirect(302, '/');
        
    }
}