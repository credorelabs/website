import { useRouter } from "next/router";
import { useState } from "react";

const MENU_ITEMS = [
  { label: "Home", path: "/" },
   { label: "About us", path: "/about" },
  { label: "Platform", path: "/platform" },
  { label: "Solutions", path: "/solutions" },
  { label: "Case Studies", path: "/case-study" },
 
];

function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const activePath = router.pathname; // later replace with router pathname

  return (
    <>
      {/* TOP NOTIFICATION BAR */}
      {/* TOP NOTIFICATION BAR */}
<a
  href="https://www.linkedin.com/posts/credore_credore-is-deemed-approved-by-igpi-activity-7351995215353700353-c_Vw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1iBu0BgGYlONTcjjYMaNEtdcMGODPSPtk"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="bg-[#FFF3EC] px-4 py-2 text-center text-sm cursor-pointer hover:bg-[#FFE6DA] transition">
    <span className="bg-[#D9F2F2] text-[#008080] px-2 py-[2px] rounded-full text-xs mr-2">
      New
    </span>

    <span className="text-[#F15A29] font-bold">
      Credore launches new interoperability bridge for cross-chain trade
      finance.
    </span>

    <span className="ml-2 font-semibold">
      Read Announcement →
    </span>
  </div>
</a>


      {/* NAVBAR */}
      <nav className="sticky top-0 z-[500] bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <img src="./assets/images/logo.png" alt="Credore" className="h-7" />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {MENU_ITEMS.map((item) => (
              <li key={item.label} className="relative">
                <a
                  href={item.path}
                  className={`cursor-pointer ${
                    activePath === item.path
                      ? "font-semibold text-black"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}

                  {activePath === item.path && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#F15A29]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <a href="https://app.credore.xyz/" className="cursor-pointer">
              Login
            </a>

            <a href="https://verify.credore.xyz/" className="bg-[#F15A29] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
              Verify eBL
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t bg-white">
            <ul className="flex flex-col gap-4 px-6 py-4 text-sm">
              {MENU_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className={`block ${
                      activePath === item.path
                        ? "font-semibold text-[#F15A29]"
                        : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <div className="pt-4 border-t flex flex-col gap-3">
                <a href="https://app.credore.xyz/">Login</a>

                <a href="https://verify.credore.xyz/" className="bg-[#F15A29] text-white px-4 py-2 rounded-lg font-semibold">
                  Verify eBL
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
