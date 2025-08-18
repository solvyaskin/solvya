// Preload critical images
const imagesToPreload = [
    'assets/damage skin.webp',
    'assets/damage skin 2.webp',
    'assets/Solvja.webp'
];

imagesToPreload.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});