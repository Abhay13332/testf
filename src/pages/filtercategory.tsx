import {SetStateAction, useState,Dispatch} from "react";
import FilterBar from "@/components/filterbar.tsx";
import Card from "@/components/Card.tsx";
import Grid from "@/components/Grid.tsx";
import {data} from "@/lib/data.ts";

export function Filtercategory({selectedCategories,setSelectedCategories}: {selectedCategories:string[],setSelectedCategories: Dispatch<SetStateAction<string[]>>}) {


    const categories = [
        'All',
        'Pure Poshak',
        'Zero Pure Poshak',
        'Half Pure Poshak',
        'Astar Poshak',
        'Satan Suit',
        'Cotton Suit',
        'Jod',

    ];


    const handleCategoryToggle = (category: string) => {
        if (category === 'All') {
            // If "All" is clicked, clear other selections and select only "All"
            setSelectedCategories(['All']);
        } else {
            setSelectedCategories(prev => {
                // Remove "All" if it's selected and we're selecting a specific category
                const withoutAll = prev.filter(cat => cat !== 'All');

                if (prev.includes(category)) {
                    // Remove the category if it's already selected
                    const newSelection = withoutAll.filter(cat => cat !== category);
                    // If no categories are selected, default to "All"
                    return newSelection.length === 0 ? ['All'] : newSelection;
                } else {
                    // Add the category
                    return [...withoutAll, category];
                }
            });
        }
    };

return   <>  <FilterBar
    categories={categories}
    selectedCategories={selectedCategories}
    onCategoryToggle={handleCategoryToggle}
/>

    </>

}