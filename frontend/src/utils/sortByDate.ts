function sortByDate(data: any[]) {
	return data.sort((a, b) => {
		if (new Date(a.created_at) < new Date(b.created_at)) return 1;
		else return -1;
	});
}

export { sortByDate };
