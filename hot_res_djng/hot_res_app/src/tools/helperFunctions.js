export const findPicturePath = (id, menu) => {
	if (menu) {
		return menu.find((i) => i.id == id).image;
	}
};
