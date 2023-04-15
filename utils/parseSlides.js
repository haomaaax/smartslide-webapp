export const parseSlides = (slideContent) => {
    const slides = slideContent.split('\n').filter((line) => line.trim() !== '');
    return slides.map((slide) => {
      const [title, ...content] = slide.split('-').map((s) => s.trim());
      return { title, content: content.join(' - ') };
    });
  };