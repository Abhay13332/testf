import React from 'react';
import Card from "@/components/Card.tsx";

interface Product {
    id?: string | number;
    images: string[];
    title: string;
    description: string;
    colors: string[];
    price: number;
    originalPrice?: number;
    logo?: string;
    category?: string;
}

interface ProductGridProps {
    products: Product[];
    onAddToCart?: (product: Product) => void;
    className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
                                                     products,
                                                     onAddToCart,
                                                     className = ""
                                                 }) => {
    const handleAddToCart = (product: Product) => {
        if (onAddToCart) {
            onAddToCart(product);
        }
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ${className}`}>
            {products.map((product, index) => (
                <Card
                    key={product.id || index}

                    images={product.images}
                    title={product.title}
                    description={product.description}
                    colors={product.colors}
                    price={product.price}
                     onAddToCart={() => handleAddToCart(product)}
                    className="hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up flex flex-col justify-around"
                />
            ))}
        </div>
    );
};

export default ProductGrid;