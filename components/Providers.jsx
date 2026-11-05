'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { useEffect, useState } from 'react';
import Loader from './layout/Loader';
import CartDrawer from './CartDrawer';

export default function Providers({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      {loading && <Loader />}
      {children}
      <CartDrawer />
    </Provider>
  );
}