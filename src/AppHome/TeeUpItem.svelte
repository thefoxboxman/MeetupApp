// ***** TeeUpItem - displays individual teeup items 
//           each item in grid is displayed by TeeUpItem *****
// ***** PARENT:  TeeUpGrid      Has Children: Badge  &  Button  ******
// ***** PROPS: id, title, description, imageSrc, altText, venue, date, time, isFav, isGoing;  ******
// *****  DISPATCH: on:click(showdetails)  on:click(edit)  ******
// *****    HAS CHILD: Badge "isFavourite"  & "isGoing"  ******
// *****    HAS CHILD: Button  "Show Details"  "Favourite/Unfavourite" "RSVP/Going"  "Edit"   ******
// *****  PASSES EVENTS: nil  ******
// *****  STORE:  teeup_store   CUSTOM FUNCTIONS: tooglefavourite    toogleisgoing   *****


<script>
import {createEventDispatcher} from 'svelte';
  import Button from "../GlobalComps/Button.svelte";
  import Badge from "../GlobalComps/Badge.svelte";
  import teeups from "../Stores/teeups_store.js";


  export let id;
  export let title;
  export let description;
  export let imageSrc;
  export let altText;
  export let venue;
  export let date;
  export let time;
  export let isFav = true;
	export let isGoing = true;
	
	const dispatch = createEventDispatcher();

  function togglefavourite() {
    teeups.toggleFavourite(id); //call togglefavourite method on teeups store
  }

  function toggleisgoing(event) {
    teeups.toggleIsGoing(id); //call toggleisgoing method on teeups store
  }
</script>

<style>
  article {
    min-width: 300px;
    max-width: 400px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 0.8rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    margin: 0;
  }

  .content {
    height: 4rem;
  }

  .fav {
    font-size: 1.5rem;
  }

  footer > .button {
    margin-right: 30px;
    margin-bottom: 10px;
  }
</style>

<!-- Start Html  -->

<article  >

  <header>
    <h1  >
       {title}
      <!-- Add isFav Badge -->
      {#if isFav}
        <Badge class="fav">❤️</Badge>
      {/if}
      <!-- Add isGoing Badge -->
      {#if isGoing}
        <Badge class="isgoing">✔️</Badge>
      {/if}
    </h1>
    <h2>{description}</h2>
  </header>
  <div class="image">
    <img src={imageSrc} alt={altText} />
  </div>
  <div class="content">
    <p class="text">Birthday party at {venue} on the {date} at {time}.</p>
  </div>
  <footer>
    <!--Show Details Button -->
    <Button type="button" on:click={() => dispatch('showdetails',id)}>Show Details</Button>

    <!-- Favourite Button -->
    <Button
      type="button"
      mode="outline"
      buttonColour="{isFav ? null : 'success'};"
      on:click={togglefavourite}>
       {isFav ? 'Unfavourite' : 'Favourite'}
    </Button>

    <!-- Going Button -->
    <Button
      type="button"
      mode="outline"
      buttonColour="{isGoing ? null : 'success'};"
      on:click={toggleisgoing}>
       {isGoing ? 'Going' : 'RSVP'}
    </Button>

    <!-- Edit Button -->
    <Button type="button" mode="outline"  on:click={()=>dispatch('edit',id)} >Edit</Button>

  </footer>
</article>
