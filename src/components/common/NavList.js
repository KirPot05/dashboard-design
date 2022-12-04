import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function NavList({ heading, links, nestedLinks }) {
  return (
    <div className="p-2 my-2 ">
      <h3 className="font-semibold text-gray-400 text-sm my-2">{heading}</h3>
      <div className="flex flex-col">
        {links.map(({ title, url, icon: Icon }) => (
          <Link
            to={url}
            key={title}
            className={`flex items-center justify-between text-gray-500 font-semibold p-2 ${
              window.location.pathname === url &&
              "bg-blue-600 text-white rounded-lg"
            }`}
          >
            <p className="flex items-center space-x-3">
              <Icon className="w-5 h-5" />
              <span> {title} </span>
            </p>
            {nestedLinks && <ChevronDownIcon className="w-4 h-4" />}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavList;
