import React from 'react';
import {useTranslation} from "react-i18next";

interface FilterBarProps {
    categories: string[];

    onCategoryToggle: (category: string) => void;
    className?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
                                                 categories,
                                                onCategoryToggle,
                                                 className = ""
                                             }) => {

    const {t}=useTranslation("category");
    return (
        <div className={`relative bottomfilterbar.tsx-[64px] flex flex-wrap gap-2 justify-center mb-8 py-2 ${className}`}>
                        {categories.map((category) => {

                return (
                    <button
                        key={category}
                        onClick={()=>onCategoryToggle(category)}
                        className={`px-4 py-1.5   rounded-md text-[12px] font-medium transition-all duration-200 hover:scale-105 border ${
                             ' bg-[#e66868c4] text-gray-800 border-red-400 shadow-md'
                                
                        }`}
                    >
                        {t(category)}
                    </button>
                );
            })}
        </div>
    );
};

export default FilterBar;