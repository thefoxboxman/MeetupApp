<script>
  import TeeUpItem from "./TeeUpItem.svelte";

  export let teeups;
</script>

<style>
  section {
    margin: 5px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  @media (min-width: 735px) {
    section {
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
    section {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<!-- Start HTML -->
<!-- Teeups Listing -->

<section class="teeups">
  {#each teeups as teeup}
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
