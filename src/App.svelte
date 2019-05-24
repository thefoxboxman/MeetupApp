<script>
  import NavHeader from "./GlobalComps/NavHeader.svelte";
  import TeeUpGrid from "./AppHome/TeeUpGrid.svelte";
  import TextInput from "./GlobalComps/TextInput.svelte";
  import Button from "./GlobalComps/Button.svelte";

let id = "";
  let date = "";
  let time = "";
  let title = "";
  let description = "";
  let imageSrc = "";
  let altText = "";
  let venue = "";
  let isFavourite="";

  let teeups = [
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
    }
  ];

  function addTeeUp() {
    const newTeeUp = {
      id: Math.random().toString,
      date: date,
      time: time,
      title: title,
      description: description,
      imageSrc: imageSrc,
      altText: altText,
	  venue: venue,
	  
    };
    teeups = [newTeeUp, ...teeups];
  }

  function togglefavourite(event) {
	  	//capture id passed up by click listner
		const id =  event.detail;
		                
		// using find(), find the teeup matching the id passed in
	    const updatedTeeup = {...teeups.find(t=>t.id===id)};
		
		//toggle isFavourite value in the specific teeup ie true to false or vise versa
		updatedTeeup.isFavourite = !updatedTeeup.isFavourite;
		//find the index of the item that needs to updated
		const teeupIndex = teeups.findIndex(t => t.id === id);
		//create new array from original so not to mutate original
		const updatedTeeups = [...teeups];
		// in updatedTeeups array replace the specific updatedteeup
		updatedTeeups[teeupIndex]= updatedTeeup;
		//finally replace orginal teeups with newly updated teeups array
		teeups = updatedTeeups;
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
  <form on:submit|preventDefault={addTeeUp}>
    <TextInput
      id="date"
      label="Date"
      value={date}
      on:input={event => (date = event.target.value)} />

    <TextInput
      id="time"
      label="Time"
      value={time}
      on:input={event => (time = event.target.value)} />

    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={event => (title = event.target.value)} />

    <TextInput
      form-control="textarea"
      rows="3"
      id="description"
      label="Description"
      value={description}
      on:input={event => (description = event.target.value)} />

    <TextInput
      id="imageSrc"
      label="Image Source"
      value={imageSrc}
      on:input={event => (imageSrc = event.target.value)} />

    <TextInput
      id="altText"
      label="Alt Text for Image"
      value={altText}
      on:input={event => (altText = event.target.value)} />

    <TextInput
      id="venue"
      label="Venue"
      value={venue}
      on:input={event => (venue = event.target.value)} />
    <Button type="submit" caption="Save" />
  </form>
  <TeeUpGrid {teeups} on:togglefavourite="{togglefavourite}" />
</main>
