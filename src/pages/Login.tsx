import { Button } from '@/components/ui/button';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schema/loginSchema';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit} = useForm({
        resolver:zodResolver(loginSchema),
        defaultValues: {
            email: "john@user.com",
            password: "user123",
        },
    });

    const [login, {error}] = useLoginMutation();
    


    const onSubmit = async(data: { email: string; password: string; }) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        const res = await login(userInfo).unwrap();
        // console.log(res.token);
        const user = res.data;
        console.log(user)
        dispatch(setUser({ user: user, token:res.token }));
        navigate('/');
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register('email', { required: "Email is required" })} 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm" 
                    />
                    {/* {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>} */}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        {...register('password', { required: "Password is required" })} 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm" 
                    />
                    {/* {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>} */}
                </div>
                <Button type="submit" className="w-full">Login</Button>
                {error && <p className="mt-2 text-sm text-red-600">Login failed. Please try again.</p>}
            </form>
        </div>
    </div>
    );
};

export default Login;