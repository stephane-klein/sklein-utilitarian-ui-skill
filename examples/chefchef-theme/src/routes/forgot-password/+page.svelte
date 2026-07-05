<svelte:head>
  <title>Reset password — AppName</title>
</svelte:head>

<script>
let email = $state("");
let sent = $state(false);

function handleSubmit() {
    if (!email.includes("@")) return;
    sent = true;
}

function showForm() {
    sent = false;
}
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2">
    <a href="/" class="text-base font-bold text-gray-900 no-underline hover:underline">AppName</a>
  </div>
</header>

<main class="page px-5 pt-9 pb-24">
  <h1 class="text-xl font-bold mb-1.5 tracking-tight">Reset password</h1>
  <p class="text-sm text-gray-500 mb-6 max-w-sm">Enter your email and we'll send you a link to reset your password.</p>

  <!-- Form -->
  <form onsubmit={handleSubmit} novalidate class="max-w-sm" hidden={sent}>
    <div class="mb-3">
      <label for="email" class="block text-sm font-semibold mb-1">Email</label>
      <input type="email" id="email" name="email" bind:value={email}
             autocomplete="email" autofocus required
             class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
    </div>

    <div class="mt-4 flex items-center gap-3.5">
      <button type="submit" class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700">Send reset link</button>
    </div>
  </form>

  <!-- Sent state -->
  <div class="max-w-sm" hidden={!sent}>
    <p class="text-sm mb-2.5">We sent a reset link to <strong class="font-mono font-semibold">{email}</strong>.</p>
    <p class="text-sm text-gray-500">
      Check your inbox — it may take a minute or two.
      No email? <a href="#" onclick={showForm} class="text-blue-600">Try again</a> or check your spam folder.
    </p>
  </div>

  <p class="mt-5 pt-4 border-t border-gray-300 text-sm text-gray-500">
    <a href="/login" class="text-blue-600">Back to sign in</a> ·
    <a href="/" class="text-blue-600">Homepage</a>
  </p>
</main>

<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a> ·
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a> ·
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
