const cursorClassApplier = () => {
    const parentElements = document.querySelectorAll(".target");

    parentElements.forEach((parentElement) => {
        const children = parentElement.querySelectorAll("*");
        children.forEach((child) => {
            child.classList.add("target");
            const cursorAttribute = parentElement.getAttribute(
                "data-attribute-cursor"
            );
            if (cursorAttribute) {
                child.setAttribute("data-attribute-cursor", cursorAttribute);
            }
        });
    });
};

export default cursorClassApplier;