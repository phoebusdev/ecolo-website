import Link from 'next/link';

export default function SitemapPage() {
  const siteStructure = [
    {
      section: 'Main Pages',
      pages: [
        { name: 'Home', url: '/' },
        { name: 'Technology', url: '/technology' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Resources', url: '/resources' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Become a Partner', url: '/distributor' }
      ]
    },
    {
      section: 'Products',
      pages: [
        { name: 'All Products', url: '/products' },
        { name: 'AirSolution', url: '/products/airsolution' },
        { name: 'XStreme', url: '/products/xstreme' },
        { name: 'AirSensory', url: '/products/airsensory' },
        { name: 'BioStreme', url: '/products/biostreme' },
        { name: 'GelTech', url: '/products/geltech' },
        { name: 'Pond-X', url: '/products/pond-x' }
      ]
    },
    {
      section: 'Equipment',
      pages: [
        { name: 'All Equipment', url: '/equipment' },
        { name: 'AMC-5000', url: '/equipment/amc-5000' },
        { name: 'ACU.53', url: '/equipment/acu-53' },
        { name: 'ACU.15', url: '/equipment/acu-15' },
        { name: 'AirPro Mini', url: '/equipment/airpro-mini' },
        { name: 'AirPro Big', url: '/equipment/airpro-big' },
        { name: 'HydroFoamer', url: '/equipment/hydrofoamer' }
      ]
    },
    {
      section: 'Industries',
      pages: [
        { name: 'All Industries', url: '/industries' },
        { name: 'Wastewater Treatment', url: '/industries/wastewater' },
        { name: 'Solid Waste & Landfills', url: '/industries/solid-waste' },
        { name: 'Cannabis Cultivation', url: '/industries/cannabis' },
        { name: 'Hospitality', url: '/industries/hospitality' },
        { name: 'Industrial Processing', url: '/industries/industrial-processing' },
        { name: 'Food & Beverage', url: '/industries/food-beverage' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-6">Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find all pages and resources available on the Ecolo website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteStructure.map((section) => (
            <div key={section.section} className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-heading font-bold text-gray-900 mb-6">
                {section.section}
              </h2>
              <ul className="space-y-3">
                {section.pages.map((page) => (
                  <li key={page.url}>
                    <Link 
                      href={page.url}
                      className="text-primary hover:text-primary-dark transition-colors font-medium"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}