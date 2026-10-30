export type Product = { id: string; name: string; price: number; image: string };
export const products: Product[] = [
 { id: 'golden-chard', name: 'Golden Chard', price: 129, image: '/bottles/gold.svg' },
 { id: 'scarlet-merlot', name: 'Scarlet Merlot', price: 149, image: '/bottles/red.svg' },
 { id: 'blossom-rose', name: 'Blossom Rosé', price: 179, image: '/bottles/rose.svg' },
 { id: 'verdant-grove', name: 'Verdant Grove', price: 189, image: '/bottles/green.svg' },
 { id: 'purple-malbec', name: 'Purple Malbec', price: 149, image: '/bottles/purple.svg' },
];
