<!--TS-->
<script lang="ts">
  export let label: string;
  export let name: string;
  export let checked = false;
  export let value: any;
  export let group: string;
</script>

<!--HTML-->
<label>
  <input bind:group type="radio" id={name} {name} {value} {checked} />
  <p class="label">
    {label}
  </p>
</label>

<!--CSS-->
<style lang="postcss">
  input[type="radio"] {
    display: none;
    &:checked {
      & + .label {
        border-color: var(--on-primary);
      }
    }
  }

  .label {
    width: fit-content;
    padding: min(1.3vh, 2vw) min(2.5vh, 2.5vw);
    font-size: min(2vh, 3vw);
    font-weight: 800;
    border: 0.2rem solid;
    border-radius: 1rem;
    border-color: var(--primary-light);
    cursor: pointer;
    transition: box-shadow 0.2s, border-color 0.1s;
    color: var(--on-primary);
    background: var(--primary-light);
    box-shadow: 0rem 0.2rem 0.3rem 0.1rem var(--primary-dark);

    &:hover {
      box-shadow: 0rem 0.1rem 0.1rem 0.1rem var(--primary-dark);
    }
  }
</style>
