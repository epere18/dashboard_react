import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Chart from "./Chart";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <ContentRowTop />
        <Chart />
        <Footer />
      </div>
    </div>
  );
}

export default ContentWrapper;
