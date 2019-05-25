<script>
  import { createEventDispatcher } from "svelte";

  import TextInput from "../GlobalComps/TextInput.svelte";
  import Button from "../GlobalComps/Button.svelte";
import Modal from "../GlobalComps/Modal.svelte";

  let date = "";
  let time = "";
  let title = "";
  let description = "";
  let imageSrc = "";
  let altText = "";
  let venue = "";

  const dispatch = createEventDispatcher();

  function submitForm() {
    dispatch("submit", {
      date: date,
      time: time,
      title: title,
      description: description,
      imageSrc: imageSrc,
      altText: altText,
      venue: venue
    });
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<!-- Start HTML -->
<Modal  title="Add New Teeup" on:cancel>
<form on:submit|preventDefault={submitForm}>
  <TextInput
    id="date"
    label="Date"
    value={date}
    on:input={event => (date = event.target.value)} />

  <TextInput
    id="time"
    label="Time"
    value={time}
    on:input={event => (time = event.target.value)} />

  <TextInput
    id="title"
    label="Title"
    value={title}
    on:input={event => (title = event.target.value)} />

  <TextInput
    form-control="textarea"
    rows="3"
    id="description"
    label="Description"
    value={description}
    on:input={event => (description = event.target.value)} />

  <TextInput
    id="imageSrc"
    label="Image Source"
    value={imageSrc}
    on:input={event => (imageSrc = event.target.value)} />

  <TextInput
    id="altText"
    label="Alt Text for Image"
    value={altText}
    on:input={event => (altText = event.target.value)} />

  <TextInput
    id="venue"
    label="Venue"
    value={venue}
    on:input={event => (venue = event.target.value)} />
  <!-- <Button type="submit">Save</Button> -->
</form>
</Modal>