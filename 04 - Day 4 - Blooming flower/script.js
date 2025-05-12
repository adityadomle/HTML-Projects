window.addEventListener('load', () => {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach((flower, index) => {
      setTimeout(() => {
        flower.classList.add('bloom');
      }, 500 * index); // staggered blooming
    });
  });