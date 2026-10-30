'use client';

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import Image from 'next/image';
import { products, type Product } from '@/lib/products';
import { Icon } from './Icons';

type CartContext = {
  add: (product: Product) => void;
  open: () => void;
  count: number;
};

const Context = createContext<CartContext | null>(null);

export function useCart() {
  const value = useContext(Context);
  if (!value) throw new Error('CartProvider required');
  return value;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [notice, setNotice] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 2500);
    return () => clearTimeout(timer);
  }, [notice]);

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = products.reduce((sum, p) => sum + p.price * (cart[p.id] ?? 0), 0);

  function add(p: Product) {
    setCart((old) => ({ ...old, [p.id]: (old[p.id] ?? 0) + 1 }));
    setNotice(`${p.name} added to your bag`);
  }

  function open() {
    dialog.current?.showModal();
    closeButton.current?.focus();
  }

  return (
    <Context.Provider value={{ add, open, count }}>
      {children}

      {/* Floating Add-to-bag Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 z-50 w-max max-w-[90vw] -translate-x-1/2 rounded-full bg-ink px-6 py-3.5 text-center text-sm font-medium text-white shadow-2xl transition-all duration-300 border border-white/10 ${notice ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
          }`}
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-pink animate-pulse" />
          {notice}
        </span>
      </div>

      {/* Shopping Bag Dialog / Modal */}
      <dialog
        ref={dialog}
        aria-labelledby="bag-title"
        className="m-auto w-[min(92vw,480px)] rounded-3xl bg-white p-7 text-ink shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="mb-6 flex items-center justify-between border-b border-blush pb-4">
          <h2 id="bag-title" className="font-display text-2xl md:text-3xl font-bold">
            Your Collection
          </h2>
          <button
            ref={closeButton}
            type="button"
            aria-label="Close bag"
            onClick={() => dialog.current?.close()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f0f2] text-ink hover:bg-blush hover:text-pink transition-colors"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {count === 0 ? (
          <div className="py-12 text-center">
            <p className="font-display text-lg text-ink/70">Your bag is empty.</p>
            <p className="mt-1 text-sm text-ink/50">Discover your next bottle in the Vault below.</p>
          </div>
        ) : (
          <ul className="max-h-[50vh] space-y-4 overflow-y-auto pr-1">
            {products
              .filter((p) => cart[p.id])
              .map((p) => (
                <li
                  key={p.id}
                  className="flex items-center gap-4 rounded-2xl bg-[#faf9fa] p-3 border border-blush"
                >
                  <div className="h-20 w-12 flex items-center justify-center">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={36}
                      height={120}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-base text-ink">{p.name}</p>
                    <p className="font-sans text-sm text-ink/60">
                      ${p.price} × {cart[p.id]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Decrease ${p.name}`}
                      onClick={() =>
                        setCart((old) => ({ ...old, [p.id]: Math.max(0, old[p.id] - 1) }))
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-pink/30 text-pink hover:bg-blush font-bold text-sm transition-colors"
                    >
                      −
                    </button>
                    <span className="w-5 text-center font-bold text-sm">{cart[p.id]}</span>
                    <button
                      type="button"
                      aria-label={`Increase ${p.name}`}
                      onClick={() => add(p)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white hover:bg-[#ce194c] font-bold text-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        )}

        <div className="mt-6 border-t border-blush pt-4">
          <div className="flex justify-between font-display text-xl font-bold text-ink">
            <span>Subtotal</span>
            <span className="text-pink">${total}</span>
          </div>
          <p className="mt-2 text-xs text-ink/50">
            Design demo — checkout and payments are simulated.
          </p>
        </div>

        <button
          type="button"
          onClick={() => dialog.current?.close()}
          className="mt-6 w-full rounded-full bg-ink py-3.5 text-center font-medium text-white transition-colors hover:bg-pink shadow-lg"
        >
          Continue Exploring
        </button>
      </dialog>
    </Context.Provider>
  );
}
