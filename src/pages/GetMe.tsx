import { useGetProfileQuery } from "@/redux/features/user/userApi";


const GetME: React.FC = () => {
  const {data,isError,isLoading} = useGetProfileQuery('');
  console.log('data=>', data)
  

 

  return (
    <div>
        <h1>GG Turan where is she</h1>
    </div>
  );
};

export default GetME;
