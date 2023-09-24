import React from "react";
import contentData from "../../content.json";

const Footer = () => {
  const general = contentData.general;

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                {contentData.footer.line_one}{" "}
                <a href="https://github.com/KevinTrinh1227">
                  <strong>
                    {general.first_name} {general.middle_name}{" "}
                    {general.last_name}
                  </strong>
                </a>
                .
              </p>
              <div className="credits">
                {contentData.footer.copyright_line} &copy;
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
