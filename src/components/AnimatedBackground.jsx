
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50 dark:bg-[#050505] transition-colors duration-300">
            {/* Grid Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-30 blur-[3px]"
                style={{
                    backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                }}
            />

            {/* Moving Grid Animation (Perspective Plane) */}
            <motion.div
                className="absolute inset-0 z-0 opacity-10 blur-[0.5px]"
                animate={{
                    backgroundPosition: ['0px 0px', '0px 40px']
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                }}
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) scale(2)',
                    transformOrigin: 'top center'
                }}
            />

            {/* Glowing Blobs */}
            <motion.div
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/20 blur-[120px]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[120px]"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[100px]"
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
