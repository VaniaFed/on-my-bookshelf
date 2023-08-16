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
	};

	const hideModal = (): void => {
		setIsModalShown(false);
	};

	return {
		isModalShown,
		showModal,
		hideModal,
	};
}
