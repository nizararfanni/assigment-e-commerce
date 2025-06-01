import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Ambil tahun dari waktu sekarang

  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              &copy; {currentYear} My Website. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
