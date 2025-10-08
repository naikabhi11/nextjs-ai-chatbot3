export default function TestimonialsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
      <p className="text-gray-600 mb-8">Read what our clients say about our electrical panel assembly services.</p>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">"Excellent quality control panels and professional service. Highly recommended!"</p>
          <p className="text-sm text-gray-500">- Client Name, Company ABC</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">"Timely delivery and exceptional workmanship on our industrial project."</p>
          <p className="text-sm text-gray-500">- Client Name, Company XYZ</p>
        </div>
      </div>
    </div>
  );
}
