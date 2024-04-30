const cursorClassApplier = () => {
    const parentElements = document.querySelectorAll(".target");

    parentElements.forEach((parentElement) => {
        const children = parentElement.querySelectorAll("*");
        children.forEach((child) => {
            child.classList.add("target");
            const cursorAttribute = parentElement.getAttribute(
                "data-attribute-cursor"
            );
            const prevAttribute = child.getAttribute(
                "data-attribute-cursor"
            );
            if (prevAttribute) {
                child.setAttribute("data-attribute-cursor", prevAttribute);
            }
            else if (cursorAttribute) {
                child.setAttribute("data-attribute-cursor", cursorAttribute);
            }
        });
    });
};

export default cursorClassApplier;