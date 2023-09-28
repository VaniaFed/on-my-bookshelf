import { useEffect, type RefObject } from 'react';

export function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, onClickOutside: () => void): void {
	const handleClickOutside = (event: MouseEvent): void => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			onClickOutside();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
}
