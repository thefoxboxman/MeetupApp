// ***** NAME: TeeupFilter  to show filtered selection of teeups *****
// ***** PARENT:        Has Children:  ******
// ***** PROPS:  ******
// *****    CHILD:    ******

// *****  DISPATCH:  "all, 0" "favs, 1"  "isgoing, 2" ******
// *****  PASSES THRU EVENTS: nil  ******
// *****  STORE:    CUSTOM FUNCTIONS:    *****

<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

let selected_button = 0;

function showAll(){
dispatch("select", 0);
selected_button = 0;
}

function showFavs(){
dispatch("select", 1);
selected_button = 1;	
}

function showGoing(){
dispatch("select", 2);
selected_button = 2;	
}
</script>

<style>
  div {
    font-size: 0px;
  }

  button {
    background: #aaaaaa;
    font: inherit;
    font-size: 0.8rem;
    cursor: pointer;
    border: 2px solid white;
		border-radius: 5px;
    padding: 0.5rem 1rem;
  }

  button:focus {
    outline: none;
  }
/* 
  button:first-of-type {
    border-radius: 5px ;
  }

  button:last-of-type {
    border-radius: 0 5px 5px 0;
  } */

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
<button type=button 
class:active={selected_button === 0}
on:click={showAll}  >All</button>
<button type=button
class:active={selected_button === 1}
 on:click={showFavs} >Favourites</button>
<button type=button 
class:active={selected_button === 2}
on:click={showGoing} >Going</button>
</div>