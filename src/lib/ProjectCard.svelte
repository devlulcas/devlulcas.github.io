<!--TS-->
<script lang="ts">
  import ButtonSpin from "$lib/ButtonSpin.svelte";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faGlobe } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";

  import type { ProjectInterface } from "$models/interfaces/Project";
  import { content } from "$stores/Translation";

  export let project: ProjectInterface;

  const previewImage = {
    image: `background-image: url(${project.previewImage.src});`,
    alt: `image of ${project.previewImage.alt}`,
  };
</script>

<!--HEAD-->
<svelte:head>
  <link rel="prefetch" as="image" href={project.previewImage.src} />
</svelte:head>

<!--HTML-->
<article class="card">
  <figure
    class="image-container"
    aria-label={previewImage.alt}
    style={previewImage.image}
  />

  <section class="content">
    <h3>{project.name}</h3>

    <div class="about">
      <div class="about__information">
        <a
          class="url"
          href={project.liveUrl}
          title={$content.projectCard.liveTitle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fa icon={faGlobe} />
          Live
        </a>

        <a
          class="url"
          href={project.codeUrl}
          title={$content.projectCard.codeTitle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fa icon={faGithub} />
          Github
        </a>
      </div>

      <ButtonSpin href={project.liveUrl} label={$content.projectCard.more} />
    </div>
  </section>
</article>

<!--CSS-->
<style lang="postcss">
  .card {
    min-width: 90%;
    aspect-ratio: 1/1;
    display: block;
    border-radius: 2rem;
    background: var(--on-primary);

    border: 0.2rem solid var(--primary-dark);
    box-shadow: 0.4rem 0.4rem var(--primary-dark);
    transition: transform 0.2s;
    overflow: hidden;
    color: var(--primary);

    &:hover {
      transform: scale(1.03);
    }

    @media screen and (min-width: 70rem) {
      height: 100%;
      min-width: 40vh;
    }
  }

  .image-container {
    height: 50%;
    position: relative;
    background-size: cover;
    background-position: top;
    transition: 1s all;
    outline: 2px solid var(--primary);

    &:hover {
      background-position: bottom;
      animation: slide 2s;
    }
  }

  .content {
    height: 50%;
    padding: 1rem;
  }
  h3 {
    text-transform: capitalize;
    font-size: 3.5vh;
    font-weight: 700;
  }

  .about {
    display: flex;
    height: 65%;
    font-size: min(2.5vh, 5vw);

    & .about__information {
      width: 100%;
    }
  }

  .url {
    text-decoration: none;
    color: var(--primary);
    display: flex;
    align-items: center;
    height: 50%;
    gap: 0.8ch;
    cursor: pointer;

    &:hover {
      color: var(--special);
    }
  }
</style>
