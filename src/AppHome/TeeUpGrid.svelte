// ***** TeeUpGrid - displays teeup items in responsive grid 
//           each item in grid is displayed by TeeUpItem *****
// ***** Parent  App       ******
// ***** Props: teeups;  ******
// *****  Dispatch: nil;    ******
// *****    Has Child: TeeUpItem TeeupFilter  ******
// *****  Passes events: on:showdetails and on:edit from TeeUpItem  ******


<script>
  import TeeUpItem from "./TeeUpItem.svelte";
import TeeupFilter from "./TeeupFilter.svelte"

	export let teeups;

	let seeFavs = false;
	let seeGoing = false;

	$:filteredTeeups = seeFavs ? teeups.filter(t => t.isFavourite) : seeGoing ? teeups.filter(t => t.isGoing) : teeups;

	function setFilter(event){
			
			if(event.detail === 1){
				seeFavs = true;
				seeGoing = false;
				
			} else if (event.detail === 2) {
				seeFavs = false;
				seeGoing = true;
			
			} else if (event.detail === 0) {
				seeFavs = false;
				seeGoing = false;
			}
	}

	
</script>

<style>

.filter_control{
	margin: 1rem;
 }

  .teeups {
    margin: 5px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 735px) {
    .teeups {
      margin: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1250px) {
    .teeups {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<!-- Start HTML -->
<!-- Teeups Listing -->
<div class="filter_control">
<TeeupFilter on:select={setFilter} />
</div>
<section class="teeups">
  {#each filteredTeeups as teeup}
    <TeeUpItem
      id={teeup.id}
      title={teeup.title}
      imageSrc={teeup.imageSrc}
      altText={teeup.altText}
      description={teeup.description}
      venue={teeup.venue}
      date={teeup.date}
      time={teeup.time}
      isFav={teeup.isFavourite}
      isGoing={teeup.isGoing}
			on:showdetails
			on:edit />
  {/each}
</section>
