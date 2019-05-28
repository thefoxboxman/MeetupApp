import { writable } from 'svelte/store';

/**create writable teeups store  */
const teeups = writable(
	[
    {
      id: "m1",
      date: "12 Aug 2019",
      time: "7.30pm",
      title: "Birthday Party",
      description: "John's 63rd Birthday Celebration",
      imageSrc: "./images/party.jpg",
      altText: "Party Image ",
	  venue: "Party Central",
	  isFavourite: false
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
	  isFavourite: false
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
	  isFavourite: false
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
	  isFavourite: false
    },
  ]
);

/**export store  */
export default teeups;