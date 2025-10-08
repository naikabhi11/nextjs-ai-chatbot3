export default function DownloadsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Downloads</h1>
      <p className="text-gray-600 mb-8">Download our product catalogs, specifications, and certifications.</p>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Product Catalog 2024</h3>
            <p className="text-sm text-gray-600">Complete catalog of electrical panel assemblies</p>
          </div>
          <a href="/downloads/catalog-2024.pdf" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Specifications</h3>
            <p className="text-sm text-gray-600">Detailed technical specs and drawings</p>
          </div>
          <a href="/downloads/technical-specs.pdf" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <p className="text-sm text-gray-600">ISO, CE, UL certificates and compliance documents</p>
          </div>
          <a href="/downloads/certifications.pdf" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Download PDF</a>
        </div>
      </div>
    </div>
  );
}
