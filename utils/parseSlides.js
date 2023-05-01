export const parseSlides = (slideContent) => {
    const rawSlides = slideContent.split('---').filter((slide) => slide.trim() !== '');
  
    return rawSlides.map((rawSlide) => {
      const slideLines = rawSlide.split('\n').filter((line) => line.trim() !== '');
      const title = slideLines.shift().trim();
      const content = slideLines.map((s) => s.trim()).join('<br/>');
      return { title, content };
    });
  };