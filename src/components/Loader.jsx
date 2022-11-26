import { motion } from "framer-motion";
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const svgAnimate = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function Guitarist() {
  return (
    <div className="w-full h-full">
      <motion.svg
        width="664"
        height="653"
        viewBox="0 0 664 653"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate="animate"
        variants={svgAnimate}
        className="w-[400px] h-[400px] stroke-2 stroke-primary"
      >
        <motion.path
          initial="hidden"
          animate="visible"
          variants={icon}
          d="M591.5 312.352C591.39 310.853 589 307.353 595.5 294.852C602 282.352 646.5 309.352 646.5 309.352C646.5 309.352 678.5 342.352 646.5 340.852C614.5 339.353 591.61 313.852 591.5 312.352Z"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={icon}
          d="M442.5 140.852C402 132.853 387.5 82.3525 387.5 54.8524C387.5 27.3523 204 54.3525 196 57.3525C188 60.3525 214.5 105.852 205 107.852C195.5 109.852 188 107.852 187 93.3524C186 78.8524 187 62.3524 187 62.3524C190 52.3524 228 82.8524 246 103.852C264 124.852 361.5 230.352 361.5 230.352C361.5 230.352 234 117.352 199.5 127.352C165 137.352 159 295.853 227 302.853C295 309.853 341.5 288.352 351.5 292.852C361.5 297.352 368 309.853 387.5 313.853C407 317.853 402 310.353 416.5 309.853C431 309.353 491.5 317.353 536 344.853C580.5 372.353 390 563.352 365 580.352C340 597.352 373 394.353 351.5 386.853C330 379.353 273 382.353 273 382.353C281.5 408.353 318 388.853 332.5 394.353C347 399.853 357.742 506.414 349.5 576.852C349.5 576.852 291 578.852 284.5 585.352C278 591.852 308.442 600.05 342 597.352C375.558 594.655 409.5 597.352 410 590.852C410.5 584.352 384.871 579.724 351.5 580.352H259C223.563 550.963 157 549.352 136 557.352C115 565.352 75 617.852 61 634.852C47 651.852 1 650.352 1 650.352"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={icon}
          d="M438.5 138.353C460.694 140.329 471.559 141.99 477 149.853C467 222.353 428 240.158 438.5 238.853C449 237.547 459.405 179.374 430 172.353C400.595 165.332 395.635 178.348 372 172.353C349.5 172.353 326.763 117.213 303.5 109.353C303.5 109.353 265.377 102.786 255 106.853C303.5 155.353 322.47 181.48 323 182.853C335 204.353 333.5 241.353 343 255.353C352.5 269.353 366.5 266.853 366.5 266.853C385.652 267.508 394 258.853 402.5 247.353C404.384 218.141 401.65 205.033 388 201.353C371.738 195.285 361.109 199.834 347 207.853C367.402 205.476 378.823 203.79 399 214.353C477.435 250.105 585 289.353 595 292.353C605 295.353 595 317.353 586.5 315.353C578 313.353 533 299 477.5 285.353C422 271.705 424.23 278.353 414.5 266.853C404.77 255.353 413 240.353 422 258.853C431 277.353 430 293.353 414.5 302.353C399 311.353 335.064 310.387 283.5 311.353C262.697 315.652 257.5 336.853 270.5 350.853C283.5 364.853 392 386.353 414.5 411.353C439.259 431.81 481.498 495.241 547 590.353"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          variants={icon}
          d="M403.5 58.3527C407 87.3527 420.001 132.353 444.5 138.853C469 145.353 488.5 118.853 493.5 82.3527C498.5 45.8525 489.5 -4.14735 460.5 3.85268C431.501 11.8527 400.001 29.3527 403.5 58.3527Z"
        />
      </motion.svg>
    </div>
  );
}
