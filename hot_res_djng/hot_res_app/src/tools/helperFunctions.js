export const findPicturePath = (id, menu) => {
	if (menu) {
		return menu.find((i) => i.id == id).image;
	}
};

export const orderTotal = (menu, order) => {
    if (menu) {
        return menu.reduce((sum, i) => {
            if (order[i.id] != null)
                return sum + Number(i.price) * order[i.id].number;
            else {
                return sum;
            }
        }, 0);
    } else {
        return 0;
    }
};
