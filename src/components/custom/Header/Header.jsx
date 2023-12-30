"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [openBrowse, setOpenBrowse] = useState(false);

  return (
    <div
      className={`flex justify-between px-10 h-20 z-10 items-center max-w-[1440px] mx-auto sticky top-0 ${
        openBrowse ? "bg-slate-900" : "bg-transparent"
      } transition-colors`}
    >
      <ul className="flex items-center justify-between w-full space-x-6 list-none md:w-auto md:justify-normal">
        <li>
          <Link href="/">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='43' height='38' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.5 15.998A7.5 7.5 0 0 0 43 8.499a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 7.5 7.499z' fill='%232d68f8'/%3E%3Cpath d='M36 19.953l-1 .045A11 11 0 0 1 24 8.999c0-2.007.538-3.889 1.477-5.509l-4.323-2.352a6.6 6.6 0 0 0-6.307 0l-11.4 6.201A6.6 6.6 0 0 0 0 13.137v11.736a6.6 6.6 0 0 0 3.446 5.798l11.4 6.201a6.6 6.6 0 0 0 6.307 0l11.4-6.201A6.6 6.6 0 0 0 36 24.873v-4.92z' fill='%23f8f8f8'/%3E%3C/svg%3E"
              width={40}
              height={40}
              alt="logo"
            />
          </Link>
        </li>

        <li>
          <span
            className="hidden text-sm font-medium text-gray-400 transition-colors cursor-pointer hover:text-white md:block"
            onMouseEnter={() => setOpenBrowse(true)}
          >
            Browse
          </span>

          <div
            className={`absolute bottom-0 left-0 right-0 z-10 flex gap-6 px-10 py-8 translate-y-full bg-slate-900 ${
              openBrowse ? "opacity-full" : "opacity-0"
            } transition-opacity`}
            onMouseLeave={() => setOpenBrowse(false)}
          >
            <ul className="md:grid hidden flex-1 grid-cols-5 gap-6 lg:max-w-[70%] shrink-0">
              {Array(10)
                .fill(0)
                .map((e, i) => (
                  <li key={i}>
                    <Link
                      href="/ui-kits"
                      className="flex flex-col items-center justify-center gap-5 p-6 py-6 transition-colors border border-gray-700 rounded-2xl hover:border-purple-700"
                    >
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                          fill="#2D68FF"
                        />
                        <mask
                          id="mask0_27_23"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="56"
                          height="56"
                        >
                          <path
                            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_27_23)">
                          <path d="M0 0H28V56H0V0Z" fill="#1B48BA" />
                        </g>
                        <path
                          d="M3 28L20 11V21L13 28H3ZM53 28L36 11V21L43 28H53Z"
                          fill="#DCE3F4"
                        />
                        <path
                          d="M36 45L53 28H43L36 35V45ZM20 45L3 28H13L20 35V45Z"
                          fill="#6B84C5"
                        />
                        <path
                          d="M21 28L28 21L35 28L28 35L21 28Z"
                          fill="#171C24"
                        />
                      </svg>
                      <span>UI Kits</span>
                    </Link>
                  </li>
                ))}
            </ul>

            <ul className="grid-cols-2 max-w-[30%] gap-6 items-start lg:grid hidden">
              <li>
                <Link
                  href="/"
                  className="flex flex-col overflow-hidden border border-gray-700 rounded-2xl hover:border-purple-700"
                >
                  <div className="overflow-hidden h-36">
                    <Image
                      src="https://ui8.net/img/sapiens.webp"
                      alt="Sapiens"
                      width={400}
                      height={160}
                    />
                  </div>
                  <div className="px-4 py-3">Sapiens</div>
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="flex flex-col overflow-hidden border border-gray-700 rounded-2xl hover:border-purple-700"
                >
                  <div className="overflow-hidden h-36">
                    <Image
                      src="https://ui8.net/img/sapiens.webp"
                      alt="Sapiens"
                      width={400}
                      height={160}
                    />
                  </div>
                  <div className="px-4 py-3">Sapiens</div>
                </Link>
              </li>

              <li className="h-full col-span-2 p-4 border border-gray-700 rounded-2xl">
                <p className="mb-2">Browse by most popular formats</p>
                <ul className="flex justify-between">
                  {Array(6)
                    .fill(0)
                    .map((e, i) => (
                      <li
                        key={i}
                        className="p-3 bg-gray-700 border-2 border-gray-400 rounded-full cursor-pointer hover:border-purple-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                        >
                          <g fillRule="evenodd">
                            <path
                              d="M8 5.317h5V0H3.092v.049L8 5.317z"
                              fill="url(#A)"
                            />
                            <path
                              d="M8 5.317H3v5.317h9.909v-.049L8 5.317z"
                              fill="url(#B)"
                            />
                            <path
                              d="M3 10.634h4.955V16L3 10.634z"
                              fill="url(#C)"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="A"
                              x1="13.001"
                              y1="2.658"
                              x2="4.312"
                              y2="2.328"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#8de4ff" />
                              <stop offset="1" stop-color="#30ceff" />
                            </linearGradient>
                            <linearGradient
                              id="B"
                              x1="12.909"
                              y1="7.976"
                              x2="4.125"
                              y2="7.976"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#00c5ff" />
                              <stop offset="1" stop-color="#009aff" />
                            </linearGradient>
                            <linearGradient
                              id="C"
                              x1="5.477"
                              y1="10.634"
                              x2="5.477"
                              y2="16"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#005aff" />
                              <stop offset="1" stop-color="#008dff" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>

            <div
              className={`${openBrowse ? "block" : "hidden"} w-full md:hidden`}
            >
              <p className="mb-6 text-2xl font-bold">Get started</p>
              <div className="flex flex-wrap w-full gap-4 mb-6">
                <button className="flex-1 py-4 font-extrabold border-2 border-gray-700 rounded-xl">
                  Join us
                </button>
                <button className="flex-1 py-4 font-extrabold bg-purple-700 rounded-xl">
                  Sign in
                </button>
              </div>
              <p className="mb-6 text-2xl font-bold">Browse</p>
              <div className="grid grid-cols-2 gap-6">
                {Array(10)
                  .fill(0)
                  .map((e, i) => (
                    <Link
                      href="/"
                      key={i}
                      className="text-sm font-bold text-gray-500 transition-colors hover:text-white"
                    >
                      UI Kits
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </li>

        <li className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block">
          <Link href="/all-access">All-Access</Link>
        </li>

        <li className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block">
          <Link href="/all-access">Studio</Link>
        </li>

        <li className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block">
          <Link href="/all-access">Become an author</Link>
        </li>

        <li className="text-sm font-medium transition-colors cursor-pointer fill-gray-400 hover:fill-white">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M11 2a9 9 0 0 1 9 9 8.96 8.96 0 0 1-1.968 5.617l3.675 3.676a1 1 0 0 1-1.32 1.497l-.094-.083-3.676-3.675A8.96 8.96 0 0 1 11 20a9 9 0 1 1 0-18zm0 2a7 7 0 1 0 0 14c1.89 0 3.606-.749 4.865-1.967a.73.73 0 0 1 .077-.09l.09-.077C17.251 14.606 18 12.89 18 11a7 7 0 0 0-7-7z"></path>
          </svg>
        </li>
      </ul>

      <ul className="flex items-center space-x-4 list-none">
        <li className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block">
          <Link href="/join-us">Join Us</Link>
        </li>

        <li className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white md:block">
          <Link href="/sign-in">Sign in</Link>
        </li>

        <li className="text-sm font-medium transition-colors cursor-pointer fill-gray-400 hover:fill-white">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M16.135 2.001l.507.005.44.012c.888.034 1.371.13 1.883.375a4 4 0 0 1 1.726 1.588c.236.404.372.812.471 1.428h0l.056.396.026.22h0l.049.489.769 9.206.08 1.014.038.613.015.349.005.308-.004.273-.006.125h0l-.02.232-.03.212-.042.197-.084.282h0l-.072.187-.041.095a4 4 0 0 1-1.759 1.912h0l-.182.093-.18.081-.184.069h0l-.193.058-.32.068h0l-.242.035-.132.014h0l-.289.023-.328.017-.372.012-.653.009L7.716 22l-.785-.002-.653-.009-.541-.02-.308-.02-.272-.027-.125-.016h0l-.23-.039a3.06 3.06 0 0 1-.585-.175h0l-.18-.081-.182-.093a4 4 0 0 1-1.759-1.912l-.041-.095h0l-.072-.187-.059-.187-.047-.192h0l-.036-.204-.033-.34h0l-.009-.258h0l-.001-.141.005-.308.015-.349.024-.396.051-.693.766-9.206.084-.908.062-.532.044-.297.048-.259.026-.118h0l.057-.216c.061-.205.134-.381.228-.559h0l.1-.18a4 4 0 0 1 1.726-1.588c.512-.245.995-.341 1.883-.375h0l.44-.012.507-.005h8.271zm.218 2.001H7.648l-.392.006-.329.011-.274.016-.226.023-.098.014h0l-.17.033c-.103.025-.187.055-.263.091a2 2 0 0 0-.863.794h0l-.049.092-.044.102-.02.057h0l-.038.128-.035.152-.049.285-.063.518-.05.516-.776 9.293-.075 1.016-.024.456-.007.25v.213l.007.181.014.154.021.132.028.115.035.103.02.049a2 2 0 0 0 .88.956h0l.096.047.106.041.058.018h0l.13.032.073.014h0l.166.024.196.02.361.022.456.014.786.009 9.047.001.901-.004.366-.006.456-.014.361-.022.196-.02.166-.024.141-.029h0l.121-.035.106-.041.096-.047a2 2 0 0 0 .88-.956l.02-.049h0l.035-.103.028-.115.021-.132.014-.154.007-.181v-.213l-.007-.25-.014-.292-.05-.731-.756-9.096-.088-1-.04-.369-.041-.306-.043-.251a1.79 1.79 0 0 0-.192-.569 2 2 0 0 0-.863-.794c-.076-.036-.16-.066-.262-.091h0l-.169-.033-.098-.014h0l-.226-.023-.273-.016-.329-.011-.391-.006zM16 7a1 1 0 0 1 1 1 5 5 0 0 1-5 5 5 5 0 0 1-5-5 1 1 0 1 1 2 0 3 3 0 0 0 3 3 3 3 0 0 0 3-3 1 1 0 0 1 1-1z"></path>
          </svg>
        </li>

        <li className="block w-8 text-sm font-medium transition-colors cursor-pointer fill-gray-400 hover:fill-white md:hidden">
          {!openBrowse ? (
            <svg viewBox="0 0 32 32" onClick={() => setOpenBrowse(true)}>
              <path d="M28 15a1 1 0 0 1 .117 1.993L28 17H4a1 1 0 0 1-.117-1.993L4 15h24zm0-8a1 1 0 0 1 .117 1.993L28 9H4a1 1 0 0 1-.117-1.993L4 7h24zm0 16a1 1 0 0 1 .117 1.993L28 25H4a1 1 0 0 1-.117-1.993L4 23h24z"></path>
            </svg>
          ) : (
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='20.5' x2='11.5' y1='11.5' y2='20.5' stroke='%23ADB7BE' stroke-width='2'/%3E%3Cline x1='11.5' x2='20.5' y1='11.5' y2='20.5' stroke='%23ADB7BE' stroke-width='2'/%3E%3Cpath stroke='%23ADB7BE' stroke-width='2' d='M31,16 C31,24.2843 24.2843,31 16,31 C7.71573,31 1,24.2843 1,16 C1,7.71573 7.71573,1 16,1 C24.2843,1 31,7.71573 31,16 Z'/%3E%3C/g%3E%3C/svg%3E"
              alt="close"
              width={30}
              height={30}
              onClick={() => setOpenBrowse(false)}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
