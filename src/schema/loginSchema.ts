import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string({required_error:'email is required'}).email("Invalid email address"),
    password: z.string({required_error:'Password is required'}),
});