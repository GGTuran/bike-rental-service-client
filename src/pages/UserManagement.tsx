

import Loading from "@/components/Loading/Loading";
import { useDeleteUserMutation, useGetAllUsersQuery, usePromoteUserMutation } from "@/redux/features/user/userApi";
import toast, { Toaster } from "react-hot-toast";

const UserManagement = () => {
  // Fetch all users
  const { data: users, isLoading, error } = useGetAllUsersQuery('');
  console.log(users)

  // Mutations for deleting and promoting users
  const [deleteUser] = useDeleteUserMutation();
  const [promoteUser] = usePromoteUserMutation();

  const handleDeleteUser = async (_id: string) => {
    console.log('gg',_id)
    try {
      await deleteUser(_id).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const handlePromoteUser = async (_id: string) => {
    try {
      await promoteUser(_id).unwrap();
      toast.success("User promoted to admin successfully");
    } catch (error) {
      toast.error("Failed to promote user to admin");
    }
  };

  // Render loading state
  if (isLoading) return <Loading></Loading>;

  // Render error state
  if (error) return <div>Something went wrong. Please try again.</div>;

  return (
    <div className="p-4">
      <Toaster />
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handlePromoteUser(user?._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Promote to Admin
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user?._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
