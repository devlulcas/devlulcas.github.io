<!--TS-->
<script lang="ts">
  // Icons
  import {
    faBrain,
    faCode,
    faFeather,
    faEnvelope,
    faHome,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faGithub,
    faLinkedin,
    type IconDefinition,
  } from "@fortawesome/free-brands-svg-icons";

  // My components
  import { LinkItem } from "$models/entities/LinkItem";
  import Switch from "$lib/SwitchMode.svelte";
  import NavItem from "$lib/NavItem.svelte";
  import MenuButton from "$lib/MenuButton.svelte";
  import { content } from "$stores/Translation";

  interface NavItemProps {
    icon: IconDefinition;
    label: string;
    href: string;
  }

  // Anchor and SVG
  const menuItems: NavItemProps[] = [
    { icon: faHome, label: $content.nav.home, href: "/#start" },
    { icon: faCode, label: $content.nav.projects, href: "/#projects" },
    { icon: faBrain, label: $content.nav.skills, href: "/#skills" },
    { icon: faEnvelope, label: $content.nav.contact, href: "/#contact" },
    { icon: faFeather, label: $content.nav.blog, href: "/#blog" },
    { icon: faGithub, label: "Github", href: "github.com/devlulcas" },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      href: "linkedin.com/in/lucasalvesregodev/",
    },
  ];

  // Used for mobile menu toggle
  let mobileMode = true;

  function toggleMobileMode() {
    mobileMode = !mobileMode;
  }
</script>

<!--HTML-->
<header class:collapsed={mobileMode}>
  <div class="basic">
    <MenuButton on:click={toggleMobileMode} visible={mobileMode} />
    <img class="logo" src="/favicon.svg" alt="logo" title="Me" />
  </div>

  <nav class:visible={mobileMode}>
    <ul>
      {#each menuItems as item}
        <li>
          <NavItem {...item} />
        </li>
      {/each}
    </ul>
  </nav>

  <div class="switchs" class:visible={mobileMode}>
    <Switch />
  </div>
</header>

<!--CSS-->
<style lang="postcss">
  header,
  .basic,
  nav,
  ul,
  li,
  .switchs {
    display: flex;
  }

  header {
    z-index: 50;
    top: 0;
    position: sticky;
    height: var(--header-height);
    padding: 0 1.5rem;
    background: var(--primary);
    box-shadow: 0 0 1rem 0.1rem var(--primary-dark);

    & .basic {
      min-width: 2rem;
      width: 10%;
      align-items: center;
    }

    & nav {
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    & .switchs {
      width: 10%;
      align-items: center;
      justify-content: end;

      @media screen and (max-width: 70rem) {
        width: 100%;
        justify-content: center;
      }
    }
  }

  header .logo {
    height: 2.5rem;
  }

  header ul {
    width: 50%;
    height: 100%;
    justify-content: space-evenly;
  }

  /* MOBILE */
  @media screen and (max-width: 70rem) {
    .visible {
      opacity: 0;
      visibility: hidden;
      height: 0;
    }

    .collapsed {
      height: var(--header-height);
    }
    header {
      height: 100vh;
      flex-direction: column;
      align-items: center;
      transition: 0.3s;
    }

    header .basic {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }

    nav {
      opacity: 1;
      visibility: visible;
      transition: 0.3s;
      height: 83%;

      & ul {
        flex-direction: column;
        width: 100%;

        & li {
          justify-content: center;
        }
      }
    }
  }
</style>
