
const FeaturedGrid = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1472352/pexels-photo-1472352.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Semi Pure Poshak',
      title: 'Traditional Red Lehenga'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pure Poshak',
      title: 'Royal Rajasthani Dress'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Regular Suit',
      title: 'Elegant Salwar Suit'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Stitched Poshaks',
      title: 'Designer Poshak Set'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative bottom-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Featured Collections</h2>
          <div className="flex justify-center">
            <div className="flex items-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 rounded-full"></div>
              ))}
              <div className="w-3 h-3 bg-red-600 rounded-full mx-2"></div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1  md:grid-cols-2 md:gap-x-20 lg:grid-cols-4 gap-8 m-5">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-orange-300 text-sm font-medium mb-1">{product.category}</p>
                  <h3 className="text-white font-medium">{product.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;