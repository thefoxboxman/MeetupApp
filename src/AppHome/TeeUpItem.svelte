<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../GlobalComps/Button.svelte";
  import Badge from "../GlobalComps/Badge.svelte";

  export let id;
  export let title;
  export let description;
  export let imageSrc;
  export let altText;
  export let venue;
  export let date;
  export let time;
  export let isFav;
  export let isGoing;

  const dispatch = createEventDispatcher();
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
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
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

<article>

  <header>
    <h1>
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
    <!-- Favourite Button -->
    <Button  type="button">Show Details</Button>
    <Button
	 
      mode="outline"
      buttonColour={isFav ? null : 'success'}
      ;
      type="button"
      on:click={() => dispatch('togglefavourite', id)}>
       {isFav ? 'Unfavourite' : 'Favourite'}
    </Button>
    <!-- Going Button -->
    <Button
	 
	 type="button"
      mode="outline"
      buttonColour={isGoing ? null : 'success'};
      on:click={() => dispatch('toggleisgoing', id)}>
       {isGoing ? 'Going' : 'RSVP'}
    </Button>
    <!-- Contact Button -->
    <Button  href="mailto:test@test.net">Contact</Button>

  </footer>
</article>
