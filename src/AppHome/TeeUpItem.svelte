<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../GlobalComps/Button.svelte";


  export let id;
  export let title;
  export let description;
  export let imageSrc;
  export let altText;
  export let venue;
  export let date;
  export let time;
  export let isFav;
  

  const dispatch = createEventDispatcher();
</script>

<style>
  article {
    width: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem 5rem 1rem 5rem;
  }

  header,
  .content,
  footer {
    padding: 2rem;
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
    text-align: left;
  }
</style>

<!-- Start Html  -->

<article>
  <header>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </header>
  <div class="image">
    <img src={imageSrc} alt={altText} />
  </div>
  <div class="content">
    <p class="text">Birthday party at {venue} on the {date} at {time}.</p>
  </div>
  <footer>
    <Button type="button" 
	caption="Show Details" />
    <Button
      mode="outline"
		 buttonColour="{isFav ? null : 'success'}";
	
      type="button"
      caption="{isFav ? 'Unfavourite': 'Favourite'}"
      on:click={() => dispatch('togglefavourite', id)} />
    <Button href="mailto:john@eaglefox.net" caption="Contact" />

  </footer>
</article>
