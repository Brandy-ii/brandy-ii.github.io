document.addEventListener('DOMContentLoaded', () => {
    const toggleNav = document.getElementById('togglenav');
    const leftNav = document.getElementById('leftnav');
    const mainContent = document.getElementById('main-content');
  
    toggleNav?.addEventListener('click', () => {
      leftNav?.classList.toggle('open');
      mainContent?.classList.toggle('pushed');
    });
  });