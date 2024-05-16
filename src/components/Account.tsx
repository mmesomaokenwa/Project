import Profile from "@/components/Profile";

export default function Account() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="flex gap-2 mb-4">
        <button className="bg-gray-100 border rounded p-2 hover:bg-gray-300">
          Account Info
        </button>
        <button className="bg-gray-100 border rounded p-2 hover:bg-gray-300">
          Delivery Details
        </button>
        <button className="bg-gray-100 border rounded p-2 hover:bg-gray-300">
          Edit Account
        </button>
      </div>

      <div className=" user-info">
        <p className="mb-2 text-lg font-bold">Account Information</p>
        <div>
          <Profile />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-xs mb-1" htmlFor="first">
            First name
          </label>
          <input
            className="bg-gray-50 rounded py-1 px-2"
            type="text"
            id="first"
            value={"ben"}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-xs mb-1" htmlFor="last">
            Last name
          </label>
          <input
            className="bg-gray-50 rounded py-1 px-2"
            type="text"
            id="last"
            value={"chuks"}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-xs mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-50 rounded"
            type="email"
            id="email"
            value={"ben@mail.com"}
          />
        </div>
      </div>
    </div>
  );
}
