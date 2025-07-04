import ProductCard from '@/components/Card.tsx';

function App() {


    const sampleProducts = [
        {
            images: ['https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400', 'https://images.pexels.com/photos/336372/pexels-photo-436372.jpeg?auto=compress&cs=tinysrgb&w=400'],
            title: 'Elegant Heel',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
            colors: ['#EF4444', '#06B6D4', '#F59E0B'],
            price: 45.00,
            originalPrice: 65.00
        },
        {
            images: ['https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400'],
            title: 'Sport Watch',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
            colors: ['#EF4444', '#06B6D4', '#F59E0B'],
            price: 75.00
        },
        {
            images: ['https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400'],
            title: 'Casual Sneaker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
            colors: ['#1F2937', '#FFFFFF', '#EF4444'],
            price: 89.00,
            originalPrice: 120.00
        }
    ];

    const handleAddToCart = (productTitle: string) => {
        console.log(`Added ${productTitle} to cart`);
    };

    // const handleAddToCart = (product: any, selectedColor: number, selectedSize?: string) => {
    //     console.log('Added to cart:', {
    //         product: product.title,
    //         color: product.colorNames[selectedColor],
    //         size: selectedSize,
    //     });}


        return (
            <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                            Featured Products
                        </h1>
                        <p className="text-white/90 text-lg">
                            Discover our curated collection of premium items
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sampleProducts.map((product, index) => (
                            <ProductCard
                                key={index}

                                images={product.images}
                                title={product.title}
                                description={product.description}
                                colors={product.colors}
                                price={product.price}
                                // onAddToCart={() => handleAddToCart(product.title)}

                                className="hover:-translate-y-2 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

        );

}
    export default App;