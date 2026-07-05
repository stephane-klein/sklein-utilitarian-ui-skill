<svelte:head>
  <title>Sign in — AppName</title>
</svelte:head>

<script>
let demoState = $state("idle");
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2">
    <a href="/" class="font-bold text-base no-underline hover:underline">AppName</a>
  </div>
</header>

<main class="page px-5 pt-9 pb-24">
  <h1 class="text-xl font-bold mb-6 tracking-tight">Sign in</h1>

  <p
    class="text-sm text-red-600 mb-3.5"
    hidden={demoState !== 'error'}
  >
    Invalid email or password.
  </p>

  <form class="max-w-sm" novalidate>
    <div class="mb-3">
      <label for="email" class="block text-sm font-semibold mb-1">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        autocomplete="email"
        autofocus
        required
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
        value={demoState === 'filled' ? 'stephane@example.com' : ''}
      />
    </div>

    <div class="mb-3">
      <label for="password" class="block text-sm font-semibold mb-1">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        autocomplete="current-password"
        required
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
        value={demoState === 'filled' ? 'password123' : ''}
      />
    </div>

    <div class="mt-4 flex items-center gap-3.5">
      <button
        type="submit"
        class="px-4 py-1.5 bg-blue-600 text-white border border-blue-600 rounded-sm text-sm font-semibold cursor-pointer hover:bg-blue-700 hover:border-blue-700"
      >
        Sign in
      </button>
      <a href="/forgot-password" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
    </div>
  </form>

  <p class="mt-5 pt-4 border-t border-gray-300 text-sm text-gray-500">
    No account?
    <a href="/signup" class="text-blue-600 hover:underline">Create one</a>
    ·
    <a href="/" class="text-blue-600 hover:underline">Back to homepage</a>
  </p>
</main>

<footer class="border-t border-gray-300"><div class="page px-5 py-3 text-xs text-gray-500">
  <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a>
  ·
  <a href="/about" class="text-gray-500 no-underline hover:underline">About</a>
  ·
  <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>

<div class="fixed bottom-4 right-4 flex gap-1.5 items-center text-xs text-gray-400">
  <span>demo:</span>
  <button
    class="px-2 py-1 border rounded-sm cursor-pointer text-xs {demoState === 'idle' ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-500 border-gray-300'}"
    onclick={() => demoState = 'idle'}
  >
    idle
  </button>
  <button
    class="px-2 py-1 border rounded-sm cursor-pointer text-xs {demoState === 'error' ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-500 border-gray-300'}"
    onclick={() => demoState = 'error'}
  >
    error
  </button>
  <button
    class="px-2 py-1 border rounded-sm cursor-pointer text-xs {demoState === 'filled' ? 'bg-gray-900 text-white border-gray-900' : 'bg-gray-100 text-gray-500 border-gray-300'}"
    onclick={() => demoState = 'filled'}
  >
    filled
  </button>
</div>
