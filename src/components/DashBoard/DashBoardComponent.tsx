import { useAuth, useUser } from '@clerk/clerk-react';

const DashBoardComponent = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  console.log(useAuth());
  return (
    <>
      <>
        <h1>DashBoard Component</h1>
        <h3>Welcome {user?.fullName}</h3>
        <p>This is where the upsert document will come</p>
        <button type="button" onClick={() => signOut()}>
          Log Out
        </button>
      </>
    </>
  );
};

export default DashBoardComponent;
