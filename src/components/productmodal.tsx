import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, Shield, Truck, RotateCcw, Award } from 'lucide-react';

export interface Product {
    id: string;
    logo?: string;
    images: string[];
    title: string;
    description: string;
    detailedDescription: string;
    colors: string[];
    colorNames: string[];
    price: number;
    originalPrice?: number;
    rating: number;

    reviewCount: number;
    sizes?: string[];
    specifications: { [key: string]: string };
    features: string[];
    inStock: boolean;
 }

interface ProductModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart?: (product: Product, selectedColor: number, ) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
     const [isLiked, setIsLiked] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const handleAddToCart = () => {
        onAddToCart?.(product, selectedColor);
    };

    return (
        <div className="fixed  inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl  shadow-2xl max-w-6xl w-full max-h-[95vh] max-lg:overflow-y-scroll">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200"
                >
                    <X size={20} className="text-gray-600" />
                </button>

                <div className="flex flex-col lg:flex-row h-full max-h-[95dvh]   ">
                    {/* Image Section */}
                    <div className="lg:w-1/2   bg-gradient-to-br from-orange-50 to-amber-50 p-8  max-lg:static lg:overflow-hidden  lg:rounded-l-2xl   ">
                        {/* Like Button */}
                        <button
                            onClick={() => setIsLiked(!isLiked)}
                            className="absolute top-4 left-4 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200"
                        >
                            <Heart
                                size={20}
                                className={`transition-colors duration-200 ${
                                    isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'
                                }`}
                            />
                        </button>

                        {/* Main Image */}
                        <div className="relative aspect-square bg-white/30 rounded-2xl backdrop-blur-sm mb-6  overflow-hidden">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.title}
                                className="w-full h-full object-contain p-8"
                            />

                            {/* Navigation Arrows */}
                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200"
                                    >
                                        <ChevronLeft size={20} className="text-gray-600" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200"
                                    >
                                        <ChevronRight size={20} className="text-gray-600" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        <div className=" space-x-3 justify-center overflow-x-auto hidden lg:flex">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                                        index === currentImageIndex
                                            ? 'border-orange-400 shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.title} ${index + 1}`}
                                        className="w-full h-full object-contain bg-white/50"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="lg:w-1/2 p-8 ">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="text-sm text-gray-500 mb-2">{product.logo}</div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

                            {/* Rating */}
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${
                                                i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                    {product.rating} ({product.reviewCount} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-3xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
                                )}
                                {product.originalPrice && (
                                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Color</h3>
                            <div className="flex space-x-3">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setSelectedColor(index);
                                            setCurrentImageIndex(index);
                                        }}
                                        className={`relative w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                                            index === selectedColor
                                                ? 'border-gray-800 shadow-lg ring-2 ring-orange-200'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                        style={{ backgroundColor: color }}
                                        title={product.colorNames[index]}
                                    >
                                        {index === selectedColor && (
                                            <div className="absolute inset-0 rounded-full border-2 border-white" />
                                        )}
                                    </button>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{product.colorNames[selectedColor]}</p>
                        </div>



                        {/* Quantity */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center font-semibold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={!product.inStock}
                            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 mb-6 ${
                                product.inStock
                                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <ShoppingCart size={20} />
                            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                        </button>

                        {/* Features */}
                        <div className="mb-8">
                            <div className="grid grid-cols-2 gap-4">

                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Award size={16} />
                                    <span>Premium Quality</span>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-6">
                            <div className="flex space-x-8">
                                {['description', 'specifications', 'features'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`py-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
                                            activeTab === tab
                                                ? 'border-gray-800 text-gray-800'
                                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="space-y-4">
                            {activeTab === 'description' && (
                                <div>
                                    <p className="text-gray-700 leading-relaxed">{product.detailedDescription}</p>
                                </div>
                            )}

                            {activeTab === 'specifications' && (
                                <div className="space-y-3">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-600 font-medium">{key}</span>
                                            <span className="text-gray-900">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'features' && (
                                <div className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-2">
                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;