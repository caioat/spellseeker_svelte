<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  // Most of your app wide CSS should be put in this file
  import '../app.postcss';
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/index'
</script>

<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl">SpellSeeker</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://discord.gg/EXqV7W8MtY"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://twitter.com/SkeletonUI"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/skeletonlabs/skeleton"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Sidebar -->
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailAnchor href="/" title="Account" selected={true}>
        <svelte:fragment slot="lead">
          <Fa icon={faDiceD20}></Fa>
        </svelte:fragment>
        <span>Anchor</span>
      </AppRailAnchor>
    </AppRail>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
  <!-- Footer -->
  <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
