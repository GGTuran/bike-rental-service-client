import { useGetProfileQuery } from "@/redux/features/user/userApi";


const GetME: React.FC = () => {
  const {data,isError,isLoading} = useGetProfileQuery('');
  console.log('data=>', data)
  console.log(data?.data);
  const person = data?.data;

 

  return (
    <div>
        <h1>Welcome {person?.name}</h1>
        <h1> {person?.email}</h1>
        <h1> {person?.phone}</h1>
        <h1> {person?.address}</h1>
        <h1> {person?.role}</h1>
        {/* <h1> {person?.name}</h1> */}
    </div>
  );
};

export default GetME;
