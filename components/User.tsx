import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

const User = () => {
  const { data: session } = useSession();

  const onSignIn = () => void signIn();

  const onSignOut = () => void signOut();

  if (session) {
    return (
      <button onClick={onSignOut}>
        <img
          src={session.user?.image || ''}
          alt=""
          className="h-10 w-10 rounded-full p-1 hover:bg-gray-200"
        />
      </button>
    );
  }

  return (
    <button
      onClick={onSignIn}
      className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
    >
      Sign in
    </button>
  );
};

export default User;
