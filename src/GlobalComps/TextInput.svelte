// ***** TextInput - faciliates text input dynamically  *****
// ***** PARENT:  EditTeeup       ******
// ***** PROPS: controlType, type, id, label, rows, value, errorMessage  ******




<script>
  export let controlType=null;
  export let type = "text"; //default to text as type
  export let id;
  export let label;
  export let rows=null;
  export let value;
  export let valid = true;
  export let errorMessage = "";

  /* Local state for managing first touch of each input*/
  let touched=false;
  
</script>

<style>
 
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: #e40763;
    outline: none;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 90%;
	margin: 0.25rem 0;
	margin-left: 2rem;
  }

  .invalid{
	  border-color: red;
	  background: #f0c6c6
  }

  .error-message{
	  color: red;
   }
</style>

<!-- Start HTML -->

<div class="form-control">
  <label for={id}>{label}</label>
  {#if controlType === 'textarea'}
    <textarea class:invalid="{!valid && touched}" {rows} {id} {value} on:input on:blur={()=>touched=true } />
  {:else}
    <input class:invalid="{!valid && touched}" {type} {id} {value} on:input on:blur={()=>touched=true} />
  {/if}
  {#if errorMessage && !valid && touched}
<p class="error-message">{errorMessage} </p>
  {/if}
</div>
