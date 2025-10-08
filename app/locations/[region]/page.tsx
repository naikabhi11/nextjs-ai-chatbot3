export default function LocationPage({ params }: { params: { region: string } }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Service Area: {params.region}</h1>
      <p className="text-gray-600 mb-4">We provide professional electrical panel assembly services in {params.region}.</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Local Expertise</h2>
        <p className="text-gray-600">Expert electrical panel solutions tailored to your region.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600">Get in touch for a free quote in your area.</p>
      </section>
    </div>
  );
}
