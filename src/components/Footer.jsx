const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20">
        <div className="mb-3 lg:mb-0">
          <p>
            @2024 Vijay Jadhav <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <a className="hover:underline" href="/about">
            About
          </a>
          <a className="hover:underline" href="/">
            Privacy Policy
          </a>
          <a className="hover:underline" href="/">
            Licensing
          </a>
          <a className="hover:underline" href="/">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;