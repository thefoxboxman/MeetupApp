// ***** Modal -  using slots. Default slot for content. Named slot "footer"  *****
// ***** PARENT:  EditTeeup      Has Children:  "Button"  ******
// ***** PROPS: title  ******
// *****    CHILD: Button on:click "Close"   (on:click of backrdop "Close")  ******
// *****  DISPATCH: closeModel -> "cancel"   ******
// *****  PASSES thru EVENTS: nil  ******



<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  export let title;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("cancel");
  }
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 10vh;
    left: 10%;
    width: 80%;
    max-height: 80vh;
    background: white;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    overflow: scroll;
  }

  h1 {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #ccc;
    font-family: "Roboto Slab", sans-serif;
  }

  .content {
	 padding: 1rem;
	 font-size: 0.8rem;
  }

  footer {
    padding: 1rem;
  }

  @media (min-width: 735px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
	 }
	 .content{
		 font-size: 1rem;
	 }
  }
</style>

<div class="modal-backdrop" on:click={closeModal} />
<div class="modal">
  <h1>{title}</h1>
  <div class="content">
    <slot />
  </div>
  <footer>
    <slot name="footer">
      <Button on:click={closeModal}>Close</Button>
    </slot>
  </footer>
</div>
