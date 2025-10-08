export default function GalleryPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <p className="text-gray-600 mb-8">View our completed electrical panel assembly projects and installations.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Project Image 1</p>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Project Image 2</p>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Project Image 3</p>
        </div>
      </div>
    </div>
  );
}
