<script lang="ts">
  import { firebaseUi, firebaseUiConfig } from '$lib/common/firebase';
  import { onMount } from 'svelte';
  import 'firebaseui/dist/firebaseui.css';

  onMount(() => {
    firebaseUi.start('#firebaseui-auth-container', firebaseUiConfig);
  });
</script>

<section>
  <h1>Welcome to My Awesome App</h1>
  <div id="firebaseui-auth-container" />
  <div id="loader">Loading...</div>
</section>

<style>
</style>
