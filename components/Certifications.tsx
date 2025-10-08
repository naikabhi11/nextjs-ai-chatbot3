export default function Certifications() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Our Certifications</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">ISO 9001:2015</p>
          <p className="text-sm text-gray-600">Quality Management</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">CE Certified</p>
          <p className="text-sm text-gray-600">European Standards</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">UL Listed</p>
          <p className="text-sm text-gray-600">Safety Standards</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="font-semibold">Industry Compliant</p>
          <p className="text-sm text-gray-600">All Regulations</p>
        </div>
      </div>
    </div>
  );
}
