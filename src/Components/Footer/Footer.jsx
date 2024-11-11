

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Gadget Heaven</h2>
        <p className="mt-2 text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">Product Support</li>
              <li className="text-gray-600">Order Tracking</li>
              <li className="text-gray-600">Shipping & Delivery</li>
              <li className="text-gray-600">Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Company</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">About Us</li>
              <li className="text-gray-600">Careers</li>
              <li className="text-gray-600">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">Terms of Service</li>
              <li className="text-gray-600">Privacy Policy</li>
              <li className="text-gray-600">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
