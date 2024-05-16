export default function Sidebar() {
  return (
    <div className="bg-green-500 rounded text-left flex flex-col gap-1">
      <h1 className="text-3xl text-left font-bold text-white mt-6 pt-5 px-8">
        My Account
      </h1>
      <div className="bg-green-500 flex flex-col gap-1 mt-9 ">
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white content-start py-2 px-4 rounded">
          Account Information
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:drop-shadow-lg text-white  py-2 px-4 rounded">
          Order History
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white  py-2 px-4 rounded">
          Tracking my Order
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white  py-2 px-4 rounded">
          Payment Information
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white  py-2 px-4 rounded">
          Returns and refunds
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white  py-2 px-4 rounded">
          Wish list
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white  py-2 px-4 rounded">
          Recently viewed
        </button>
        <button className="shadow-white hover:bg-gray-100 text-left hover:text-green-500 hover:shadow-lg text-white  py-2 px-4 rounded">
          Sign Out
        </button>
      </div>
    </div>
  );
}
