<script lang="ts">
  import type * as Scry from 'scryfall-sdk';

  export let card: Scry.Card;
  export let hoverZoom = false;
  export let navigate = false;

  let cardHovered = false;
  let mousePosition = { x: 0, y: 0 };

  function handleMousemove(event: MouseEvent) {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
  }
</script>

<section>
  {#if navigate}
    <a href="/card-details/{card?.id}">
      <img
        src={card?.image_uris?.png}
        alt=""
        class="card"
        on:mouseenter={() => (cardHovered = true)}
        on:mouseleave={() => (cardHovered = false)}
        on:mousemove={handleMousemove}
      />
    </a>
  {:else}
    <img src={card?.image_uris?.png} alt="" class="card" />
  {/if}

  {#if hoverZoom && cardHovered}
    <img
      src={card?.image_uris?.normal}
      alt=""
      class="hoveredCard"
      style="left: {mousePosition.x + 10}px; top: {mousePosition.y}px;"
    />
  {/if}
</section>

<style>
  .card {
    max-width: 244px;
    max-height: 340px;
    background-image: none;
  }

  .hoveredCard {
    position: absolute;
    width: 390px;
    height: 544px;
    background-image: none;
  }
</style>
