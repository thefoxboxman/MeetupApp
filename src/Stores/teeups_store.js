import { writable } from "svelte/store";

/**create writable teeups store  */
const teeups = writable([
	{
		id: "m1",
		date: "12 Aug 2019",
		time: "7.30pm",
		title: "Birthday Party",
		description: "John's 63rd Birthday Celebration",
		imageSrc: "./images/party.jpg",
		altText: "Party Image ",
		venue: "Party Central",
		isFavourite: false,
		isGoing: false

	},
	{
		id: "m2",
		date: "14 Jan 2020",
		time: "7.30pm",
		title: "Jenelle's Birthday Party",
		description: "64th Birthday Celebration",
		imageSrc: "./images/mirror_balls.jpg",
		altText: "Mirror Balls ",
		venue: "Party Central",
		isFavourite: false,
		isGoing: false
	},
	{
		id: "m3",
		date: "12 Aug 2019",
		time: "7.30pm",
		title: "Birthday Party",
		description: "John's 63rd Birthday Celebration",
		imageSrc: "./images/party.jpg",
		altText: "Party Image ",
		venue: "Party Central",
		isFavourite: false,
		isGoing: false
	},
	{
		id: "m4",
		date: "14 Jan 2020",
		time: "7.30pm",
		title: "Jenelle's Birthday Party",
		description: "64th Birthday Celebration",
		imageSrc: "./images/mirror_balls.jpg",
		altText: "Mirror Balls ",
		venue: "Party Central",
		isFavourite: false,
		isGoing: false
	}
]);

const customTeeupStore = {
	subscribe: teeups.subscribe,
	addTeeup: (newTeeUpData) => {
		const newTeeup = {
			...newTeeUpData, //new teeup from App
			id: Math.random().toString(), //create id in store not in App
			isFavourite: false, //add isFavourite to match store data structure
			isGoing: false
		};
		teeups.update((items) => {
			return [newTeeup, ...items]; //new teeup first than spead the exisiting items
		});
	}, //end addTeeup
	toggleFavourite: id => {
		teeups.update((items) => {
			// using find(), find the teeup matching the id passed in
			const updatedTeeup = { ...items.find((t) => t.id === id) };

			//toggle isFavourite value in the specific teeup ie true to false or vise versa
			updatedTeeup.isFavourite = !updatedTeeup.isFavourite;
			//find the index of the item that needs to updated
			const teeupIndex = items.findIndex((t) => t.id === id);
			//create new array from original so not to mutate original
			const updatedTeeups = [...items];
			// in updatedTeeups array replace the specific updatedteeup
			updatedTeeups[teeupIndex] = updatedTeeup;
			//finally replace orginal teeups with newly updated teeups array
			
		return updatedTeeups;
		});
	},
	toggleIsGoing: (id) => {
		teeups.update((items) => {
			// using find(), find the teeup item matching the id passed in
			const updatedTeeup = { ...items.find((t) => t.id === id) };
			//toggle isGoing value in the specific teeup ie true to false or vise versa
			updatedTeeup.isGoing = !updatedTeeup.isGoing;
			//find the index of the item that needs to updated
			const teeupIndex = items.findIndex((t) => t.id === id);
			//create new array from original so not to mutate original
			const updatedTeeups = [...items];
			// in updatedTeeups array replace the specific updatedteeup
			updatedTeeups[teeupIndex] = updatedTeeup;
			//finally return updated teeups array to replace teeups in store
			return updatedTeeups;
		});
	}
};

/**export store  */
export default customTeeupStore;
