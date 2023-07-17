<script lang="ts">
  import { get } from 'svelte/store';
  import * as Scry from 'scryfall-sdk';
  import { onMount } from 'svelte';
  import { dailyRandomCard } from '$lib/stores/store';
  import CardImage from '$lib/components/card/CardImage.svelte';

  let card: Scry.Card;

  onMount(async () => {
    const cachedRandomCard = get(dailyRandomCard);
    const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0);
    if (
      !cachedRandomCard.date ||
      currentDate.valueOf() !== new Date(cachedRandomCard.date).valueOf()
    ) {
      card = await Scry.Cards.random();
      dailyRandomCard.set({ date: new Date().toDateString(), cardName: card.name });
    } else {
      card = await Scry.Cards.byName(cachedRandomCard.cardName);
    }
  });
</script>

<section>
  <CardImage {card} hoverZoom navigate />
</section>

<style>
</style>
