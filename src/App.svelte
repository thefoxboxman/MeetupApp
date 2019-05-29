<script>
  import NavHeader from "./GlobalComps/NavHeader.svelte";
  import TeeUpGrid from "./AppHome/TeeUpGrid.svelte";
  import TextInput from "./GlobalComps/TextInput.svelte";
  import Button from "./GlobalComps/Button.svelte";
  import EditTeeup from "./AppHome/EditTeeup.svelte";
	import teeups from "./Stores/teeups_store.js";
	import TeeupDetail from "./AppHome/TeeupDetail.svelte";

	let editMode = "null";
	let page = 'overview';
	let pageData = {};
	let editId = "null";

  function saveTeeUp(event) {
		editMode = null;
		editId = null;
  }

  function cancelEdit() {
		editMode = null;
		editId = null;
	}
	
	function showDetails(event) {
		page = "detailed";
		pageData.id = event.detail;
	}

	function startEdit(event){
		editMode = 'edit';
		editId = event.detail;
	}

	function closeDetails(){
		page = "overview";
		page.id={};
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
	{#if page === 'overview'}
    <!-- Display Add Teeup Button -->
    <div class="add-button">
      <Button on:click={() => (editMode = 'edit')}>Add New Teeup</Button>
    </div>

    {#if editMode === 'edit'}
      <EditTeeup 
			id={editId}
			on:submit={saveTeeUp}
			 on:cancel={cancelEdit}  />
    {/if}
    <TeeUpGrid 
		teeups={$teeups} 
		on:showdetails={showDetails}
		on:edit={startEdit} 
		/>

		{:else}
<TeeupDetail id={pageData.id} on:close={closeDetails}/>
		{/if}
  </main>
</div>
