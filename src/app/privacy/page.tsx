export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            Ecolo International collects information when you visit our website, request information, 
            or communicate with us. This may include contact details, company information, and website usage data.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use collected information to provide requested services, improve our website, 
            and communicate with you about our products and services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@ecolo.com" className="text-primary hover:text-primary-dark">
              privacy@ecolo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}