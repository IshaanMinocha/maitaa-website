import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Error404() {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1)
    }, 1000)

    const redirect = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => {
      clearInterval(timer)
      clearTimeout(redirect)
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">404</h1>
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center shadow-lg"
        >
          <span className="text-4xl md:text-5xl font-bold text-purple-600">{countdown}</span>
        </motion.div> */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Go Home
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 text-gray-500"
      >
        Redirecting to home in {countdown} seconds...
      </motion.div>
    </div>
  )
}