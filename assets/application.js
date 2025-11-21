// Motion.js animations
// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Wait for Motion to be available
  if (window.Motion) {
    const { animate, scroll, stagger, inView } = window.Motion

    // Example 1: Animate homepage elements on load
    const homepageElements = document.querySelectorAll('.homepage h1, .homepage p, .homepage .logo')
    if (homepageElements.length > 0) {
      animate(
        homepageElements,
        {
          opacity: [0, 1],
          y: [20, 0],
        },
        {
          delay: stagger(0.1),
          duration: 0.6,
          ease: 'easeOut',
        }
      )
    }

    // Example 2: Scroll-triggered animations
    const animatedElements = document.querySelectorAll('[data-animate]')
    animatedElements.forEach(element => {
      inView(element, () => {
        const animationType = element.dataset.animate

        switch (animationType) {
          case 'fade-up':
            animate(element, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, ease: 'easeOut' })
            break
          case 'fade-in':
            animate(element, { opacity: [0, 1] }, { duration: 0.8, ease: 'easeOut' })
            break
          case 'scale':
            animate(element, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.5, ease: 'easeOut' })
            break
        }
      })
    })

    // Example 3: Scroll-linked animations (parallax effect)
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    parallaxElements.forEach(element => {
      scroll(
        animate(element, {
          y: [0, -50],
        }),
        {
          target: element,
          offset: ['start end', 'end start'],
        }
      )
    })

    // Example 4: Hover animations
    const hoverElements = document.querySelectorAll('[data-hover-animate]')
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        animate(element, { scale: 1.05 }, { duration: 0.3, ease: 'easeOut' })
      })

      element.addEventListener('mouseleave', () => {
        animate(element, { scale: 1 }, { duration: 0.3, ease: 'easeOut' })
      })
    })
  }
})
