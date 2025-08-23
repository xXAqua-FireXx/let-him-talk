import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

if (!env.NETLIFY_DATABASE_URL) throw new Error('NETLIFY_DATABASE_URL is not set');

const client = neon(env.NETLIFY_DATABASE_URL);

export const db = drizzle(client, { schema });
