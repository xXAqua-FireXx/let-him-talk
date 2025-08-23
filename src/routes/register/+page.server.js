import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { env } from '$env/dynamic/private';
import path from 'path';
export const actions = {
    register: async ({request,cookies})=>{
        const data = await request.formData();
        const name = data.get('first_name') + " " + data.get('last_name');
        const email = data.get('email');
        const password = data.get('password');
        let errors = [];
        if(!password){errors.push("You must enter a password")}
        if(password && password.length < 6){errors.push("password must have al least 6 characters")}
        if(password && password.length > 32){errors.push("password cannot exceed 32 characters")}

        if(!email){errors.push("You must enter an email")}
        if(email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){errors.push("You must enter a valid email")}

        if(!name){errors.push("You must enter your name")}
        
        console.log({name,email,password,errors}); 


        if(errors.length){
            return {errors};
        }
            const existingUser = await db.select().from(user).where(eq(user.email,email));
            if(existingUser.length){
                return {errors: ["User with this email already exists"]};
            }
            const result = await db.insert(user).values({
                name,
                email,
                password
            }).returning();
            const token = jwt.sign({id: result[0].id, email: result[0].email}, env.JWT_SECRET);
            try{cookies.set('token', token, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60*60*24*7 // 1 week
            });}catch(e){console.log("Cookie setting error", e)}
            throw redirect(303, '/');
}
}
export async function load(){
    return {
        
    };
}