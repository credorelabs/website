import React from "react";

import Image from "next/image";
import TheTeam from "../../public/assets/images/team/the-team.png";
import Avtar from "../../public/assets/images/team/avtar.jpg";
import Harshit from "../../public/assets/images/team/harshit.jpg";
import Lingraj from "../../public/assets/images/team/lingraj.jpg";
// import Step1 from "../../public/assets/images/about/step1.png";

const Team = () => {
  // return (
  //   <section className="section">
  //     <div className="container">
  //       <div className="p-5 pl-10">
  //         <h1>Our Team</h1>
  //       </div>
  //       <div className="container flex mt-20">
  //         <Image src={TheTeam} width={1130} height={332} alt="" />
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3 ">
        <div className="mx-auto max-w-screen-sm text-center mb-3 lg:mb-5">
          <h2 className="mb-4 text-4xl tracking-tight font-bold dark:text-white">
            Our Team
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="px-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Harshit}
                alt="Harshit Jain"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Harshit H Jain</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Director and Chief Mentor, M.Sc.(Tech) Computer Science fromBITS
                Pilani and MBA from IIMAhmedabad
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 text-sm font-normal">
                Harshit has over 30 Years of experience insetting up GTS
                businesses forBanks/NBFCs/IT companies.
              </p>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="px-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg px-3"
                src={Lingraj}
                alt="Lingraj Mahanand"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lingraj Mahanand</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Founder
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 text-sm font-normal">
                15 years of IT experience in SoftwareDevelopment at Barclays,
                BNY Mellon,HSBC and web3 startups Streams, ZEFI and Herdius.
              </p>
            </div>
          </div>
        </div>

        <div className="tab:flex gap-3 items-center">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-full">
            <a href="#" className="p-3">
              <Image
                className="rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Avtar}
                height={120}
                width={120}
                alt="Ankit Nag"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Ankit Nag</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Back-end Developer
              </span>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 px-3 w-full">
            <a href="#" className="p-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Avtar}
                alt="Aditi Mishra"
                height={120}
                width={120}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Aditi Mishra</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Back-end Developer
              </span>
            </div>
          </div>

          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 px-3 w-full">
            <a href="#" className="p-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Avtar}
                alt="Praduman Singh"
                height={120}
                width={120}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Praduman Singh</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Front-end Developer
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Team;
