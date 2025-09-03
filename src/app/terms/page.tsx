export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Terms of Use</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using the Ecolo International website, you accept and agree to be bound 
            by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Product Information</h2>
          <p className="text-gray-600 mb-4">
            All product information, specifications, and documentation provided on this website 
            are for informational purposes and subject to change without notice.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            For questions about these terms, please contact us at{' '}
            <a href="mailto:legal@ecolo.com" className="text-primary hover:text-primary-dark">
              legal@ecolo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}