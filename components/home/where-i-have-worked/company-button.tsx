const CompanyButton = ({ name, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
        flex-none font-mono duration-500 rounded
        sm:text-sm text-xs text-center md:text-left
        py-3 md:pl-6 md:px-4 md:w-44 w-32
        hover:text-AAsecondary hover:bg-ResumeButtonHover
        ${isActive ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}
      `}
  >
    {name}
  </button>
);

export default CompanyButton;
