export default function AboutUsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
        <p className="text-gray-600">Leading provider of electrical panel assembly and control solutions for industrial applications.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mission & Values</h2>
        <p className="text-gray-600">Committed to quality, safety, and customer satisfaction in every project.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <p className="text-gray-600">ISO certified with industry-standard quality management systems.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-600">Experienced engineers and technicians dedicated to excellence.</p>
      </section>
    </div>
  );
}
