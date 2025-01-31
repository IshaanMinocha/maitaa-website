import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const events = [
    {
        id: 1,
        title: "Smriti 2025",
        date: "2025-02-22",
        description:
            "Join us for a day of cutting-edge technology talks and networking opportunities with industry leaders.",
        image: "/mait.jpg",
    },
    {
        id: 2,
        title: "Smriti 2023",
        date: "2023-02-22",
        description:
            "Join us for a day of cutting-edge technology talks and networking opportunities with industry leaders.",
        image: "/mait.jpg",
    }
]

const EventCard = ({ event, index }) => {
    const navigate = useNavigate()
    const isEven = index % 2 === 0

    return (
        <motion.div
            className="flex flex-col md:flex-row items-center mb-12 md:mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={`w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}>
                <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className={`w-full md:w-1/2 mt-6 md:mt-0 ${isEven ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"}`}>
                <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                    {event.title}
                </motion.h3>
                <motion.p
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                    {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </motion.p>
                <motion.p
                    className="text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                    {event.description}
                </motion.p>
                <motion.button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { navigate(`/gallery`) }}
                >
                    View in Gallery
                </motion.button>
            </div>
        </motion.div>
    )
}

const SocietyEvents = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Latest Events</h2>
                <div className="space-y-12 md:space-y-24">
                    {events.map((event, index) => (
                        <EventCard key={event.id} event={event} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SocietyEvents

