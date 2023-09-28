import { useState } from 'react';

interface UseModal {
	isModalShown: boolean;
	showModal: () => void;
	hideModal: () => void;
}

export function useModal(shownByDefault: boolean = false): UseModal {
	const [isModalShown, setIsModalShown] = useState<boolean>(shownByDefault);

	const showModal = (): void => {
		setIsModalShown(true);
		document.body.setAttribute('style', 'position: fixed; left: 50%; transform: translateX(-50%); width: 100%;');
	};

	const hideModal = (): void => {
		setIsModalShown(false);
		document.body.setAttribute('style', '');
	};

	return {
		isModalShown,
		showModal,
		hideModal,
	};
}
