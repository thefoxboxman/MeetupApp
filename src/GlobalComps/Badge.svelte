// ***** Badge - displays a badge using slot. Sticlty presentational *****
// ***** PARENT:  TeeUpItem      Has Children: nil  ******
// ***** PROPS: nil ******
// *****  DISPATCH: nil  ******

<script>
import { fly, scale } from 'svelte/transition';
</script>

<style>
  span {
    display: inline-block;
    margin: 0 0.25rem;
  }
</style>

<span transition:fly={{x:200, y:-100}}>
  <slot />
</span>
