import React from "react";

const WorkInProgress = () => {
  return (
    <section className="section">
      <div className="m-20">
        <h1 className="text-center">
          Opps! We are working on this page, We regret for the inconvenience
        </h1>
      </div>

      <div className="container pb-60 flex justify-center">
        <img
          src="/assets/images/under-construction.png"
          alt="Under Construction"
          width="460"
          height="400"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </section>
  );
};

export default WorkInProgress;