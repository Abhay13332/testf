import React, {useEffect, useRef, useState} from 'react';
import {ShoppingCart, Heart, Scaling} from 'lucide-react';
import ProductModal from "@/components/productmodal.tsx";
import {data2} from "@/lib/data2.ts";

interface ProductCardProps {
    logo?: string;
    images: string[];
    title: string;
    description: string;
    colors: string[];
    price: number;
    onAddToCart?: () => void;
    onclick?: () => void;
    className?: string;
    originalPrice?: number;
}

const  Card: React.FC<ProductCardProps> = ({
                                                     logo = "YourLogo",
                                                     images,
                                                     title,
                                                     description,
                                                     colors,
                                                     price,
                                                     onAddToCart,
                                                     className = "",
                                                     originalPrice, }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDetailsopen, setIsDetailsopen] = useState(false);


 const toggleDetails = () => {
setIsDetailsopen(!isDetailsopen);
 }

    return (<>
            {/*{ isDetailsopen && <div className="absolute  bg-gradient-to-br z-100 w-full m-8 left-1/2 top-1/2 -translate-1/2 border-2 border-red-950">cdrfvtb ghmcrdftvbrymd kftbhfrdtmkcfthb</div>}*/}
            <ProductModal product={data2[0]} isOpen={isDetailsopen} onClose={toggleDetails}  />
        <div  className={`bg-gradient-to-br from-orange-50 to-amber-50 p-6  shadow-lg hover:shadow-xl transition-all duration-300 max-w-[300px] max-h-[600px] mx-auto ${className}`}

        >
            {/* view*/}

            {/* Header */}
            <div className=" absolute z-1 flex justify-between items-center mb-6 w-[250px] top-2 "   >
                <div className="text-gray-600 font-medium text-sm tracking-wide ">
                    <Scaling className={"stroke-gray-400 stroke-2"} onClick={toggleDetails} size={21}/>
                </div>

                   <Heart  onClick={() => setIsLiked(!isLiked)}
                        size={18}
                        className={`transition-colors duration-200 my-4 ${
                            isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'
                        }`}
                    />

            </div>

            {/*/!* Decorative Elements *!/*/}
            {/*<div className="absolute top-8 right-12 opacity-20">*/}
            {/*    <div className="grid grid-cols-3 gap-1">*/}
            {/*        {Array.from({ length: 9 }).map((_, i) => (*/}
            {/*            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="absolute top-20 left-8 opacity-20">*/}
            {/*    <svg width="20" height="10" viewBox="0 0 20 10" className="text-gray-400">*/}
            {/*        <path d="M0 5L5 0L10 5L15 0L20 5" stroke="currentColor" strokeWidth="1" fill="none"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}

            {/* Product Image */}
            <div className="relative mb-6 bg-white/30 rounded-2xl   backdrop-blur-sm text-dark-red">
                <div className="aspect-square flex items-center justify-center">
                    <img
                        src={images[currentImageIndex]}
                        alt={title}
                        className="w-full max-h-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Image Indicators */}
                {images.length > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentImageIndex(index);
                                    setSelectedColor(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentImageIndex
                                        ? 'bg-orange-400 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="space-y-4 text-dark-red">
                <h3 className="text-xl font-bold  leading-tight">
                    {title}
                </h3>

                <p className="  text-sm leading-relaxed">
                    {description}
                </p>

                {/* Color Selection */}
                <div className="flex space-x-3">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedColor(index);
                                setCurrentImageIndex(index);
                            } }
                            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                                index === selectedColor
                                    ? 'border-gray-800 shadow-md'
                                    : 'border-gray-300 hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold pr-2 text-gray-800">
             ₹{price.toFixed(2)}
            </span>

                    </div>

                    <button
                        onClick={onAddToCart}
                        className="  text-gray-700 px-7 py-2.5 rounded-sm font-medium text-[10px] border-2 border-red-950 hover:bg-gray-50/60  0 hover:shadow-md transition-all duration-200 flex items-center space-x-2 group"
                    >
                        <span>ADD TO CART</span>
                        <ShoppingCart
                            size={16}
                            className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                    </button>
                </div>
            </div>
        </div></>
    );
};

export default Card;