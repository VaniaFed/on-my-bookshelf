export interface Props {
	id: string;
	required?: boolean;
	label?: string;
	children: React.ReactNode;
	errMessage?: string;
	className?: string;
}
