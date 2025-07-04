import {Product} from "@/components/productmodal.tsx";

export const data2:Product[]  = [
    {
        id: "prod-001",
        logo: "https://example.com/logos/nike.png",
        images: [

            "https://via.assets.so/game.jpg?w=200&h=300&id=1",
            "https://via.assets.so/game.jpg?w=200&h=300&id=12"
        ],
        title: "Nike Air Zoom Pegasus",
        description: "Everyday road running shoes.",
        detailedDescription: "Built for daily training with responsive cushioning and durable construction. Ideal for runners seeking comfort and support.",
        colors: ["#000000", "#FFFFFF"],
        colorNames: ["Black", "White"],
        price: 120.0,
        originalPrice: 150.0,
        rating: 4.7,
        reviewCount: 582,
        sizes: ["8", "9", "10", "11"],
        specifications: {
            Material: "Engineered Mesh",
            Weight: "0.85 lbs",
            Drop: "10mm"
        },
        features: ["Zoom Air unit", "Flywire cables", "Cushlon foam"],
        inStock: true
    },
    {
        id: "prod-002",
        logo: "https://example.com/logos/adidas.png",
        images: [
            "https://example.com/images/shoe2a.jpg",
            "https://example.com/images/shoe2b.jpg"
        ],
        title: "Adidas Ultraboost 22",
        description: "Responsive running shoes.",
        detailedDescription: "Delivers high energy return and comfort. Designed for urban athletes looking for cushioning and speed.",
        colors: ["#123456", "#abcdef"],
        colorNames: ["Navy", "Sky Blue"],
        price: 140.0,
        originalPrice: 180.0,
        rating: 4.6,
        reviewCount: 413,
        sizes: ["7", "8", "9", "10", "11"],
        specifications: {
            Material: "Primeknit+ textile",
            Weight: "0.95 lbs",
            Drop: "10mm"
        },
        features: ["Boost midsole", "Sock-like fit", "Continental™ Rubber outsole"],
        inStock: true
    },
    {
        id: "prod-003",
        images: ["https://example.com/images/watch1.jpg"],
        title: "Smart Fitness Watch",
        description: "Track your fitness in style.",
        detailedDescription: "Monitors heart rate, sleep, and steps. Water-resistant and compatible with iOS/Android.",
        colors: ["#000000", "#FFD700"],
        colorNames: ["Black", "Gold"],
        price: 69.99,
        rating: 4.2,
        reviewCount: 321,
        specifications: {
            BatteryLife: "7 days",
            Waterproof: "IP68",
            Display: "1.3-inch AMOLED"
        },
        features: ["Sleep tracking", "Heart-rate monitor", "Custom watch faces"],
        inStock: false
    },
    {
        id: "prod-004",
        images: ["https://example.com/images/backpack1.jpg"],
        title: "Mountain Trail Backpack",
        description: "Perfect for hiking adventures.",
        detailedDescription: "Durable, weather-resistant material. Ergonomic straps and multiple compartments.",
        colors: ["#228B22", "#808080"],
        colorNames: ["Forest Green", "Gray"],
        price: 89.5,
        originalPrice: 99.0,
        rating: 4.8,
        reviewCount: 117,
        specifications: {
            Capacity: "35L",
            Material: "Nylon",
            Weight: "1.5 lbs"
        },
        features: ["Hydration sleeve", "Rain cover", "Adjustable hip belt"],
        inStock: true
    },
    {
        id: "prod-005",
        images: ["https://example.com/images/headphones1.jpg"],
        title: "Wireless Noise-Canceling Headphones",
        description: "Crystal-clear audio with noise cancellation.",
        detailedDescription: "Enjoy immersive sound quality with active noise canceling and up to 30 hours battery life.",
        colors: ["#000000"],
        colorNames: ["Matte Black"],
        price: 199.99,
        rating: 4.9,
        reviewCount: 876,
        specifications: {
            Battery: "30 hours",
            Bluetooth: "v5.2",
            Weight: "0.6 lbs"
        },
        features: ["Touch controls", "Foldable design", "Voice assistant compatible"],
        inStock: true
    },
    {
        id: "prod-006",
        images: ["https://example.com/images/jacket1.jpg"],
        title: "Winter Down Jacket",
        description: "Stay warm and stylish.",
        detailedDescription: "Insulated with natural down, waterproof shell and removable hood. Ideal for cold climates.",
        colors: ["#A52A2A", "#FFFFFF"],
        colorNames: ["Burgundy", "White"],
        price: 129.99,
        rating: 4.4,
        reviewCount: 203,
        sizes: ["S", "M", "L", "XL"],
        specifications: {
            Material: "Down & Polyester",
            Weight: "2.2 lbs",
            Waterproof: "Yes"
        },
        features: ["Windproof", "Removable hood", "Inner fleece lining"],
        inStock: false
    },
    {
        id: "prod-007",
        images: ["https://example.com/images/laptop1.jpg"],
        title: "Ultrabook Pro 14",
        description: "Portable power for professionals.",
        detailedDescription: "14-inch high-res screen, Intel i7, 16GB RAM, and 512GB SSD. Lightweight and durable build.",
        colors: ["#D3D3D3"],
        colorNames: ["Silver"],
        price: 999.0,
        originalPrice: 1199.0,
        rating: 4.6,
        reviewCount: 151,
        specifications: {
            Processor: "Intel Core i7",
            RAM: "16GB",
            Storage: "512GB SSD"
        },
        features: ["Backlit keyboard", "Touchscreen", "Fingerprint reader"],
        inStock: true
    },
    {
        id: "prod-008",
        images: ["https://example.com/images/bottle1.jpg"],
        title: "Insulated Water Bottle",
        description: "Keeps drinks hot or cold for hours.",
        detailedDescription: "Double-wall vacuum insulation with stainless steel interior. Leakproof and BPA-free.",
        colors: ["#0000FF", "#FF1493"],
        colorNames: ["Blue", "Pink"],
        price: 24.99,
        rating: 4.3,
        reviewCount: 87,
        specifications: {
            Capacity: "750ml",
            Material: "Stainless Steel",
            Insulation: "12hr hot, 24hr cold"
        },
        features: ["Leakproof lid", "Sweat-free coating", "Fits car cup holders"],
        inStock: true
    },
    {
        id: "prod-009",
        images: ["https://example.com/images/keyboard1.jpg"],
        title: "Mechanical Gaming Keyboard",
        description: "RGB backlit and fully programmable.",
        detailedDescription: "Tactile mechanical switches, customizable lighting, anti-ghosting features for serious gamers.",
        colors: ["#FFFFFF", "#000000"],
        colorNames: ["White", "Black"],
        price: 79.95,
        rating: 4.7,
        reviewCount: 256,
        specifications: {
            SwitchType: "Blue",
            KeyRollover: "Full N-key",
            Cable: "Detachable USB-C"
        },
        features: ["RGB Lighting", "Macro support", "Wrist rest included"],
        inStock: true
    },
    {
        id: "prod-010",
        images: ["https://example.com/images/camera1.jpg"],
        title: "Mirrorless Digital Camera",
        description: "Capture stunning photos and 4K video.",
        detailedDescription: "24MP sensor, fast autofocus, and interchangeable lenses. Compact and powerful for travel or pro work.",
        colors: ["#333333"],
        colorNames: ["Graphite"],
        price: 649.0,
        rating: 4.5,
        reviewCount: 192,
        specifications: {
            Sensor: "APS-C 24MP",
            Video: "4K/30fps",
            Connectivity: "Wi-Fi, Bluetooth"
        },
        features: ["Articulating screen", "Dual dials", "Hot shoe mount"],
        inStock: false
    }
];
