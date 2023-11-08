import React from "react";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
import Link from "next/link";

const ManageCookies = () => {
  // console.log("resetCookieConsentValue(): ", resetCookieConsentValue());
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept!"
      cookieName="cookiesCredore"
      style={{ background: "#889a9b", padding: 10 }}
      // debug="true"
      buttonStyle={{
        color: "#FFFFFF",
        fontSize: "16px",
        fontWeight: 500,
        borderRadius: 5,
        padding: "10px",
        paddingRight: "30px",
        paddingLeft: "30px",
        backgroundColor: "#24554A",
      }}
      declineButtonStyle={{
        color: "#FFFFFF",
        fontSize: "13px",
        // fontSize: "16px",
        fontWeight: 500,
        borderRadius: 5,
        padding: "10px",
        paddingRight: "30px",
        paddingLeft: "30px",
      }}
      expires={150}
      onAccept={(acceptedByScrolling) => {
        getCookieConsentValue();
        // console.log("1. document.cookie: ", document.cookie);
      }}
      enableDeclineButton
      onDecline={() => {
        resetCookieConsentValue();
        // console.log("2. document.cookie: ", document.cookie);
      }}
      // visible="true"
    >
      <h5 className="text-xsm font-normal tab:text-base">This website uses cookies to enhance the user experience. </h5>
      <span
        style={{
          fontSize: "12px",
          marginLeft: "20px",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        Please read our
        <Link href={"/cookies_policy"} style={{}}>
          <a style={{ fontSize: "14px", marginLeft: "3px", color: "#BE3306" }}>
            Cookies Policy
          </a>
        </Link>
      </span>
    </CookieConsent>
  );
};

export default ManageCookies;
