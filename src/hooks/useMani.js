import { useContext } from 'react';
import { ManiContext } from '../components/ManiProvider';

export default function useMani() {
  const context = useContext(ManiContext);
  if (!context) {
    throw new Error('useMani must be used within a ManiProvider');
  }
  return context;
}
