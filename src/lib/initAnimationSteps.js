// fast steps
export const FastFirstStep = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            delay: .2,
        },
    },
};

export const FastLeftStep = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            delay: .2,
        },
    },
};

export const FastRightStep = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 60,
            delay: .2,
        },
    },
};