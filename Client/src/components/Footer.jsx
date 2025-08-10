import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        {/* জরুরি অফিস লিংক */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            জরুরি অফিস লিংক
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                প্রধান অফিস
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                শিক্ষক কক্ষ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                লাইব্রেরি
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                অফিস টেলিফোন
              </a>
            </li>
          </ul>
        </div>

        {/* ঠিকানা */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">ঠিকানা</h3>
          <address className="not-italic space-y-1">
            <p>ঘোড়াশাল পাইলট উচ্চ বিদ্যালয়</p>
            <p>ঘোড়াশাল, নারায়ণগঞ্জ</p>
            <p>বাংলাদেশ</p>
          </address>
        </div>

        {/* যোগাযোগ */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">যোগাযোগ</h3>
          <p>ফোন: +880 1234 567890</p>
          <p>ইমেইল: info@ghorashalhs.edu.bd</p>
          <p>ওয়েবসাইট: www.ghorashalhs.edu.bd</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © ২০২৫ ঘোড়াশাল পাইলট উচ্চ বিদ্যালয়। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
