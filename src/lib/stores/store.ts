import { localStorageStore } from '@skeletonlabs/skeleton';
import { writable } from 'svelte/store';
import type * as Scry from 'scryfall-sdk';

export const dailyRandomCard = localStorageStore('dailyRandomCard', { date: '', cardName: '' });