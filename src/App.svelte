<script>
	import NavHeader from "./GlobalComps/NavHeader.svelte";
import TeeUpGrid from "./AppHome/TeeUpGrid.svelte";
import TextInput from "./GlobalComps/TextInput.svelte";
import Button from "./GlobalComps/Button.svelte";

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
main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<!-- Start App HTML -->
<!-- Navbar -->
	<NavHeader />

	<main class="input-form">
		<form on:submit|preventDefault="{addTeeUp}">
<TextInput
type="text"
id="date"
label="Date"
value="{date}"
on:input={event => (date = event.target.value)} />

<TextInput
type="text"
id="time"
label="Time"
value="{time}"
on:input={event => (time = event.target.value)} />

<TextInput
type="text"
id="title"
label="Title"
value="{title}"
on:input={event => (title = event.target.value)} />

<TextInput
form-control="textarea"
rows=3
id="description"
label="Description"
value="{description}"
on:input={event => (description = event.target.value)} />

<TextInput
type="text"
id="imageSrc"
label="Image Source"
value="{imageSrc}"
on:input={event => (imageSrc = event.target.value)} />

<TextInput
type="text"
id="altText"
label="Alt Text for Image"
value="{altText}"
on:input={event => (altText = event.target.value)} />

<TextInput
type="text"
id="venue"
label="Venue"
value="{venue}"
on:input={event => (venue = event.target.value)} />
<Button 
type='submit' 
caption="Save" />	
		</form>
		<TeeUpGrid teeups={teeups} />
	</main>
