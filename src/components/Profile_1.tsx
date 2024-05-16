'use client'

import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { userSliceActions } from "@/redux-store/store-slices/userSlice";
import Image from "next/image";
import { useEffect } from "react";

const Profile_1 = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  // simulating user login
  useEffect(() => {
    dispatch(
      userSliceActions.setUser({
        id: "1",
        name: "John",
        email: "a@a.com",
        profileImage: "",
      })
    );
  }, [])
  return (
    <div className="flex p-4 bg-transparent-100 mt-4 gap-3 items-center rounded-lg mb-4">
      {user.profileImage ? (
        <Image
          src={user.profileImage}
          alt={user.name}
          width={40}
          height={40}
          className="w-9 h-9 rounded-full"
        />
      ) : (
        <div className="w-9 h-9 bg-yellow-500 rounded-full"></div>
      )}
      <h3 className="font-bold">{user.name}</h3>
    </div>
  );
};

export default Profile_1;
