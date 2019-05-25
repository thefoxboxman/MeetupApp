<script>
  import NavHeader from "./GlobalComps/NavHeader.svelte";
  import TeeUpGrid from "./AppHome/TeeUpGrid.svelte";
  import TextInput from "./GlobalComps/TextInput.svelte";
import Button from "./GlobalComps/Button.svelte";
  import EditTeeup from "./AppHome/EditTeeup.svelte";
  
  let editMode="null";


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

function addTeeUp(event) {
    const newTeeUp = {
      id: Math.random().toString,
      date: event.detail.date,
      time: event.detail.time,
      title: event.detail.title,
      description: event.detail.description,
      imageSrc: event.detail.imageSrc,
      altText: event.detail.altText,
	  venue: event.detail.venue, 
	};
	teeups = [newTeeUp, ...teeups];
	editMode = null;
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

function cancelEdit(){
	editMode = null;
}

</script>

<style>
  main {
    margin-top: 5rem;
  }
 .add-button{
	 margin-left: 100px;
 }
  
</style>

<!-- Start App HTML -->
<!-- Navbar -->
<NavHeader />

<main>
<div class="add-button">
<Button  on:click="{()=> editMode ='active'}" >Add New Teeup</Button>
</div>

  
 {#if editMode === 'active'}
<EditTeeup on:submit={addTeeUp} on:cancel={cancelEdit}/>
 {/if}
  <TeeUpGrid {teeups} on:togglefavourite="{togglefavourite}" />
</main>
