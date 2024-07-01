<script lang="ts">
  import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faHandSparkles, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons/index';
  import { ProgressRadial } from '@skeletonlabs/skeleton';
  import { signIn, signUp } from '$lib/firebase/auth';

  export let background: string;

  let tabSet: number = 0;

  let email = '';
  let password = '';
  let showPassword = false;
  let authPromise : Promise<any>;

  $: passwordType = showPassword ? 'text' : 'password'
  $: disableButton = email.length === 0 || password.length === 0

  const localSignIn = () => authPromise = signIn(email, password);
</script>

<section>
  <TabGroup class="w-[450px] h-72 p-4 rounded-lg variant-glass-surface">
    <Tab bind:group={tabSet} name="signin" value={0}>Sign in</Tab>
    <Tab bind:group={tabSet} name="signup" value={1}>Sign up</Tab>
    <!-- Tab Panels --->
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        {#await authPromise}
          <!-- promise is pending -->
          loading
        {:then value}
          <!-- promise was fulfilled with success-->
          loaded
        {:catch error}
          <!-- promise was fulfilled with error-->
          error
        {/await}

        <span>Email</span>
        <input type="email" class="input" placeholder="abc@youremail.com" bind:value={email} />
        <span>Password</span>
        <div class="input-group input-group-divider grid-cols-[1fr_auto] mb-5">
          <input type={passwordType} class="input" on:input={ (event) => password = event.target?.value } />
          <button type="button" class="" on:click={() => (showPassword = !showPassword)}>
            <Fa icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
        <button type="button" class="btn variant-filled-primary absolute right-4" on:click={localSignIn} disabled={disableButton}>
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
  /*     position: absolute;
    height: 188px;

position: absolute;
    margin-left: 42%;
    margin-top: 12%;
    z-index: 999; */
</style>
