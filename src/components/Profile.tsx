const Profile = () => {
  return (
    <div className="flex p-4 bg-gray-100 mt-4 gap-3 items-center rounded-lg mb-4">
      <div className="w-16 h-16 bg-yellow-700 rounded-full"></div>
      <div>
        <h3 className="font-bold">user name</h3>
        <p className="text-xs">last seen</p>
      </div>
    </div>
  );
};

export default Profile;
