// test for responsive design

const resized = new Promise((resolve) => {
  window.addEventListener('resize', () => {
    resolve();
  });
});

// check that the first child of the flex item has a min-height of 150px
edTest(
  'Should resize the minHeight when screen size is less than or equal to 768px.',
  async () => {
    window.resizeTo(904, 768);
    await resized;
    const firstFlexItem = document.querySelector('.flex-item > *');
    const computedStyle = window
      .getComputedStyle(firstFlexItem)
      .getPropertyValue('height');
    if (Number.parseInt(computedStyle) > 150) {
      return {
        ok: true,
        passed: false,
        feedback: 'Make sure your portfolio is responsive.',
      };
    }
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, your portfolio is responsive.',
    };
  }
);
