export const menuAnim = {
    open: {
        width: "100vw",
        height: "100vh",
        top: "0",
        right: "0",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100vw",
        height: "0",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.45, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
};

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: (i) => ({
        opacity: 0,
        x: -1000,
        transition: { duration: 0.5, delay: i * 0.1, type: "linear", ease: [0.76, 0, 0.24, 1] }
    })
};

export const slideIn = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
};