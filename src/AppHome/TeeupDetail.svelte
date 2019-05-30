// ***** TeeupDetail - shows details of selected item. *****
// ***** PARENT:  App      Has Children:   "Button"  ******
// ***** PROPS: id  ******
// *****    CHILD: Button  "Close"  "Contact"   ******
// *****  DISPATCH: close   ******
// *****  PASSES thru EVENTS: nil  ******
// *****  STORE:  teeup_store  (subscribe/unsubscribe) CUSTOM FUNCTIONS: nil   *****


<script>
import { onDestroy, createEventDispatcher } from 'svelte'
import teeups from '../Stores/teeups_store.js'
import Button from '../GlobalComps/Button.svelte'

export let id; // allow us to pass in id from parent

let selectedTeeup; //to store the selected 

const unsubscribe = teeups.subscribe(items => {
	selectedTeeup = items.find(i => i.id === id)
})

const dispatch = createEventDispatcher();


onDestroy(() => {
	unsubscribe();
})

</script>

<style>
section {
  margin-top: 4rem;
}
.image {
  width: 100%;
  height: 25rem;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image {
  background: #e7e7e7;
}
.content {
  text-align: center;
  width: 80%;
  margin: auto;
}
h1 {
  font-size: 2rem;
  
  margin: 0.5rem 0;
}
h2 {
  font-size: 1.25rem;
  color: #6b6b6b;
}
p {
  font-size: 1.5rem;
}
</style>

<!-- html for display detail -->
<section>
<div class="image">
<img src="{selectedTeeup.imageSrc}" alt="{selectedTeeup.altText}">
</div>
<div class="content">
<h1>{selectedTeeup.title}</h1>
<h2>{selectedTeeup.date} at {selectedTeeup.time}</h2>
<h2>Venue: {selectedTeeup.venue}</h2>
<p>{selectedTeeup.description}</p>
<Button href="mailto:test@test.net"
>Conatct</Button>
<Button type="button" mode="outline" on:click={() => dispatch('close')}
>Close</Button>
</div>
</section>