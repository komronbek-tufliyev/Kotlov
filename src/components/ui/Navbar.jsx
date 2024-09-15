import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const hidden = useRef();
  function openNavbarFunction() {
    hidden.current?.classList.remove("hidden");
  }
  function closeNavbarFunction() {
    hidden.current?.classList.add("hidden");
  }
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav
          className="flex items-center justify-between p-6 lg:px-20"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <span className="text-slate-700 font-bold text-2xl">Kotlov</span>
            </Link>
          </div>
          <div className="flex lg:hidden gap-4">
            <button
              onClick={() => openNavbarFunction()}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-7 justify-between items-center">
            <NavLink
              to={"/"}
              className={`text-base font-mono leading-6 text-gray-900`}
            >
              Bosh sahifa
            </NavLink>

            <NavLink
              to={"/question"}
              className="text-base font-mono leading-6 text-gray-900"
            >
              Savollarga javoblar
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-base font-mono leading-6 text-gray-900"
            >
              Aloqa
            </NavLink>

            {/* <NavLink to={"/saved"} className="w-[30px] h-[30px] header_img">
              <img className="object-cover" src={saved} alt="" />
              <p>0</p>
            </NavLink> */}
          </div>
        </nav>
        <div
          ref={hidden}
          className="lg:hidden hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50"></div>
          <div
            onClick={() => closeNavbarFunction()}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <Link to={"/"} className="-m-1.5 p-1.5 flex items-center gap-2">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
                <span className="text-slate-700 font-bold text-2xl">
                  Kotlov
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-white"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to={"/"}
                    className="-mx-3 rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex justify-between border-b"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-house"></i>
                      Bosh sahifa
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                  </NavLink>
                  <NavLink
                    to={"/question"}
                    className="-mx-3 rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex justify-between border-b"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fa-regular fa-circle-question"></i>
                      Savollarga javoblar
                    </div>

                    <i className="fa-solid fa-chevron-right"></i>
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="-mx-3 rounded-lg px-3 py-4 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex justify-between border-b"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-phone-volume"></i>
                      Aloqa
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
