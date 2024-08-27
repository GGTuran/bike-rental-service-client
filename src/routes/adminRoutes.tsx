import ManageBikes from "@/pages/ManageBikes";
import UserManagement from "@/pages/UserManagement";

export const adminPaths = [
  {
    path: "manage-bikes",
    element: <ManageBikes></ManageBikes>,
  },
  {
    path: "user-management",
    element: <UserManagement></UserManagement>,
  },
];
