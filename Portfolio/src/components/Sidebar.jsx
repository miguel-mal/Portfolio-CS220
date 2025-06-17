function Sidebar() {
  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg p-4 flex flex-col items-center">
      <img 
        src="/path-to-your-profile.jpg" 
        alt="Profile" 
        className="w-24 h-24 rounded-full object-cover mb-4 z-50"
      />
      <div className="text-center space-y-2">
        <p className="font-semibold">Miguel Maldonado</p>
        <p className="text-sm text-gray-600">jane@example.com</p>
        <p className="text-sm text-gray-600">(123) 456-7890</p>
      </div>
    </div>
  );
}

export default Sidebar;
