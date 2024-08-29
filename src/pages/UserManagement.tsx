

import Loading from "@/components/Loading/Loading";
import { useDeleteUserMutation, useGetAllUsersQuery, usePromoteUserMutation } from "@/redux/features/user/userApi";
import {  ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserManagement = () => {
  // Fetch all users
  const { data: users, isLoading, error } = useGetAllUsersQuery('');
  // console.log(users)

  // Mutations for deleting and promoting users
  const [deleteUser] = useDeleteUserMutation();
  const [promoteUser] = usePromoteUserMutation();

  const handleDeleteUser = async (_id: string) => {
    // console.log('gg',_id)
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
    <div className="p-4 max-w-7xl mx-auto">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users?.data?.map((user: { _id: string; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; role: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <tr key={user._id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.role}</td>
                <td className="whitespace-nowrap px-4 py-2 text-center flex justify-center space-x-2">
                  <button
                    onClick={() => handlePromoteUser(user?._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-150"
                  >
                    Promote
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user?._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-150"
                  >
                    Delete
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
