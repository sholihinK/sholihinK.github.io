// Collapsible Sections: Toggle expand/collapse with animation

document.addEventListener('DOMContentLoaded', function() {
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;

      if (!content || !content.classList.contains('collapsible-content')) {
        return;
      }

      // Toggle open state
      content.classList.toggle('open');

      // Update icon rotation if it exists
      const icon = this.querySelector('.collapsible-icon');
      if (icon) {
        icon.classList.toggle('open');
      }

      // Add/remove aria attributes for accessibility
      const isOpen = content.classList.contains('open');
      this.setAttribute('aria-expanded', isOpen);
    });

    // Make it keyboard accessible
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');

    const content = header.nextElementSibling;
    if (content && content.classList.contains('collapsible-content')) {
      header.setAttribute('aria-expanded', content.classList.contains('open'));
    }

    // Handle Enter and Space keys
    header.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
