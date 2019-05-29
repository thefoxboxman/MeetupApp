<script>
  import { createEventDispatcher } from "svelte";

  import TextInput from "../GlobalComps/TextInput.svelte";
  import Button from "../GlobalComps/Button.svelte";
  import Modal from "../GlobalComps/Modal.svelte";
  import { isEmpty } from "../Utilities/validation.js";
  import teeups from "../Stores/teeups_store.js";

  let date = "";
  let time = "";
  let title = "";
  let description = "";
  let imageSrc = "";
  let altText = "";
  let venue = "";

  const dispatch = createEventDispatcher();

  $: dateValid = !isEmpty(date);
  $: timeValid = !isEmpty(time);
  $: titleValid = !isEmpty(title);
  $: descriptionValid = !isEmpty(description);
  $: imageSrcValid = !isEmpty(imageSrc);
  $: altTextValid = !isEmpty(altText);
  $: venueValid = !isEmpty(venue);
  $: formIsValid =
    dateValid &&
    timeValid &&
    titleValid &&
    descriptionValid &&
    imageSrcValid &&
    altTextValid &&
    venueValid;

  function submitForm() {
    const newTeeUpData = {
      date: date,
      time: time,
      title: title,
      description: description,
      imageSrc: imageSrc,
      altText: altText,
      venue: venue
    };

    // Add new teeup to store by calling addTeeup method and passing newTeeUpData
    teeups.addTeeup(newTeeUpData);
    dispatch("submit");
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<!-- Start HTML -->
<Modal title="Add New Teeup" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="date"
      label="Date"
      value={date}
      on:input={event => (date = event.target.value)}
      valid={dateValid}
      errorMessage="Please enter a valid date" />

    <TextInput
      id="time"
      label="Time"
      value={time}
      on:input={event => (time = event.target.value)}
      valid={timeValid}
      errorMessage="Please enter a valid time" />

    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={event => (title = event.target.value)}
      valid={titleValid}
      errorMessage="Please enter a valid title" />

    <TextInput
      form-control="textarea"
      rows="3"
      id="description"
      label="Description"
      value={description}
      on:input={event => (description = event.target.value)}
      valid={descriptionValid}
      errorMessage="Please enter a valid description" />

    <TextInput
      id="imageSrc"
      label="Image Source"
      value={imageSrc}
      on:input={event => (imageSrc = event.target.value)}
      valid={imageSrcValid}
      errorMessage="Please enter a valid image source" />

    <TextInput
      id="altText"
      label="Alt Text for Image"
      value={altText}
      on:input={event => (altText = event.target.value)}
      valid={altTextValid}
      errorMessage="Please enter a valid alternative text" />

    <TextInput
      id="venue"
      label="Venue"
      value={venue}
      on:input={event => (venue = event.target.value)}
      valid={venueValid}
      errorMessage="Please enter a valid venue" />

    <!-- Save Button to submit form  but only if whole form is valid-->

    <Button type="submit" disabled={!formIsValid}>Save</Button>
  </form>
</Modal>
