import React from "react";

import Image from "next/image";
import TheTeam from "../../public/assets/images/team/the-team.png";
import Avtar from "../../public/assets/images/team/avtar.jpg";
import Harshit from "../../public/assets/images/team/harshit.jpg";
import Dinesh from "../../public/assets/images/team/dinesh.jpeg";
import Lingraj from "../../public/assets/images/team/lingraj.jpg";
import Abhilash from "../../public/assets/images/team/Abhilash.jpeg";
import Praduman from "../../public/assets/images/team/Praduman.jpeg";
import Raj from "../../public/assets/images/team/Raj.jpeg";
import Sunil from "../../public/assets/images/team/sunil.jpeg";
import Shastri from "../../public/assets/images/team/Shastri.jpeg";
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
    <section className="bg-white dark:bg-gray-900 max-w-screen-lrg mx-auto items-center text-center">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3 ">
        <div className="mx-auto max-w-screen-sm text-center mb-3 lg:mb-5">
          <h2 className="mb-4 text-4xl tracking-tight font-bold dark:text-white">
            Our Team
          </h2>
        </div>
        <div className="grid mb-6 lg:mb-16 gap-5 med:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="px-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg px-3"
                src={Lingraj}
                width={240}
                height={260}
                alt="Lingraj Mahanand"
              />
            </a>
            <div className="p-5 mb-0">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lingraj Mahanand</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Founder
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 text-xs">
                15 years of IT experience in SoftwareDevelopment at Barclays,
                BNY Mellon,HSBC and web3 startups Streams, ZEFI and Herdius.
              </p>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="px-3">
              <Image
                className="!w-1/2 rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Dinesh}
                width={240}
                height={260}
                alt="Harshit Jain"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Dinesh Modi</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
              Chief Business Officer, MBA in Marketing from ITM B-School, Navi Mumbai
              </span>
              <p className="mt-3 font-light text-gray-500 dark:text-gray-400 text-xs">
              Dinesh has over 12 years of experience in roles related to Sales, Business Development, Strategy & Business Excellence with companies such as Blue Dart, Blackbuck & Paytm.
              </p>
            </div>
          </div>
        </div>

        <div className="tab:flex gap-3 items-center">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 w-full">
            <a href="#" className="p-3">
              <Image
                className="rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Abhilash}
                height={200}
                width={200}
                alt="Abhilash"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Abhilash Sethi</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Software Development Engineer
              </span>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 px-3 w-full">
            <a href="#" className="p-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Praduman}
                alt="Praduman Singh"
                height={200}
                width={200}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Praduman Singh</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Software Development Engineer
              </span>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 px-3 w-full">
            <a href="#" className="p-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Raj}
                alt="Raj Kishore Patra"
                height={200}
                width={200}
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Raj Kishore Patra</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
                Software Development Engineer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-3 my-16">
        <div className="mx-auto max-w-screen-sm text-center mb-3 lg:mb-5">
          <h2 className="mb-4 text-4xl tracking-tight font-bold dark:text-white">
            Advisory & Boards
          </h2>
        </div>
        <div className="grid mb-6 lg:mb-16 gap-5 med:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="px-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg"
                src={Harshit}
                width={250}
                height={250}
                alt="Harshit Jain"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Harshit H Jain</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                Director and Chief Mentor, M.Sc.(Tech) Computer Science fromBITS
                Pilani and MBA from IIMAhmedabad
              </span>
              <p className="mt-3 font-light text-gray-500 dark:text-gray-400 text-xs">
                Harshit has over 30 Years of experience insetting up GTS
                businesses forBanks/NBFCs/IT companies.
              </p>
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="px-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg px-3"
                src={Sunil}
                width={250}
                height={250}
                alt="Sunil Senapati"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Sunil Senapati</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
              Advisor, MBA in Marketing from Northumbria University, UK
              </span>
              <p className="mt-3 font-light text-gray-500 dark:text-gray-400 text-xs">
              Sunil, CEO of XTN Singapore, has worked for more than 2 decades with wide-ranging management and execution experience of IT/ERP/Supply Chain/Trade Finance solutions gained across sectors internationally.
              </p>
            </div>
          </div>
        </div>
          <div className="items-center bg-gray-50 rounded-md shadow sm:flex dark:bg-gray-800 dark:border-gray-700 med:w-1/2 mx-auto">
            <a href="#" className="px-3">
              <Image
                className="w-full rounded-md sm:rounded-none sm:rounded-l-lg px-3"
                src={Shastri}
                width={250}
                height={250}
                alt="Rajeswara Sastry Kuchi"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#"> Rajeswara Sastry Kuchi</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400 text-xsm font-medium">
              Strategic Advisor – Global Trade & Business Development
              </span>
              <p className="mt-3 font-light text-gray-500 dark:text-gray-400 text-xs">
              Experienced Head Of Business Development with a demonstrated history of strong business development professional skilled in Vendor Management, Management, Customer Service, Strategic Planning, and Business Development.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};
export default Team;
