import { redirect } from '@sveltejs/kit';
export const actions = {
    logout: async ({cookies})=>{
        cookies.delete('token', {path: '/'});
        redirect(302, '/login');
    }
}