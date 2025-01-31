import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const scheduleData = [
    { time: "10:00 AM", event: "REGISTRATION DESK" },
    { time: "10:25 AM", event: "WELCOME OF ALUMNI WITH HIGH TEA AND NETWORKING" },
    // { time: "10:30 AM", event: "HIGH TEA AND NETWORKING" },
    { time: "11:30 AM", event: "LAMP LIGHTING" },
    { time: "11:35 AM", event: "ADDRESS BY MANAGEMENT" },
    { time: "11:45 AM", event: "SHOWCASING 25 YEARS OF MATES VIDEO, ALUMNI TALK" },
    { time: "12:00 PM", event: "RELEASE OF ANNUAL NEWSLETTER MAIT SMRITI 2025" },
    { time: "12:05 PM", event: "OPENING OF STARTUP FAIR" },
    { time: "12:10 PM", event: "DISTINGUISHED ALUMNI FELICITATION" },
    { time: "12:20 PM", event: "ABHINANDAN FELICITATION" },
    { time: "12:40 PM", event: "VOTE OF THANKS BY DIRECTOR MAIT, PROF. NEELAM SHARMA" },
    { time: "12:45 PM", event: "GROUP PHOTO" },
    {
        time: "1:30 PM",
        event: "NETWORKING LUNCH WITH EVENTS",
        isLongContent: true,
        subEvents: [
            "CULTURAL PERFORMANCES",
            "DISTRIBUTION OF SMRITI NEWSLETTER, COLLEGE BROCHURE AND 25TH YEARS MAGAZINE, SOUVENIR",
        ],
    },
    { time: "4:00 PM", event: "HIGH TEA" },
]

export default function Smriti25Timeline() {
    const [expandedItems, setExpandedItems] = useState(new Set())
    const [showAll, setShowAll] = useState(false)
    const visibleItems = showAll ? scheduleData : scheduleData.slice(0, 5)

    const toggleItem = (index) => {
        const newSet = new Set(expandedItems)
        if (expandedItems.has(index)) {
            newSet.delete(index)
        } else {
            newSet.add(index)
        }
        setExpandedItems(newSet)
    }

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5D4037] mb-8 text-center">Event Schedule</h2>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[15px] md:left-[120px] top-0 bottom-0 w-0.5 bg-[#8D6E63]" />

                <motion.div
                    className="space-y-6"
                    layout
                    transition={{
                        layout: { duration: 0.3 },
                    }}
                >
                    <AnimatePresence mode="wait">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                layout
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[12px] md:left-[117px] w-2 h-2 rounded-full bg-[#5D4037] mt-2.5" />

                                <div className="ml-8 md:ml-36 relative">
                                    <motion.div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-6" layout>
                                        <time className="text-[#8D6E63] font-medium min-w-[100px] pt-2">{item.time}</time>
                                        <motion.div
                                            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-1"
                                            layout
                                        >
                                            <p className="text-[#5D4037] font-medium">{item.event}</p>

                                            {item.isLongContent && item.subEvents && (
                                                <>
                                                    <AnimatePresence mode="wait">
                                                        {expandedItems.has(index) && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="mt-2"
                                                            >
                                                                <ul className="list-disc ml-4 text-[#8D6E63] space-y-1">
                                                                    {item.subEvents.map((subEvent, subIndex) => (
                                                                        <li key={subIndex}>{subEvent}</li>
                                                                    ))}
                                                                </ul>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>

                                                    <button
                                                        onClick={() => toggleItem(index)}
                                                        className="mt-2 text-[#8D6E63] hover:text-[#5D4037] text-sm flex items-center gap-1 transition-colors"
                                                    >
                                                        {expandedItems.has(index) ? (
                                                            <>
                                                                <ChevronUp className="w-4 h-4" />
                                                                Show Less
                                                            </>
                                                        ) : (
                                                            <>
                                                                <ChevronDown className="w-4 h-4" />
                                                                Show More
                                                            </>
                                                        )}
                                                    </button>
                                                </>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {scheduleData.length > 5 && (
                    <motion.div
                        layout
                        className="text-center mt-8 h-12" // Fixed height to prevent jumping
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-white hover:bg-[#FDFBF7] text-[#5D4037] border border-[#8D6E63] px-4 py-2 rounded-md inline-flex items-center justify-center min-w-[120px]" // Fixed minimum width
                        >
                            {showAll ? (
                                <>
                                    <ChevronUp className="w-4 h-4 mr-2" />
                                    <span>Show Less</span>
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="w-4 h-4 mr-2" />
                                    <span>View More</span>
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

