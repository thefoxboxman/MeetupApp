// ***** NAME TeeupFilter  to show filtered selection of teeups *****
// ***** PARENT:        Has Children:  ******
// ***** PROPS:  ******
// *****    CHILD:    ******

// *****  DISPATCH:  "all, 0" "favs, 1"  "isgoing, 2" ******
// *****  PASSES THRU EVENTS: nil  ******
// *****  STORE:    CUSTOM FUNCTIONS:    *****

<script>
import { createEventDispatcher } from 'svelte';


const dispatch = createEventDispatcher();

function showAll(){
dispatch("select", 0);
}

function showFavs(){
dispatch("select", 1);	
}

function showGoing(){
dispatch("select", 2);	
}
</script>

<style>
  div {
    font-size: 0px;
  }

  button {
    background: #aaaaaa;
    font: inherit;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 0.5rem 1rem;
  }

  button:focus {
    outline: none;
  }

  button:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  button:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  button:hover,
  button:active,
  .active {
    background: #cf0056;
    border-color: #cf0056;
    color: white;
  }
</style>

<!-- Start HTML -->
<div>
<button type=button on:click={showAll}  >All</button>
<button type=button on:click={showFavs} >Favourites</button>
<button type=button on:click={showGoing} >Going</button>
</div>