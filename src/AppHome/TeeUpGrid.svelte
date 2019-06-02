<script>
    // ********************************************
    // ***** TeeUpGrid - displays teeup items in responsive grid // each item in grid is displayed by TeeUpItem *****
    // ***** Parent App ******
    // ***** Props: teeups; ******
    // ***** Dispatch: edit; ******
    // ***** Has Child: TeeUpItem, TeeupFilter, Button  ******
    // ***** Passes events: on:showdetails and on:edit from TeeUpItem, on:edit from TeeupGrid ******
    // ********************************************

    import { createEventDispatcher } from 'svelte'
    import TeeUpItem from './TeeUpItem.svelte'
    import TeeupFilter from './TeeupFilter.svelte'
    import Button from '../GlobalComps/Button.svelte'
    import { fly, scale } from 'svelte/transition'
    import { flip } from 'svelte/animate'

    export let teeups

    let seeFavs = false
    let seeGoing = false

    const dispatch = createEventDispatcher()

    $: filteredTeeups = seeFavs
        ? teeups.filter(t => t.isFavourite)
        : seeGoing
        ? teeups.filter(t => t.isGoing)
        : teeups

    function setFilter(event) {
        if (event.detail === 1) {
            seeFavs = true
            seeGoing = false
        } else if (event.detail === 2) {
            seeFavs = false
            seeGoing = true
        } else if (event.detail === 0) {
            seeFavs = false
            seeGoing = false
        }
    }
</script>

<style>
    .filter-control {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem;
    }

    /* Add Teeup Button	*/
    .add-button {
        /* display: flex;
        align-items: center;
        justify-content: space-between; */
        margin: 1rem 0;
    }

    .no-meetups {
        margin: 5rem;
    }

    .teeups {
        margin: 5px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 735px) {
        .teeups {
            margin: 1rem;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1000px) {
        section {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1250px) {
        .teeups {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>

<!-- Start HTML -->
<!-- Teeups Listing -->
<!-- Display Filter Buttons -->
<section class="filter-control">
    <!-- Display Add Teeup Button -->
    <TeeupFilter on:select={setFilter} />
    <!-- Display Add Teeup Button -->
    <Button class="add-button" on:click={() => dispatch('edit')}>
        Add New Teeup
    </Button>
</section>
{#if filteredTeeups.length === 0}
    <h3 class="no-meetups">No meetups found, you can start adding some.</h3>
{/if}
<section class="teeups">
    {#each filteredTeeups as teeup (teeup.id)}
        <div transition:scale animate:flip={{ duration: 400 }}>
            <TeeUpItem
                id={teeup.id}
                title={teeup.title}
                imageSrc={teeup.imageSrc}
                altText={teeup.altText}
                description={teeup.description}
                venue={teeup.venue}
                date={teeup.date}
                time={teeup.time}
                isFav={teeup.isFavourite}
                isGoing={teeup.isGoing}
                on:showdetails
                on:edit />
        </div>
    {/each}
</section>
