export const stopLoadingAnimation = () => {
  const $loadingAnimation = document.querySelector('.loading-container');
  $loadingAnimation.style.display = 'none';
}

export const startLoadingAnimation = () => {
  const $loadingAnimation = document.querySelector('.loading-container');
  $loadingAnimation.style.display = 'flex';
}
