<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { dailyRandomCard } from '$lib/stores/store';
  import { page } from '$app/stores';
  import * as Scry from 'scryfall-sdk';
  import CardImage from '$lib/components/card/CardImage.svelte';
  import CardText from '$lib/components/card/CardText.svelte';
  import { parseManaCostAndText } from '$lib/common/common';

  let card: Scry.Card;

  onMount(async () => {
    card = await Scry.Cards.byName(get(page).params.id);
    console.log(card);
  });
</script>

<section>
  {#if card}
    <CardImage {card} />
    <h1 class="flex">
      <span class="mr-2">{card?.name}</span>
      <span class="mt-[2px]">
        {#each parseManaCostAndText(card?.getCost()) as cardManaCost}
          <abbr style="--mana-symbol-url: url({cardManaCost});" />
        {/each}
      </span>
    </h1>
    <p>{card?.type_line}</p>
    <div>
      <CardText effect={card?.getText()} flavor={card?.flavor_text} />
    </div>
  {/if}
</section>

<style>
  abbr {
    background-image: var(--mana-symbol-url);
    display: inline-block;
    width: 15px;
    height: 15px;
  }
</style>
