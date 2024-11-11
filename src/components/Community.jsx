import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";

const Community = () => {
  return (
    <div className="text-center container p-3 mx-auto mb-20">
      <div className="flex flex-col items-center text-white rounded-xl p-2">
        <h3 className="text-xl font-semibold py-2">Join Our Community</h3>
        <div className="flex gap-5 justify-center">
          {/* <a
            className="py-1 px-2 rounded-md text-xl"
            href="https://twitter.com/CredoreXYZ"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a> */}
          <a
            className="py-1 px-2 rounded-md text-xl"
            href="https://in.linkedin.com/company/credore"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="py-1 px-2 rounded-md text-xl"
            href="https://www.youtube.com/@Credore-ts2xz"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
