import Header_control from "@/components/Header_control.tsx";
import {Filtercategory} from "@/pages/filtercategory.tsx";
import {useState} from "react";
import Grid from "@/components/Grid.tsx";
import {data} from "@/lib/data.ts";

export default function Suits(){

    const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
    return (
        <>
            <Header_control/>
            <Filtercategory selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}  />
            <Grid products={data} className=" " />
        </>
    )

}