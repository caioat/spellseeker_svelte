import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import * as Scry from 'scryfall-sdk';

// import { cardSymbols } from '$lib/stores/store';

export const load = (async () => {
  // const cachedCardSymbols = get(cardSymbols);

  // if(cachedCardSymbols.length === 0) {
  //   const allSymbols = await Scry.Symbology.all();
  //   cardSymbols.set(allSymbols);
  // }
  Scry.Cards.setSymbologyTransformer("|https://svgs.scryfall.io/card-symbols/$1$2.svg|");
});
