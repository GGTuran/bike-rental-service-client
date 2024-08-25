import { Button } from '@/components/ui/button';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit} = useForm({
        defaultValues: {
            email: "john@user.com",
            password: "user123",
        },
    });

    const [login, {data, error}] = useLoginMutation();
    console.log('data =>', data);
    console.log('error =>', error);


    const onSubmit = (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        login(userInfo);
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