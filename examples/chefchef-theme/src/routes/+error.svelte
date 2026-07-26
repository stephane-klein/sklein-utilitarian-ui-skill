<script>
// biome-ignore lint/correctness/noUnusedImports: used via $page auto-subscription in template
import { page } from "$app/stores";
</script>

<svelte:head>
  {#if $page.status === 404}
    <title>Page not found — AppName</title>
  {:else if $page.status === 403}
    <title>Access denied — AppName</title>
  {:else if $page.status === 503}
    <title>Maintenance — AppName</title>
  {:else}
    <title>Server error — AppName</title>
  {/if}
</svelte:head>

{#if $page.status !== 503}
<header class="border-b border-gray-300">
  <div class="page px-5 py-2 flex items-center justify-between">
    <a href="/" class="font-bold text-base no-underline">AppName</a>
    <nav>
      <a href="/dashboard" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Dashboard</a>
      <span class="text-sm text-gray-500"> · </span>
      <a href="/settings" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Settings</a>
      <span class="text-sm text-gray-500"> · </span>
      <a href="/logout" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Sign out</a>
    </nav>
  </div>
</header>
{/if}

<main class="page px-5 pt-12 pb-16">
  {#if $page.status === 404}
    <p class="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">404</p>
    <h1 class="text-2xl font-bold mb-2 tracking-tight">Page not found</h1>
    <p class="text-sm text-gray-500 mb-6 max-w-md">
      This page doesn't exist or has been moved.
    </p>
    <div class="flex gap-3 items-center flex-wrap">
      <a href="/" class="px-4 py-1.5 bg-blue-600 text-white border border-blue-600 rounded-sm text-sm font-semibold no-underline hover:bg-blue-700">Go to dashboard</a>
      <a href="javascript:history.back()" class="px-4 py-1.5 bg-transparent text-gray-500 border border-gray-300 rounded-sm text-sm no-underline hover:bg-gray-100 hover:text-gray-900">Go back</a>
    </div>

  {:else if $page.status === 403}
    <p class="font-mono text-xs font-bold text-red-600 uppercase tracking-wider mb-2">403</p>
    <h1 class="text-2xl font-bold mb-2 tracking-tight">Access denied</h1>
    <p class="text-sm text-gray-500 mb-6 max-w-md">
      You don't have permission to view this page.
      If you think this is a mistake, contact your administrator.
    </p>
    <div class="flex gap-3 items-center flex-wrap">
      <a href="/" class="px-4 py-1.5 bg-blue-600 text-white border border-blue-600 rounded-sm text-sm font-semibold no-underline hover:bg-blue-700">Go to dashboard</a>
      <a href="mailto:admin@example.com" class="px-4 py-1.5 bg-transparent text-gray-500 border border-gray-300 rounded-sm text-sm no-underline hover:bg-gray-100 hover:text-gray-900">Contact admin</a>
    </div>

  {:else if $page.status === 503}
    <p class="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Maintenance</p>
    <h1 class="text-2xl font-bold mb-2 tracking-tight">We'll be right back</h1>
    <p class="text-sm text-gray-500 mb-6 max-w-md">
      AppName is down for scheduled maintenance.
      We're upgrading the database and expect to be back shortly.
    </p>
    <div class="mt-5 text-xs text-gray-500">
      Started at <strong class="font-mono text-gray-900">14:00 UTC</strong>
      <span class="text-gray-500"> · </span>
      Expected back by <strong class="font-mono text-gray-900">15:30 UTC</strong>
      <span class="text-gray-500"> · </span>
      <a href="https://status.example.com" class="text-blue-600 no-underline hover:underline">status page</a>
    </div>

  {:else}
    {#if $page.status}
    <p class="font-mono text-xs font-bold text-red-600 uppercase tracking-wider mb-2">{$page.status}</p>
    {/if}
    <h1 class="text-2xl font-bold mb-2 tracking-tight">Something went wrong</h1>
    <p class="text-sm text-gray-500 mb-6 max-w-md">
      An unexpected error occurred on our end.
      The issue has been logged. Try again in a moment.
    </p>
    <div class="flex gap-3 items-center flex-wrap">
      <a href="javascript:location.reload()" class="px-4 py-1.5 bg-blue-600 text-white border border-blue-600 rounded-sm text-sm font-semibold no-underline hover:bg-blue-700">Try again</a>
      <a href="/" class="px-4 py-1.5 bg-transparent text-gray-500 border border-gray-300 rounded-sm text-sm no-underline hover:bg-gray-100 hover:text-gray-900">Go to dashboard</a>
      <a href="/status" class="px-4 py-1.5 bg-transparent text-gray-500 border border-gray-300 rounded-sm text-sm no-underline hover:bg-gray-100 hover:text-gray-900">Check status</a>
    </div>
    {#if $page.error?.message}
    <details class="mt-7 pt-5 border-t border-gray-300">
      <summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-900 select-none">Technical details</summary>
      <pre class="mt-2.5 font-mono text-xs bg-gray-100 border border-gray-300 rounded-sm p-3 overflow-x-auto text-gray-500 leading-relaxed">{$page.error.message}</pre>
    </details>
    {/if}
  {/if}
</main>

{#if $page.status !== 503}
<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a>
    <span class="text-gray-500"> · </span>
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a>
    <span class="text-gray-500"> · </span>
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
{/if}
