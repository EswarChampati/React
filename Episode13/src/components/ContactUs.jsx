const ContactUs = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">ContactUs</h1>
      <form>
        <input
          type="text"
          className="m-3 search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="m-3 search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="message"
        ></input>

        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg
        shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2
        focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
