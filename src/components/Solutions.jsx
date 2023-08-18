import React from "react";
import Image from "next/image";
// import {suppliers, banks, corporates} from "../constants/assets";
import suppliers from "./../../public/assets/images/suppliers.png";
import banks from "./../../public/assets/images/banks.png";
import corporates from "./../../public/assets/images/corporates.png";

const Solutions = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="solutionsDetailsBx">
          <div className="p-5 pl-0">
            <h1 className="text-center">Our Solutions</h1>
          </div>

          <div className="heading">
            Credore&apos;s solution for banks offers streamlined invoice
            processing, enhancing efficiency and reducing costs, while also
            providing increased security against fraud and errors in invoice
            financing. This results in improved lending revenue, balance sheet
            velocity, and new business opportunities, all within a more secure
            and compliant trade finance environment.
          </div>
          <div className="otherDetails">
            <div className="tile">
              <figure>
                <Image src={suppliers} alt="" className="img-responsive" />
              </figure>
              <div className="tileHEading">for Suppliers</div>
              <div className="tiletxt">
                Credore expedites invoice discounting and export factoring,
                ensuring secure, verifiable credentials for swift payments, and
                enabling MSMEs to access global buyers and suppliers through
                GLEIF and ICC-DSI compatibility, even without credit history.
              </div>
            </div>
            <div className="tile">
              <figure>
                <Image src={banks} alt="exprt-img" className="img-responsive" />
              </figure>
              <div className="tileHEading">for Financial Institutions</div>
              <div className="tiletxt">
                Credore&apos;s corporate solution ensures accurate payments and
                cost reduction through efficient deduplication of invoices,
                while also fostering stronger supplier relationships with
                streamlined payment processing and collaboration.
              </div>
            </div>
            <div className="tile">
              <figure>
                <Image
                  src={corporates}
                  alt="exprt-img"
                  className="img-responsive"
                />
              </figure>
              <div className="tileHEading">for Corporates</div>
              <div className="tiletxt">
                By using our next generation Blockchain Technology Platform
                corporates can increase trust, transparency, security,
                traceability of various transactions which helps them reducing
                cost and improve efficiency.
              </div>
            </div>
          </div>
          {/* <div className="btnBx">
            <button type="button" className="btn-primary speak-expert">
              View Details
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Solutions;
