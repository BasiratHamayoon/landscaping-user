'use client';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartOpen,
  selectCartCount,
  selectCartTotal,
  hideCart,
  removeFromCart,
  updateQuantity,
} from '@/redux/actions/cartActions';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isOpen = useSelector(selectCartOpen);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] transition-opacity"
          onClick={() => dispatch(hideCart())}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[9999] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-darkText tracking-wider uppercase">
              Your Cart ({cartCount})
            </h3>
          </div>
          <button
            onClick={() => dispatch(hideCart())}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-gray-300 mb-4" />
            <p className="text-gray-500 text-sm mb-6">Your cart is empty</p>
            <button
              onClick={() => dispatch(hideCart())}
              className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-darkText truncate">
                      {item.title}
                    </h4>
                    <p className="text-sm font-bold text-primary mt-1">
                      AED {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity(item.id, item.quantity - 1))
                        }
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity(item.id, item.quantity + 1))
                        }
                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="ml-auto w-7 h-7 flex items-center justify-center text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Subtotal</span>
                <span className="text-lg font-bold text-darkText">
                  AED {cartTotal.toFixed(2)}
                </span>
              </div>
              <button className="w-full py-3 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wider">
                Checkout — AED {cartTotal.toFixed(2)}
              </button>
              <button
                onClick={() => dispatch(hideCart())}
                className="w-full py-2 text-sm text-gray-500 hover:text-darkText transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}