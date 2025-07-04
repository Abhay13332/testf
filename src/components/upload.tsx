import React, { useRef, useState } from "react";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import {useTranslation} from "react-i18next";
import {default as axios} from "axios";
import Specificationbar from "@/components/specificationbar.tsx";
import {Button} from "@/components/ui/button.tsx";
import imageCompression from "browser-image-compression"; //

export default function UploadForm() {
    const [images, setImages] = useState<File[]>([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [previews, setPreviews] = useState<string[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const [currentspec, setCurrentspec] = useState<string>();
    const  [selectedspecs, setSelectedspec] = useState<string[]>([]);
    const dref=useRef(null);
    const {t,} = useTranslation("upload");
    const t2 =useTranslation("category").t;
    const addspec=(spec:string)=>{
        setSelectedspec(specs=>[...specs,spec]);
    }
    const removespec=(spec:string)=>{
        setSelectedspec(specs=>
            specs.filter(specg=>specg!==spec)
        )
    }
    const MAX_FILE_SIZE = 100 * 1024 * 1024; // 50MB per file
    const MAX_FILES = 20; // Maximum 10 images
    console.log(t("g"));
    const validateFile = (file: File): boolean => {
        if (!file.type.startsWith('image/')) {
            alert(`${file.name} is not an image file`);
            return false;
        }
        if (file.size > MAX_FILE_SIZE) {
            alert(`${file.name} is too large. Maximum size is 50MB`);
            return false;
        }
        return true;
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        addFiles(files);
    };

    const addFiles = (newFiles: File[]) => {
        const validFiles = newFiles.filter(validateFile);

        if (images.length + validFiles.length > MAX_FILES) {
            alert(`You can only upload up to ${MAX_FILES} images`);
            return;
        }

        const updatedImages = [...images, ...validFiles];
        const newPreviews = validFiles.map(file => URL.createObjectURL(file));
        const updatedPreviews = [...previews, ...newPreviews];

        setImages(updatedImages);
        setPreviews(updatedPreviews);
    };

    const removeImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);

        // Clean up object URL to prevent memory leaks
        URL.revokeObjectURL(previews[index]);

        setImages(updatedImages);
        setPreviews(updatedPreviews);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        addFiles(files);
    };

    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();

        if (images.length === 0 || !description || !type || !price || !title) {
            alert("Please fill all fields and upload at least one image");
            return;
        }
        dref.current.style.display="block";

        const formData = new FormData();
 
const options={
          maxSizeMB: 2, // Aim for a maximum file size of 2MB
      maxWidthOrHeight: 1920, // Limit dimensions to 1920px
      useWebWorker: true,

}
        // Append all images
        for await(const img of images){
            let compimg=await imageCompression(img,options);

            formData.append(`images`, compimg);
        }
       
   
        selectedspecs.forEach((spec) => {
            formData.append(`specs`, spec);
        })
        formData.append("title", title);
        formData.append("description", description);
        formData.append("type", type);
        formData.append("price", price);
        formData.append("imageCount", images.length.toString());
     
       await     axios.post("https://test-7ijo.onrender.com//upload", formData).then((res) => {
              return res
            }).catch(console.error).then(console.log).catch(console.error);
         dref.current.style.display="none";
        // Send this formData to your backend using fetch/axios
        console.log("Images Uploaded:", images.length);

        // Reset
        setImages([]);
        setDescription("");
        setType("");
        setPrice("");
        setTitle("");
        setCurrentspec("");

        // Clean up all object URLs
        previews.forEach(preview => URL.revokeObjectURL(preview));
        setPreviews([]);

    };

    return (<>
        <div className="w-[100vw] h-[100vh] z-200 bg-amber-200 fixed hidden" style={{display:"none"}} ref={dref}><img src="img/loading.gif"/> </div>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">

            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{t("title")}</h1>
                    <p className="text-gray-600">{ t("subtitle")}</p>
                </div>

                <form onSubmit={handleSubmit} encType={"multipart/form-data"}
                      className="bg-white rounded-2xl shadow-2xl p-8 space-y-8">
                    {/* Description Section */}
                    <div className="space-y-3">
                        <label className="block text-lg font-semibold text-gray-700">
                            {t("product name")}
                        </label>
                        <textarea
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
                            rows={1}
                            placeholder="vastra ka naam"
                        />
                    </div>
                    {/* Image Upload Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="block text-lg font-semibold text-gray-700">
                                {t("Product Image")}({images.length}/{MAX_FILES})
                            </label>
                            {images.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        previews.forEach(preview => URL.revokeObjectURL(preview));
                                        setImages([]);
                                        setPreviews([]);
                                    }}
                                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                                >
                                    Clear All
                                </button>
                            )}
                        </div>

                        <div
                            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                                isDragOver
                                    ? 'border-blue-500 bg-blue-50'
                                    : images.length > 0
                                        ? 'border-green-400 bg-green-50'
                                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />

                            <div className="space-y-4">
                                <div
                                    className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Upload className="w-8 h-8 text-blue-500"/>
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-gray-700">
                                        {images.length > 0 ? 'Add more images' : 'Drop your images here'}
                                    </p>
                                    <p className="text-gray-500">or click to browse</p>
                                </div>
                                <p className="text-sm text-gray-400">
                                    PNG, JPG, GIF up to 50MB each • Maximum {MAX_FILES} images
                                </p>
                            </div>
                        </div>

                        {/* Image Previews */}
                        {previews.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                                {previews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-32 object-cover rounded-lg shadow-md"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                                        >
                                            <X className="w-4 h-4"/>
                                        </button>
                                        <div
                                            className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                            {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description Section */}
                    <div className="space-y-3">
                        <label className="block text-lg font-semibold text-gray-700">
                            {t("Description")}
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
                            rows={4}
                            placeholder="Tell us about your product... What makes it special?"
                        />
                    </div>
                    {/*spec*/}

                    <div className="space-y-2 ">
                        <label className=" text-lg font-semibold text-gray-700">
                            {t("spec")}
                        </label>
                   <div className={"flex "}>     <textarea
                            value={currentspec}
                            onChange={(e) => setCurrentspec(e.target.value)}
                            className="w-full p-4 m-2 my-6 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
                            rows={1}
                            placeholder="spec"
                        />
                        <Button

                           
                            onClick={(e)=> {
                                e.preventDefault();
                               return currentspec ? addspec(currentspec) : ""
                            }}
                            className="w-2/8 m-2 my-5 p-4 h-full border-2 text-lg text-white border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
                          
                         >+</Button></div>

                        <Specificationbar onCategoryToggle={removespec} categories={selectedspecs}/>
                    </div>
                    {/* Type and Price Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Type Section */}
                        <div className="space-y-3">
                            <label className="block text-lg font-semibold text-gray-700">
                                {t("Product Type")}
                            </label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white"
                            >
                                <option value="">{t("Choose a category")}</option>
                                <option value="Pure Poshak">{t2("Pure Poshak")}</option>
                                <option value="Zero Pure Poshak">{t2("Zero Pure Poshak")}</option>
                                <option value="Half Pure Poshak">{t2("Half Pure Poshak")}</option>
                                <option value="Astar Poshak">{t2("Astar Poshak")}</option>
                                <option value="Satan Suit">{t2("Satan Suit")}</option>
                                <option value="Cotton Suit">{t2("Cotton Suit")}</option>
                                <option value="Jod">{t2("Jod")}</option>
                                <option value="Odhni">{t2("Odhni")}</option>
                                <option value="Printed">{t2("Printed")}</option>
                            </select>
                        </div>

                        {/* Price Section */}
                        <div className="space-y-3">
                            <label className="block text-lg font-semibold text-gray-700">
                                {t("Price")}
                            </label>
                            <div className="relative">
                                <span
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₹</span>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                                    placeholder="0.00"
                                    min="0"
                                    step="0.01"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <span className="flex items-center justify-center space-x-2">
                                <ImageIcon className="w-5 h-5"/>
                                <span>
                                    {t("Upload Product")} {images.length > 0 && `(${images.length} image${images.length > 1 ? 's' : ''})`}
                                </span>
                            </span>
                        </button>
                    </div>
                </form>


            </div>
        </div>
        </>
    );
}