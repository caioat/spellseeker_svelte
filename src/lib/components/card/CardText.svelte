<script lang="ts">
  import { parseManaCostAndText } from '$lib/common/common';

  export let effect: string;
  export let flavor: string;
</script>

<section>
  {#each parseManaCostAndText(effect) as cardPhrase}
    <p>
      {#each cardPhrase as cardText}
        {#if cardText.includes('svg')}
          <abbr style="--mana-symbol-url: url({cardText}); margin: 2px 1px -3px 1px;" />
        {:else}
          {cardText}
        {/if}
      {/each}
    </p>
  {/each}
  <p>{flavor}</p>
</section>

<style>
  abbr {
    background-image: var(--mana-symbol-url);
    display: inline-block;
    width: 16px;
    height: 16px;
  }
</style>
