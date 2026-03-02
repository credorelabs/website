import React from "react";

const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900 max-w-screen-lrg mx-auto items-center text-center">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3 ">
        <div className="mx-auto max-w-screen-sm text-center mb-3 lg:mb-5">
          <h2 className="mb-4 text-4xl tracking-tight font-bold dark:text-white">
            Our Team
          </h2>
        </div>

        {/* Founder */}
        <div className="flex justify-center items-center mb-6 lg:mb-16 mx-auto align-middle">
          <div className="flex med:w-[60%] gap-5 items-center">
            <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800">
              <div className="px-3">
                <img
                  className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                  src="/assets/images/team/lingraj.jpg"
                  width="240"
                  height="260"
                  alt="Lingraj Mahanand"
                />
              </div>
              <div className="p-1 mb-0">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Lingraj Mahanand
                </h3>
                <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                  Founder
                </span>
                <p className="mt-1 px-5 mb-4 font-light text-gray-500 dark:text-gray-400 text-xs">
                  15 years of IT experience in Software Development at Barclays,
                  BNY Mellon, HSBC, and web3 startups Streams, ZEFI, and Herdius.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Developers */}
        <div className="tab:flex gap-3 items-center">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 w-full">
            <div className="p-3">
              <img
                className="rounded-md"
                src="/assets/images/team/Abhilash.jpeg"
                width="200"
                height="200"
                alt="Abhilash Sethi"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Abhilash Sethi
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Software Development Engineer
              </span>
            </div>
          </div>

          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 px-3 w-full">
            <div className="p-3">
              <img
                src="/assets/images/team/Praduman.jpeg"
                width="200"
                height="200"
                alt="Praduman Singh"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Praduman Singh
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Software Development Engineer
              </span>
            </div>
          </div>

          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 px-3 w-full">
            <div className="p-3">
              <img
                src="/assets/images/team/Raj.jpeg"
                width="200"
                height="200"
                alt="Raj Kishore Patra"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Raj Kishore Patra
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Software Development Engineer
              </span>
            </div>
          </div>
        </div>

        {/* Designers & QA */}
        <div className="tab:flex gap-3 mt-3 items-center">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 w-full">
            <div className="p-3">
              <img
                src="/assets/images/team/Glorina.jpg"
                width="200"
                height="200"
                alt="Glorina Senapati"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Glorina Senapati
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                UI/UX Designer
              </span>
            </div>
          </div>

          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 px-3 w-full">
            <div className="p-3">
              <img
                src="/assets/images/team/Asif.jpeg"
                width="200"
                height="200"
                alt="Md. Asif Saikh"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Md. Asif Saikh
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Trainee QA Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;