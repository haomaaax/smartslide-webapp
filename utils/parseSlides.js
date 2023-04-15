export const parseSlides = (slideObjects) => {
    return slideObjects.map((slide, index) => {
        const title = `Slide ${index + 1}`;
        const content = slide.content;
        return { title, content };
    });
};