import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface LanguagePopupProps {
    onLanguageSelect: (language: 'en' | 'hi') => void;
}

const LanguagePopup: React.FC<LanguagePopupProps> = ({ onLanguageSelect }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if language preference is already stored
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (!savedLanguage) {
            // Show popup after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleLanguageSelect = (language: 'en' | 'hi') => {
        localStorage.setItem('preferredLanguage', language);
        setIsVisible(false);
        onLanguageSelect(language);
    };

    const handleClose = () => {
        // Default to English if user closes without selecting
        handleLanguageSelect('en');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full mx-4 overflow-hidden transform transition-all duration-300 scale-100">
                {/* Header with warm gradient background */}
                <div
                    className="px-6 py-8 relative text-center"
                    style={{
                        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)'
                    }}
                >
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-white hover:text-orange-200 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <h2 className="text-2xl font-bold text-white mb-2">Choose Language</h2>
                    <div className="flex justify-center space-x-1 mb-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-orange-100 text-sm">भाषा चुनें</p>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-600 text-center mb-6 leading-relaxed">
                        Select your preferred language to continue browsing our collection
                    </p>

                    {/* Language Options */}
                    <div className="space-y-3">
                        <button
                            onClick={() => handleLanguageSelect('en')}
                            className="w-full border border-gray-200 hover:border-orange-400 rounded-lg p-4 transition-all duration-300 group hover:shadow-md"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-900 text-lg">English</h3>
                                    <p className="text-sm text-gray-500">Continue in English</p>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => handleLanguageSelect('hi')}
                            className="w-full border border-gray-200 hover:border-orange-400 rounded-lg p-4 transition-all duration-300 group hover:shadow-md"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <div className="text-left">
                                    <h3 className="font-semibold text-gray-900 text-lg">हिंदी</h3>
                                    <p className="text-sm text-gray-500">हिंदी में जारी रखें</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Footer with decorative dots */}
                    <div className="mt-6 pt-4 text-center">
                        <div className="flex justify-center space-x-1 mb-3">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        </div>
                        <p className="text-xs text-gray-400">
                            You can change this later in settings
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguagePopup;