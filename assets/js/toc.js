// Sticky TOC: Highlight active section and smooth scroll

document.addEventListener('DOMContentLoaded', function() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = document.querySelectorAll('.post-content h2, .post-content h3');

  // Smooth scroll for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active link
        updateActiveTocLink();
      }
    });
  });

  // Highlight active section as user scrolls
  window.addEventListener('scroll', updateActiveTocLink);

  function updateActiveTocLink() {
    let activeHeading = null;

    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 100) {
        activeHeading = heading;
      }
    });

    // Remove active class from all links
    tocLinks.forEach(link => link.classList.remove('active'));

    // Add active class to current section
    if (activeHeading) {
      const headingText = activeHeading.textContent;
      const activeLink = Array.from(tocLinks).find(link =>
        link.textContent.trim() === headingText.trim()
      );
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }

  // Add IDs to headings if they don't have them
  headings.forEach(heading => {
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
    }
  });
});
