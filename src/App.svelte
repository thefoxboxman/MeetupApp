<script>
  import NavHeader from "./GlobalComps/NavHeader.svelte";
  import TeeUpGrid from "./AppHome/TeeUpGrid.svelte";
  import TextInput from "./GlobalComps/TextInput.svelte";
  import Button from "./GlobalComps/Button.svelte";
  import EditTeeup from "./AppHome/EditTeeup.svelte";
  import teeups from "./Stores/teeups_store.js";

	let editMode = "null";
	
//data to be forwarded to store
  function addTeeUp(event) {
    const newTeeUpData = {
      
      date: event.detail.date,
      time: event.detail.time,
      title: event.detail.title,
      description: event.detail.description,
      imageSrc: event.detail.imageSrc,
      altText: event.detail.altText,
      venue: event.detail.venue
		};
		
    // Add new teeup to store by calling addTeeup method and passing newTeeUpData
    teeups.addTeeup(newTeeUpData);
    editMode = null;
  }

//
  function togglefavourite(event) {
    const id = event.detail; //capture id passed up by click listner
    teeups.toggleFavourite(id);
  }

  function toggleisgoing(event) {
    const id = event.detail; //capture id passed up by click listner
    teeups.toggleIsGoing(id);
  }

  function cancelEdit() {
    editMode = null;
  }
</script>

<style>
  /* Grid layout for Appl */
  #grid-container {
    display: grid;
    max-width: 1300px;
    height: 100vh;
    grid-template-columns: 1fr 18fr 1fr;
    grid-template-rows: 50px 1fr;

    grid-template-areas:
      ". head ."
      ". main .";
  }

  #grid-container > #nav-bar {
    grid-area: head;
  }

  #grid-container > #main-content {
    grid-area: main;
  }

  /* Add Teeup Button	*/
  .add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
  }
</style>

<!-- Start App HTML -->

<!-- Grid Container for Whole App -->
<div id="grid-conatiner">

  <!-- Navigation Header -->
  <header id="nav-bar">
    <NavHeader />
  </header>

  <!-- Start Main Content -->
  <main id="main-content">
    <!-- Display Add Teeup Button -->
    <div class="add-button">
      <Button on:click={() => (editMode = 'active')}>Add New Teeup</Button>
    </div>

    {#if editMode === 'active'}
      <EditTeeup on:submit={addTeeUp} on:cancel={cancelEdit} />
    {/if}
    <TeeUpGrid
      teeups={$teeups}
      on:togglefavourite={togglefavourite}
      on:toggleisgoing={toggleisgoing} />
  </main>
</div>
