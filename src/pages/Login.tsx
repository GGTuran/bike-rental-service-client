import { Button } from '@/components/ui/button';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit} = useForm({
        defaultValues: {
            email: "john@user.com",
            password: "user123",
        },
    });

    const [login, {error}] = useLoginMutation();
    


    const onSubmit = async(data) => {
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
        <form >
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" id='email' {...register('email')} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id='password' {...register('password')} />
            </div>
            <Button onClick={handleSubmit(onSubmit)}>Login</Button>
        </form>
    );
};

export default Login;