// Copy to Clipboard: Add copy buttons to code blocks

document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.post-content pre');

  codeBlocks.forEach(block => {
    // Create copy button
    const button = document.createElement('button');
    button.className = 'code-copy-button';
    button.textContent = 'Copy';
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', 'Copy code to clipboard');

    // Add button to code block
    block.style.position = 'relative';
    block.appendChild(button);

    // Copy functionality
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Get code text (exclude the button)
      const code = block.querySelector('code');
      const text = code ? code.textContent : block.textContent.replace(button.textContent, '').trim();

      // Copy to clipboard
      navigator.clipboard.writeText(text).then(function() {
        // Show feedback
        const originalText = button.textContent;
        button.classList.add('copied');

        setTimeout(function() {
          button.classList.remove('copied');
          button.textContent = originalText;
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        fallbackCopy(text, button);
      });
    });
  });

  // Fallback for browsers without Clipboard API
  function fallbackCopy(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      button.classList.add('copied');

      setTimeout(function() {
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }

    document.body.removeChild(textarea);
  }
});
