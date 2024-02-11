const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Footer Links Section 1 */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="list-none">
            <li>
              <a href="#order-now">Order Now</a>
            </li>
            <li>
              <a href="#deals">Deals</a>
            </li>
            <li>
              <a href="#pizza">Pizza</a>
            </li>
            <li>
              <a href="#sides">Sides</a>
            </li>
            <li>
              <a href="#drinks">Drinks</a>
            </li>
            <li>
              <a href="#desserts">Desserts</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        {/* Footer Links Section 2 */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="list-none">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contactless-delivery">Contactless Delivery</a>
            </li>
            <li>
              <a href="#nutrition">Nutrition</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
          </ul>
        </div>

        {/* Footer Links Section 3 */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Our Policies</h3>
          <ul className="list-none">
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#terms-conditions">Terms & Conditions</a>
            </li>
            <li>
              <a href="#responsible-disclosure">Responsible Disclosure</a>
            </li>
          </ul>
        </div>

        {/* Footer Social Media Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          {/* Add social media icons or links here */}
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Pizza Delivery App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
