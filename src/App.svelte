<script>
    //  ***** App - provides functionality to store teeups/meetings.
    //  ***** App provides full CRUD access.
    //  ***** Teeups can be marked favourite and/or going.

    import NavHeader from './GlobalComps/NavHeader.svelte'
    import TeeUpGrid from './AppHome/TeeUpGrid.svelte'
    import TextInput from './GlobalComps/TextInput.svelte'
    import Button from './GlobalComps/Button.svelte'
    import EditTeeup from './AppHome/EditTeeup.svelte'
    import teeups from './Stores/teeups_store.js'
    import TeeupDetail from './AppHome/TeeupDetail.svelte'
    import LoadingSpinner from './GlobalComps/LoadingSpinner.svelte'

    let editMode = 'null'
    let page = 'overview'
    let pageData = {}
    let editId
    let isLoading = true //test line

    fetch('https://teeupapp-21db3.firebaseio.com/teeups.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Fetching fucked up!')
            }
            return res.json()
        })
        .then(data => {
            const loadedTeeups = []
            for (const key in data) {
                loadedTeeups.push({
                    ...data[key],
                    id: key,
                })
            }
            setTimeout(() => {
                //test line
                isLoading = false //test line
                teeups.setTeeups(loadedTeeups) //this line stays
            }, 1000) //test line
        })
        .catch(err => {
            isLoading = false //test line
            console.log(err)
        })

    function saveTeeUp(event) {
        editMode = null
        editId = null
    }

    function cancelEdit() {
        editMode = null
        editId = null
    }

    function showDetails(event) {
        page = 'detailed'
        pageData.id = event.detail
    }

    function startEdit(event) {
        editMode = 'edit'
        editId = event.detail
    }

    function closeDetails() {
        page = 'overview'
        page.id = ''
    }
</script>

<style>
    /* ************************  STYLES  *************************** */
    /* Grid layout for Appl */
    #grid-container {
        display: grid;
        max-width: 1300px;
        height: 100vh;
        grid-template-columns: 1fr 18fr 1fr;
        grid-template-rows: 50px 1fr;

        grid-template-areas:
            '. head .'
            '. main .';
    }

    #grid-container > #nav-bar {
        grid-area: head;
    }

    #grid-container > #main-content {
        grid-area: main;
    }
</style>

<!-- ********************** Start App HTML ********************** -->

<!-- Grid Container for Whole App -->
<div id="grid-conatiner">

    <!-- Navigation Header -->
    <header id="nav-bar">
        <NavHeader />
    </header>

    <!-- Start Main Content -->
    <main id="main-content">
        {#if page === 'overview'}
            <!-- enter edit mode -->
            {#if editMode === 'edit'}
                <EditTeeup
                    id={editId}
                    on:submit={saveTeeUp}
                    on:cancel={cancelEdit} />
            {/if}
            <!--end edit -->
            <!-- Display Teeups  -->
            <!-- if is loading show spinner -->
            {#if isLoading}
                <LoadingSpinner />
            {:else}
                <!-- display grid -->
                <TeeUpGrid
                    teeups={$teeups}
                    on:showdetails={showDetails}
                    on:edit={startEdit} />
            {/if}
            <!--end show grid -->
        {:else}
            <!-- Show Detail of Selected Item -->
            <TeeupDetail
                id={pageData.id}
                on:edit={(editMode = 'edit')}
                on:close={closeDetails} />
        {/if}
        <!--end show detail -->
    </main>
</div>
