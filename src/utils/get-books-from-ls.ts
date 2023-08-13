export const getBooksFromLS = (): any[] => {
	const data = localStorage.getItem('books');
	return data ? JSON.parse(data) : [];
};
