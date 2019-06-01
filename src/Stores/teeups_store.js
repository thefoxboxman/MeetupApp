import { writable } from "svelte/store";

/**create writable teeups store  */
const teeups = writable([]);

const customTeeupStore = {
	subscribe: teeups.subscribe,
	// ***** reset local store to empty array method ****
	setTeeups: (teeupArray) => {
		teeups.set(teeupArray);
	},
	// **** Add a new teeup Method ****
	addTeeup: (teeupData) => {
		const newTeeup = {
			...teeupData, //new teeup from App
			//id: Math.random().toString(), //create id in store not in App
			//isFavourite: false, //add isFavourite to match store data structure
			//isGoing: false
		};
		// use built-in update method
		teeups.update((items) => {
			return [newTeeup, ...items]; //new teeup first than spead the exisiting items
		});
	},
	// **** update an existing teeup Method ****
	updateTeeup: (id, teeupData) => {
		teeups.update((items) => {
			const teeupIndex = items.findIndex((t) => t.id === id); //find the index of teeup to be updated
			const updatedTeeup = {
				...items[teeupIndex],
				...teeupData
			}; //update that teeup with the new data from the passed in teeupData
			const updatedTeeups = [...items]; //copy the original array into a new array
			updatedTeeups[teeupIndex] = updatedTeeup; //copy the now updated teeup into the copy of the original array
			return updatedTeeups; //this will mutate original array to the new updated state
		});
	},
//delete an exisiting teeup
deleteTeeup: (id) => {
	teeups.update((items) =>{
		return items.filter(i => i.id !==id)
	})
},

	//**** toogleFavourite Method ****
	toggleFavourite: (id) => {
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
	// **** toogleIsGoing Method ****
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
