// Sticky TOC: Generate TOC, highlight active section, and smooth scroll

document.addEventListener('DOMContentLoaded', function() {
  const tocList = document.getElementById('toc-list');
  const headings = document.querySelectorAll('.post-content h2, .post-content h3');

  // Generate TOC from headings
  if (tocList && headings.length > 0) {
    headings.forEach(heading => {
      // Add ID if it doesn't exist
      if (!heading.id) {
        heading.id = heading.textContent
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      }

      // Create TOC entry
      const level = heading.tagName === 'H2' ? 2 : 3;
      const li = document.createElement('li');
      li.className = `toc-item toc-level-${level}`;

      const a = document.createElement('a');
      a.className = 'toc-link';
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent;

      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  const tocLinks = document.querySelectorAll('.toc-link');

  // Smooth scroll for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      const activeLink = Array.from(tocLinks).find(link =>
        link.getAttribute('href') === `#${activeHeading.id}`
      );
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }

  // Initialize active state
  updateActiveTocLink();
});
