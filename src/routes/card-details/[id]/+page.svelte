<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { page } from '$app/stores';
  import * as Scry from 'scryfall-sdk';
  import CardImage from '$lib/components/card/CardImage.svelte';
  import CardText from '$lib/components/card/CardText.svelte';
  import { parseManaCost } from '$lib/common/common';
  import { ProgressRadial } from '@skeletonlabs/skeleton';

  const getCardByName = () => Scry.Cards.byName(get(page).params.id);
</script>

<section>
  {#await getCardByName()}
    <!-- promise is pending -->
    <ProgressRadial ... stroke={50} meter="stroke-primary-500" track="stroke-primary-500/30" />
  {:then card}
    {#if card.card_faces.length > 1}
      <!-- content here -->
      <CardImage {card} />
      {#each card.card_faces as cardFace}
        <!-- content here -->
        <hr class="mt-[6px]" />
        <h1 class="flex">
          <span class="mr-2">{cardFace.name}</span>
          <span class="mt-[2px]">
            {#each parseManaCost(cardFace?.mana_cost) as cardManaCost}
              <abbr style="--mana-symbol-url: url({cardManaCost});" />
            {/each}
          </span>
        </h1>
        <p>{cardFace?.type_line}</p>
        <div>
          <CardText effect={cardFace?.oracle_text} flavor={cardFace?.flavor_text} />
        </div>
      {/each}
    {:else}
      <CardImage {card} />
      <hr class="mt-[6px]" />
      <h1 class="flex">
        <span class="mr-2">{card?.name}</span>
        <span class="mt-[2px]">
          {#each parseManaCost(card?.mana_cost) as cardManaCost}
            <abbr style="--mana-symbol-url: url({cardManaCost});" />
          {/each}
        </span>
      </h1>
      <p>{card?.type_line}</p>
      <div>
        <CardText effect={card?.oracle_text} flavor={card?.flavor_text} />
      </div>
    {/if}
  {:catch error}
    <!-- promise was rejected -->
  {/await}
</section>

<style>
  abbr {
    background-image: var(--mana-symbol-url);
    display: inline-block;
    width: 15px;
    height: 15px;
  }
</style>
