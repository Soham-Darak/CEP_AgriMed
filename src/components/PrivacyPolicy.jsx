const PrivacyPolicy = () => {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-green-900">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Privacy Policy</h1>
        <p className="mb-4 text-green-800">
          At AgriMed, your privacy is important to us. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to safeguard it.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc ml-6 text-green-800">
          <li>Contact Numebr (for communication)</li>
          <li>User preferences and crop search history (to improve recommendations)</li>
          <li>Feedback via contact us (for optimizing experience)</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-green-800">
          <li>To provide accurate fertilizer recommendations based on crop diseases</li>
          <li>To enhance the user experience by customizing the content</li>
          <li>To communicate updates and offers relevant to agriculture</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Data Protection</h2>
        <p className="mb-4 text-green-800">
          We implement a variety of security measures to maintain the safety of your personal information. All sensitive data is transmitted via secure technology and stored in encrypted databases.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Disclosure</h2>
        <p className="mb-4 text-green-800">
          We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
        <p className="mb-4 text-green-800">
          This Privacy Policy may be updated periodically. We encourage users to check this page for any changes.
        </p>
        <p className="text-green-800">Last updated: April 2025</p>
      </div>
    );
  };
  
  export default PrivacyPolicy;