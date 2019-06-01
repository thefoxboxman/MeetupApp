// ***** EditTeeup - opens a modal to allow the Add or Update of single teeup items in store *****
// ***** PARENT:  App      Has Children: "Text Input"  "Modal"  "Button"  ******
// ***** PROPS: id  ******
// *****    CHILD: Modal   ******
// *****    CHILD: TextInput      ******
// *****    CHILD: Button  "Save"     ******
// *****  DISPATCH: submit with addTeeup   &   submit with updateTeeup   ******
// *****  PASSES thru EVENTS: nil  ******
// *****  STORE:  teeup_store      *****
// *****  CUSTOM FUNCTIONS: addTeeup(teeupData)   updateTeeup(id, teeupData)  deleteTeeup(id) *****


<script>
  import { createEventDispatcher } from "svelte";

  import TextInput from "../GlobalComps/TextInput.svelte";
  import Button from "../GlobalComps/Button.svelte";
  import Modal from "../GlobalComps/Modal.svelte";
  import { isEmpty } from "../Utilities/validation.js";
  import teeups from "../Stores/teeups_store.js";

 export let id = null;
let selectedTeeup;

  let date = "";
  let time = "";
  let title = "";
  let description = "";
  let imageSrc = "";
  let altText = "";
	let venue = "";
	
	//edit existing teeup get current date for each variable by subscribe to store
	if (id) {
	const unsubscribe = teeups.subscribe(items => {
	 selectedTeeup = items.find(i => i.id === id)
	date = selectedTeeup.date; 
		time = selectedTeeup.time;
		title = selectedTeeup.title;
		description = selectedTeeup.description;
		imageSrc = selectedTeeup.imageSrc;
		altText = selectedTeeup.altText;
		venue = selectedTeeup.venue;	
})
	unsubscribe();
}
//setup dispatcher
	const dispatch = createEventDispatcher();
	
// check validity of indivial input fields
  $: dateValid = !isEmpty(date);
  $: timeValid = !isEmpty(time);
  $: titleValid = !isEmpty(title);
  $: descriptionValid = !isEmpty(description);
  $: imageSrcValid = !isEmpty(imageSrc);
  $: altTextValid = !isEmpty(altText);
	$: venueValid = !isEmpty(venue);

	//check the validity of the form as a whole
  $: formIsValid =
    dateValid &&
    timeValid &&
    titleValid &&
    descriptionValid &&
    imageSrcValid &&
    altTextValid &&
		venueValid;

//dispatch cancel
 function cancel() {
    dispatch("cancel");
	}
	
	//delete teeup
	function deleteTeeup() {
teeups.deleteTeeup(id);
dispatch("submit");
	}

		//submit new teeup
  function submitForm() {
    const teeupData = {
      date: date,
      time: time,
      title: title,
      description: description,
      imageSrc: imageSrc,
      altText: altText,
      venue: venue
		};
		//if has id use update
			if(id){
teeups.updateTeeup(id, teeupData);
dispatch("submit");
//else use add
			} else {
		fetch("https://teeupapp-21db3.firebaseio.com/teeups.json", {
			method: 'POST',
			body: JSON.stringify({...teeupData, isFavourite: false, isGoing: false}),
			headers:{'Content-Type': 'application/json'}
		})
		.then(res => {
			if (!res.ok){
				throw new Error('An error occurred, please try again')
			}
			return res.json();
		})
		.then(data => {
			teeups.addTeeup({...teeupData, isFavorite: false, isGoing: false, id: data.name});
		})
		.catch(err => {
			console.log(err)
		});		
    teeups.addTeeup(teeupData);
    dispatch("submit");
	}
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
<!-- Cancel Button -->
<Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <!-- Save Button to submit form  but only if whole form is valid-->
 <Button type="submit" disabled={!formIsValid}>Save</Button>
 <!-- Delete Button -->
 <Button type="button"  on:click={deleteTeeup} >Delete</Button>
  </form>
</Modal>
