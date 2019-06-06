<script>

</script>

<style>
    header {
        background-color: var(--main-bg-color);
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 999;
        display: grid;
        grid-template-columns: 5fr 1fr;
        width: 100vw;
        grid-template-areas: ' logo nav';
    }

    .logo {
        grid-area: logo;
        font-family: 'Rock Salt', cursive;
        color: var(--splash-color);
        margin: 0;

        /* style as neccessary*/
    }
    /* no need to display checkbox. It is still there, we just can't see it. We will create hamburger icon in span element inside lable*/
    .nav-toggle {
        display: none;
    }

    .nav-toggle-label {
        display: flex;
        align-items: center;

        position: absolute;
        top: 0;
        right: 0;
        margin-right: 2rem;
        color: #000; /*                  ????? this*/
        height: 100%;
    }
    /* create hamburger icon middle line*/
    .nav-toggle-label span,
    .nav-toggle-label span::before,
    .nav-toggle-label span::after {
        display: block;
        background: var(--main-nav-color); /*makes hamburger invisible */
        height: 2px;
        width: 2rem;
        border-radius: 2px;
        position: relative;
    }
    /* create hamburger icon top and bottom lines. To begin with all three lines are overlapping or stacked*/
    .nav-toggle-label span::before,
    .nav-toggle-label span::after {
        content: ''; /* must have empty content */
        position: absolute;
    }
    /* Move bottom line down*/
    .nav-toggle-label span::before {
        bottom: 7px;
    }
    /* Move bottom line up*/
    .nav-toggle-label span::after {
        top: 7px;
    }

    nav {
        position: absolute;
        text-align: left;
        top: 100%; /* this aligns the top of the nav dropdown with the bottom of the header element */
        left: 0;
        background-color: var(--main-bg-color);
        width: 100%;
        /* add transition to menu openning and closing*/
        transform: scale(1, 0);
        transform-origin: top;
        transition: transform 400ms ease-in-out;
    }

    nav ul {
        margin: 0;
        padding: 0;

        list-style: none;
    }

    nav li {
        margin-bottom: 1rem;
        margin-left: 1rem;
    }

    nav a {
        color: var(--main-nav-color);
        text-decoration: none;
        font-size: 1.2rem;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 150ms ease-in-out;
    }
    nav a:hover {
        color: var(--main-text-color);
    }
    /* toggle nav off and on */
    /* add transition to menu openning and closing*/
    .nav-toggle:checked ~ nav {
        transform: scale(1, 1);
    }

    .nav-toggle:checked ~ nav a {
        opacity: 1;
        transition: opacity 250ms ease-in-out 250ms;
    }

    @media screen and (min-width: 800px) {
        .nav-toggle-label {
            display: none;
        }
        header {
            display: grid;
            grid-template-columns: 100px 1fr 2fr 100px;

            grid-template-areas: ' . logo nav .';
        }

        .logo {
            grid-area: logo;
        }

        nav {
            all: unset; /*to remove all previous settings */
            grid-area: nav;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        nav a {
            display: none;
            opacity: 1;
            position: relative;
        }

        nav a::before {
            content: '';
            display: block;
            height: 5px;
            background: red;

            position: absolute;
            top: -0.75rem;
            left: 0;
            right: 0;
            transform: scale(0, 1);
            transition: transform ease-in-out 250ms;
        }

        nav a:hover::before {
            transform: scale(1, 1);
            transform-origin: left;
        }
        nav ul {
            display: flex;
            justify-content: flex-end;
        }

        nav li {
            margin-left: 2rem;
            margin-bottom: 0;
        }
    } /* end of media query */
</style>

// ***** NavHeader ***** // ***** Parent: App ==> Props: nil; Dispatch: nil;
******
<!-- Start HTML -->
<header>
    <h2 class="logo">Tee-Up</h2>
    <!-- must have id for form css to work as form only looks for an ID. Will not work with class -->
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <nav>
        <ul>
            <li>
                <a href="#" />
            </li>
            <li>
                <a href="#" />
            </li>
            <li>
                <a href="#" />
            </li>
            <li>
                <a href="#" />
            </li>
        </ul>
    </nav>

    <label for="nav-toggle" class="nav-toggle-label">
        <span />
    </label>
</header>
