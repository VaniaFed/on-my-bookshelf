export interface Props {
	header: React.ReactNode;
	children: React.ReactNode;
	footer: React.ReactNode;
	closeModal: () => void;
	className?: string;
}
