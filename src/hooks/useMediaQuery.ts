import { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
  // État initialisé à false
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Vérifier si nous sommes côté client
    if (typeof window === 'undefined') {
      return;
    }

    // Créer la liste de requêtes média
    const mediaQueryList = window.matchMedia(query);

    // Définir le gestionnaire d'événements
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Ajouter le gestionnaire d'événements
    mediaQueryList.addEventListener('change', listener);

    // Définir l'état initial
    setMatches(mediaQueryList.matches);

    // Nettoyer le gestionnaire d'événements lors du démontage
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
