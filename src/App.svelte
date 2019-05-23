<script>
	import NavHeader from "./GlobalComps/NavHeader.svelte";
import TeeUpGrid from "./AppHome/TeeUpGrid.svelte";

let date="";
let time="";
let title="";
let description="";
let imageSrc="";
let altText="";
let venue="";


	let teeups = [
		{
			id: 'm1',
			date: '12 Aug 2019',
			time: '7.30pm',
			title: 'Birthday Party',
			description: 'John\'s 63rd Birthday Celebration',
			imageSrc: './images/party.jpg',
			altText: 'Party Image ',
			venue: 'Party Central',
		},
		{
			id: 'm2',
			date: '14 Jan 2020',
			time: '7.30pm',
			title: 'Jenelle\'s Birthday Party',
			description: '64th Birthday Celebration',
			imageSrc: './images/mirror_balls.jpg',
			altText: 'Mirror Balls ',
			venue: 'Party Central',
		}
	]

function addTeeUp(){
const newTeeUp = {
	id: Math.random().toString,
	date: date,
	time: time,
	title: title,
	description: description,
	imageSrc: imageSrc,
	altText: altText,
	venue: venue
};

teeups=[newTeeUp,...teeups]
}

	</script>

<style>
#teeups{
	margin-top: 2rem;
}
</style>

<!-- Start App HTML -->
<!-- Navbar -->
	<NavHeader />

	<main>
		<form on:submit|preventDefault="{addTeeUp}">
<div class="form-control">
<label for="date">Date</label>
<input type="text" id="date" bind:value={date}>
</div>
<div class="form-control">
<label for="time">Time</label>
<input type="text" id="time" bind:value={time}>
</div>
<div class="form-control">
<label for="title">Title</label>
<input type="text" id="title" bind:value={title}>
</div>
<div class="form-control">
<label for="description">Description</label>
<textarea row=3 id="description"></textarea>
</div>
<div class="form-control">
<label for="imageSrc">Image</label>
<input type="text" id="imageSrc" bind:value={imageSrc}>
</div>
<div class="form-control">
<label for="altText">Alt Text form Image</label>
<input type="text" id="altText" bind:value={altText}>
</div>
<div class="form-control">
<label for="venue">Venue</label>
<input type="text" id="venue" bind:value={venue}>
</div>
<button type="submit">Save</button>

		</form>
		<TeeUpGrid teeups={teeups} />
	</main>
