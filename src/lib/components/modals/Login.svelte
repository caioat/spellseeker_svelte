<script lang="ts">
  import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faHandSparkles, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons/index';

  export let background: string;

  let tabSet: number = 0;
  let showPassword = false;
</script>

<section>
  <TabGroup class="w-[450px] h-72 p-4 rounded-lg variant-glass-surface">
    <Tab bind:group={tabSet} name="signin" value={0}>Sign in</Tab>
    <Tab bind:group={tabSet} name="signup" value={1}>Sign up</Tab>
    <!-- Tab Panels --->
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <span>Email</span>
        <input type="email" class="input" placeholder="abc@youremail.com" />
        <span>Password</span>
        <div class="input-group input-group-divider grid-cols-[1fr_auto] mb-5">
          <input type="password" class="input" />
          <button type="button" class="" on:click={() => (showPassword = !showPassword)}>
            <Fa icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
        <button type="button" class="btn variant-filled-primary absolute right-4">
          <Fa icon={faHandSparkles} />
          <span>Sign in!</span>
        </button>
      {:else if tabSet === 1}
        (tab panel 2 contents)
      {/if}
    </svelte:fragment>
  </TabGroup>
</section>

<style>
</style>
