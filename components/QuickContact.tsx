export default function QuickContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a
        href="tel:+91XXXXXXXXXX"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Call us"
      >
        📞 Call
      </a>
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="WhatsApp"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
