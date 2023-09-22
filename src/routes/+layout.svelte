<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  // Most of your app wide CSS should be put in this file
  import '../app.postcss';
  import {
    Modal,
    AppShell,
    AppBar,
    modalStore,
    type ModalComponent,
    type ModalSettings
  } from '@skeletonlabs/skeleton';
  import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/index';

  import Login from '$lib/components/modals/Login.svelte';
  const modalComponent: ModalComponent = {
    // Pass a reference to your custom component
    ref: Login,
    // Add the component properties as key/value pairs
    props: { background: 'bg-primary-500' },
    // Provide a template literal for the default component slot
    slot: '<p>Skeleton</p>'
  };

  const loginModal = () => {
    const modal: ModalSettings = {
      type: 'component',
      // Pass the component directly:
      component: modalComponent
    };
    modalStore.trigger(modal);
  };
</script>

<Modal />

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
          href="https://github.com/skeletonlabs/skeleton"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <button class="btn btn-sm variant-ghost-surface" on:click={loginModal}>Login</button>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Sidebar -->
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <AppRailAnchor href="/" title="Account" selected={true}>
        <svelte:fragment slot="lead">
          <Fa icon={faDiceD20} />
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
