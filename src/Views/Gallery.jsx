import Navbar from '../Components/Navbar';
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Masonry from "react-masonry-css"
import { X } from "lucide-react"

const pastEventImages = [
    { id: 1, src: "mait.jpg", alt: "Event 1" },
    { id: 2, src: "mait.jpg", alt: "Event 2" },
    { id: 3, src: "mait.jpg", alt: "Event 3" },
    { id: 4, src: "mait.jpg", alt: "Event 4" },
    { id: 5, src: "mait.jpg", alt: "Event 5" },
    { id: 6, src: "mait.jpg", alt: "Event 6" },
    { id: 7, src: "mait.jpg", alt: "Event 7" },
    { id: 8, src: "mait.jpg", alt: "Event 8" },
    { id: 9, src: "mait.jpg", alt: "Event 9" },
];

export default function Gallery({ setProgress }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [loaded, setLoaded] = useState({})

    useEffect(() => {
        const preloadImages = () => {
            pastEventImages.forEach((image) => {
                const img = new Image()
                img.src = image.src
                img.onload = () => setLoaded((prev) => ({ ...prev, [image.id]: true }))
            })
        }
        preloadImages()
    }, [])

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    }
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 500)
    }, [])
    return (
        <>
            <Navbar />
            <div className="p-4 md:p-8 bg-[#FDFBF7]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5D4037] mb-8 text-center">Past Event Gallery</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto -ml-4"
                    columnClassName="pl-4 bg-clip-padding"
                >
                    {pastEventImages.map((image) => (
                        <motion.div
                            key={image.id}
                            className="mb-4 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: loaded[image.id] ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </Masonry>

                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative max-w-4xl w-full"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <img
                                src={selectedImage.src || "/placeholder.svg"}
                                alt={selectedImage.alt}
                                className="w-full h-auto object-contain rounded-lg"
                            />
                            <button
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedImage(null)
                                }}
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </>
    )
}
