// Post Search & Filtering: Filter posts by category or search term

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('post-search');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const postGrid = document.getElementById('post-grid');
  const postItems = document.querySelectorAll('.post-grid-item');

  let currentCategory = 'all';
  let currentSearch = '';

  // Category filtering
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
      this.classList.add('filter-btn--active');

      applyFilters();
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearch = this.value.toLowerCase().trim();
      applyFilters();
    });
  }

  function applyFilters() {
    let visibleCount = 0;

    postItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const title = item.getAttribute('data-title');

      // Check category filter
      const categoryMatch = currentCategory === 'all' || category === currentCategory;

      // Check search filter
      const searchMatch = currentSearch === '' || title.includes(currentSearch);

      // Show/hide item
      if (categoryMatch && searchMatch) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeIn 0.3s ease';
        visibleCount++;
      } else {
        item.classList.add('hidden');
      }
    });

    // Show empty state if no results
    if (visibleCount === 0) {
      showEmptyState();
    } else {
      hideEmptyState();
    }
  }

  function showEmptyState() {
    if (document.querySelector('.empty-state')) return;

    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <div class="empty-state__title">No posts found</div>
      <p>Try adjusting your filters or search term.</p>
    `;
    postGrid.appendChild(emptyState);
  }

  function hideEmptyState() {
    const emptyState = document.querySelector('.empty-state');
    if (emptyState) {
      emptyState.remove();
    }
  }

  // Keyboard shortcut: / for search
  document.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Keyboard shortcut: Escape to clear search
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      currentSearch = '';
      applyFilters();
    }
  });
});
