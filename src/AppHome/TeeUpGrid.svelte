<script>
import TeeUpItem from "./TeeUpItem.svelte";

export let teeups;
</script>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 768px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }


</style>

<!-- Start HTML -->
<!-- Teeups Listing -->
	<section id="teeups">
	{#each teeups as teeup}
	<TeeUpItem 
	title={teeup.title}
	imageSrc={teeup.imageSrc}
	altText={teeup.altText}
	description={teeup.description}
	venue={teeup.venue}
	date={teeup.date}
	time={teeup.time}
	
	/>
	{/each}
</section>