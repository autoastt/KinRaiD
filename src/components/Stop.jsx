import { motion } from "framer-motion";
const Stop = ({ questions, setCount }) => {
    const handleStop = e => {
        setCount(questions.length);
    }
    return (
        <motion.button onClick={handleStop} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
        className="shadow-xl hover:shadow-cyan-500/50 text-3xl py-1 mb-5 w-1/3 sm:w-1/5 bg-cyan-500 rounded-3xl hover:bg-cyan-400 ">
            That's All!
        </motion.button>
    ) 
}

export default Stop 