function Sidebar() {
  return (
    <>
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg p-4 flex flex-col items-center">
        <img 
          src="/person.svg" 
          alt="Profile" 
          className="w-48 h-48 rounded-full object-cover mb-4 z-50"
        />
        <div className="text-center space-y-2">
          <p className="font-bold text-lg">Miguel M.G.</p>
          <p className="text-sm text-gray-600">miguel@ensign.com</p>
          <p className="text-sm text-gray-600">(123) 456-7890</p>
        </div>
      </div>
      <div>
        <div className="fixed bottom-0 right-0 mb-4 mr-4 flex space-x-4">
          <a href="https://www.github.com/miguel-mal" target="_blank" rel="noopener noreferrer">
            <img 
              src="/git.svg" 
              alt="GitHub" 
              className="w-8 h-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/miguel-mal/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/linkedin.svg" 
              alt="LinkedIn" 
              className="w-8 h-8"
            />
          </a>  
        </div>
      </div>
    </>
  );
}

export default Sidebar;
