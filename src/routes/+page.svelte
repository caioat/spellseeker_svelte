<script lang="ts">
  import * as Scry from 'scryfall-sdk';
  import { goto } from '$app/navigation';
  import RandomCard from '$lib/components/card/RandomCard.svelte';

  let cardNameSearch = '';
  let cardsSearched: string[] = [];

  let inputSearchTimeout: NodeJS.Timeout;

  const sanitizeCardName = (cardName: string) => cardName.replace(/[^a-zA-Z0-9 ]/g, '');

  $: if (cardNameSearch.length > 0) {
    clearTimeout(inputSearchTimeout);

    inputSearchTimeout = setTimeout(async () => {
      cardsSearched = await Scry.Cards.autoCompleteName(cardNameSearch);
    }, 600);
  } else {
    clearTimeout(inputSearchTimeout);
    cardsSearched = [];
  }
</script>

<section class="container mx-auto">
  <p>This is the random card of the day:</p>

  <RandomCard />

  <input class="input mt-2" type="search" bind:value={cardNameSearch} />

  {#if cardsSearched.length > 0}
    <select class="select mt-2 max-h-96 overflow-auto" size={cardsSearched.length} multiple>
      {#each cardsSearched as cardName}
        <option
          value={cardName}
          on:click={() => goto(`/card-details/${sanitizeCardName(cardName)}`)}
        >
          {cardName}
        </option>
      {/each}
    </select>
  {/if}
</section>

<style>
</style>
