<svelte:head>
  <title>Create account — AppName</title>
</svelte:head>

<script>
let firstName = $state("");
let lastName = $state("");
let email = $state("");
let password = $state("");
let emailError = $state(false);
let passwordError = $state(false);
let submitted = $state(false);

function handleSubmit() {
    let valid = true;

    if (!email.includes("@")) {
        emailError = true;
        valid = false;
    } else {
        emailError = false;
    }

    if (password.length < 12) {
        passwordError = true;
        valid = false;
    } else {
        passwordError = false;
    }

    if (valid) alert("Account created — demo only");
}

function handleEmailInput() {
    if (email.includes("@")) {
        emailError = false;
    }
}

function handlePasswordInput() {
    if (password.length >= 12) {
        passwordError = false;
    }
}
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2">
    <a href="/" class="text-base font-bold text-gray-900 no-underline hover:underline">AppName</a>
  </div>
</header>

<main class="page px-5 pt-9 pb-24">
  <h1 class="text-xl font-bold mb-1.5 tracking-tight">Create account</h1>
  <p class="text-sm text-gray-500 mb-6">Already have one? <a href="/login" class="text-blue-600">Sign in</a></p>

  <form class="max-w-sm" novalidate onsubmit={handleSubmit}>

    <div class="grid grid-cols-2 gap-2.5 mb-3">
      <div class="mb-3">
        <label for="first-name" class="block text-sm font-semibold mb-1">First name</label>
        <input type="text" id="first-name" name="first_name" bind:value={firstName} autocomplete="given-name" autofocus required class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
      </div>
      <div class="mb-3">
        <label for="last-name" class="block text-sm font-semibold mb-1">Last name</label>
        <input type="text" id="last-name" name="last_name" bind:value={lastName} autocomplete="family-name" required class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
      </div>
    </div>

    <div class="mb-3">
      <label for="email" class="block text-sm font-semibold mb-1">Email</label>
      <input type="email" id="email" name="email" bind:value={email} oninput={handleEmailInput} autocomplete="email" required class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600" class:border-red-600={emailError}>
      <p class="text-xs text-red-600 mt-1" hidden={!emailError}>Enter a valid email address.</p>
    </div>

    <div class="mb-3">
      <label for="password" class="block text-sm font-semibold mb-1">Password</label>
      <input type="password" id="password" name="password" bind:value={password} oninput={handlePasswordInput} autocomplete="new-password" required class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600" class:border-red-600={passwordError}>
      <p class="text-xs text-gray-500 mt-1">At least 12 characters.</p>
      <p class="text-xs text-red-600 mt-1" hidden={!passwordError}>At least 12 characters required.</p>
    </div>

    <div class="mt-5 flex items-center gap-3.5">
      <button type="submit" class="px-4 py-1.5 bg-blue-600 text-white border border-blue-600 rounded-sm text-sm font-semibold cursor-pointer hover:bg-blue-700 hover:border-blue-700">Create account</button>
    </div>

  </form>

  <p class="mt-3.5 text-xs text-gray-500 max-w-sm">
    By creating an account you agree to our
    <a href="/terms" class="text-gray-500">Terms of service</a> and
    <a href="/privacy" class="text-gray-500">Privacy policy</a>.
  </p>

  <p class="mt-5 pt-4 border-t border-gray-300 text-sm text-gray-500">
    Already have an account? <a href="/login" class="text-blue-600">Sign in</a> ·
    <a href="/" class="text-blue-600">Back to homepage</a>
  </p>
</main>

<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a> ·
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a> ·
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
