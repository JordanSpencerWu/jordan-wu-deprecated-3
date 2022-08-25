import dayjs from "dayjs";

export default function displayDate(date: string, longForm = false) {
	const now = dayjs();
	const postPublished = dayjs(date);
	const isPublishedThisYear =
		postPublished.format("YYYY") == now.format("YYYY");

	if (longForm) {
		return postPublished.format("MMMM D, YYYY");
	} else if (isPublishedThisYear) {
		return postPublished.format("MMM D");
	} else {
		return postPublished.format("MMM D, YYYY");
	}
}
