import HeroSection from './components/HeroSection';
import FeaturedGrid from './components/featuredGrid.tsx';
import Footer from './components/Footer';
import {Separator} from "@/components/ui/separator.tsx";
import ProductSlider from "@/components/Card.tsx";
import Header_control from "@/components/Header_control.tsx";
import LanguagePopup from "@/components/langpopup.tsx";
import { useLayoutEffect} from "react";
 import i18n from "./lib/i18n/translation.ts"
import {useTranslation} from "react-i18next";
 import UploadForm from "@/components/upload.tsx";
import {Route, Routes} from "react-router";
import Home from "@/pages/Home.tsx";
import Jod from "@/pages/jod.tsx";
import Printed from "@/pages/printed.tsx";
import Odhni from "@/pages/odhni.tsx";
import Suits from "@/pages/suits.tsx";
import ProductCard from "@/components/ProductCard.tsx"; 
 import i18 from "@/lib/i18n/translation"

function App() {
   i18.changeLanguage("hi");

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/home"} element={<Home/>}></Route>
            <Route path={"/odhni"} element={<Odhni/>}></Route>
            <Route path={"/suits"} element={<Suits/>}></Route>
            <Route path={"/printed"} element={<Printed/>}></Route>
            <Route path={"/jod"} element={<Jod/>}></Route>
            {/*<Route path={"/selected:params"} element={<Details/>}*/}
            <Route path={"/productcard"} element={<ProductCard/>}></Route>
            <Route path={"/upload"} element={<UploadForm/>}></Route>
            {/*<Route path={"/filterbar"} element={  <Filtercategory/>}></Route>*/}

        </Routes>
    )
}
//
//     const handleLanguageSelect =async (language: 'en' | 'hi') => {
//
//        await  i18n.changeLanguage(language);
//         return "";
//     };
//     const tr=useTranslation();
//
//     const lang=tr.i18n.language  ;
//     localStorage.clear();
// console.log(lang);
// useLayoutEffect(()=>{
// if( lang!="en-US" ){
//     handleLanguageSelect("hi");
// console.log(lang);
// }
//     },[lang,handleLanguageSelect,tr])

//   return (
//     <div className="min-h-screen">
//
//
//             {/*<LanguagePopup onLanguageSelect={handleLanguageSelect} />*/}
//         <Header_control/>
//       {/*  <Separator />*/}
//
//       {/*<HeroSection />*/}
//       {/*<FeaturedGrid />*/}
//       {/*  <ProductSlider/>*/}
// {/*<UploadForm />*/}
//       {/*<Footer />*/}
//     </div>
//   );

// }

export default App;

