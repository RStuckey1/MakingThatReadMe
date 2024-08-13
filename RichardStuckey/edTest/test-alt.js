// check alt text on  images
// check that all images have alt text
edTest('All images should have alt text', () => {
  const images = document.querySelectorAll('img');
  const imgWithoutAltText = [];

  images.forEach((img) => {
    const imgAlt = img.getAttribute('alt');
    if (!imgAlt || imgAlt.length == 0) {
      imgWithoutAltText.push(img);
    }
  });

  if (imgWithoutAltText.length == 0) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, all images have alt text.',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'Some images are missing alt text!',
  };
});
