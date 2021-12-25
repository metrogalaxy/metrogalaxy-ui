import { useMediaQuery } from '@chakra-ui/react';

export function useButtonSize(): string {
  const [isMobile] = useMediaQuery('(max-width: 576px)');

  return isMobile ? 'sm' : 'md';
}
