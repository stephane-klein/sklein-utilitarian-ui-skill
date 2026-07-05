<svelte:head>
  <title>Profile — AppName</title>
</svelte:head>

<script>
let showDeleteConfirm = $state(false);
let noticeProfile = $state(false);
let noticePassword = $state(false);
let noticePrefs = $state(false);

function showSaved(id) {
    if (id === "profile") noticeProfile = true;
    if (id === "password") noticePassword = true;
    if (id === "prefs") noticePrefs = true;
    setTimeout(() => {
        if (id === "profile") noticeProfile = false;
        if (id === "password") noticePassword = false;
        if (id === "prefs") noticePrefs = false;
    }, 2500);
}
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2 flex items-center justify-between">
    <a href="/" class="font-bold text-base no-underline">AppName</a>
    <nav>
    <a href="/dashboard" class="text-sm text-gray-500 no-underline ml-3 hover:text-blue-600 hover:underline">Dashboard</a>
    ·
    <a href="/settings" class="text-sm text-gray-900 font-semibold no-underline ml-3 hover:text-blue-600 hover:underline">Settings</a>
    ·
    <a href="/logout" class="text-sm text-gray-500 no-underline ml-3 hover:text-blue-600 hover:underline">Sign out</a>
    </nav>
  </div>
</header>

<main class="page px-5 pt-9 pb-16">
  <h1 class="text-xl font-bold mb-7 tracking-tight">Profile</h1>

  <!-- Personal information -->
  <div class="mb-9">
    <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 pb-1.5 border-b border-gray-300">
      Personal information
    </h2>

    <div class="grid grid-cols-2 gap-3 mb-3.5">
      <div>
        <label for="first-name" class="block text-sm font-semibold mb-1">First name</label>
        <input
          type="text"
          id="first-name"
          name="first_name"
          value="Stéphane"
          autocomplete="given-name"
          class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
        />
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold mb-1">Last name</label>
        <input
          type="text"
          id="last-name"
          name="last_name"
          value="Klein"
          autocomplete="family-name"
          class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
        />
      </div>
    </div>

    <div class="mb-3.5">
      <label for="email" class="block text-sm font-semibold mb-1">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value="stephane@example.com"
        autocomplete="email"
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
      />
      <p class="text-xs text-gray-500 mt-1">Used for sign in and notifications.</p>
    </div>

    <div class="mb-3.5">
      <label for="bio" class="block text-sm font-semibold mb-1">
        Bio <span class="font-normal text-gray-500">(optional)</span>
      </label>
      <textarea
        id="bio"
        name="bio"
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600 resize-y min-h-20"
      >Anti-conformist developer. FOSS, digital sovereignty, cooperative structures.</textarea>
    </div>

    <div class="flex items-center gap-3 mt-1.5">
      <button
        type="button"
        class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700"
        onclick={() => showSaved('profile')}
      >
        Save changes
      </button>
      <span class="text-sm text-green-700" hidden={!noticeProfile}>Saved.</span>
    </div>
  </div>

  <!-- Password -->
  <div class="mb-9">
    <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 pb-1.5 border-b border-gray-300">
      Password
    </h2>

    <div class="mb-3.5">
      <label for="current-password" class="block text-sm font-semibold mb-1">Current password</label>
      <input
        type="password"
        id="current-password"
        name="current_password"
        autocomplete="current-password"
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
      />
    </div>

    <div class="mb-3.5">
      <label for="new-password" class="block text-sm font-semibold mb-1">New password</label>
      <input
        type="password"
        id="new-password"
        name="new_password"
        autocomplete="new-password"
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
      />
      <p class="text-xs text-gray-500 mt-1">At least 12 characters.</p>
    </div>

    <div class="mb-3.5">
      <label for="confirm-password" class="block text-sm font-semibold mb-1">Confirm new password</label>
      <input
        type="password"
        id="confirm-password"
        name="confirm_password"
        autocomplete="new-password"
        class="w-full px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
      />
    </div>

    <div class="flex items-center gap-3 mt-1.5">
      <button
        type="button"
        class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700"
        onclick={() => showSaved('password')}
      >
        Update password
      </button>
      <span class="text-sm text-green-700" hidden={!noticePassword}>Password updated.</span>
    </div>
  </div>

  <!-- Preferences -->
  <div class="mb-9">
    <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 pb-1.5 border-b border-gray-300">
      Preferences
    </h2>

    <div class="mb-3.5">
      <label for="timezone" class="block text-sm font-semibold mb-1">Timezone</label>
      <select
        id="timezone"
        name="timezone"
        class="w-full max-w-xs px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
      >
        <option>UTC</option>
        <option selected>Europe/Paris</option>
        <option>America/New_York</option>
        <option>Asia/Tokyo</option>
      </select>
    </div>

    <div class="mb-3.5">
      <label for="language" class="block text-sm font-semibold mb-1">Language</label>
      <select
        id="language"
        name="language"
        class="w-full max-w-40 px-2 py-1.5 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600"
      >
        <option>English</option>
        <option selected>Français</option>
      </select>
    </div>

    <div class="flex items-center gap-3 mt-1.5">
      <button
        type="button"
        class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700"
        onclick={() => showSaved('prefs')}
      >
        Save preferences
      </button>
      <span class="text-sm text-green-700" hidden={!noticePrefs}>Saved.</span>
    </div>
  </div>

  <!-- Danger zone -->
  <div class="mb-9">
    <h2 class="text-sm font-bold uppercase tracking-wider text-red-600 mb-3 pb-1.5 border-b border-red-200">
      Delete account
    </h2>
    <p class="text-sm text-gray-500 mb-2.5">
      Permanently delete your account and all associated data. This cannot be undone.
    </p>

    <div hidden={showDeleteConfirm}>
      <button
        type="button"
        class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border bg-transparent text-red-600 border-transparent font-normal pl-0 hover:underline hover:bg-transparent"
        onclick={() => showDeleteConfirm = true}
      >
        Delete my account…
      </button>
    </div>

    <div hidden={!showDeleteConfirm}>
      <p class="text-red-600 mb-2">Are you sure? This is permanent.</p>
      <div class="flex items-center gap-3 mt-1.5">
        <button
          type="button"
          class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700"
        >
          Yes, delete my account
        </button>
        <button
          type="button"
          class="px-4 py-1.5 rounded-sm text-sm font-semibold cursor-pointer border bg-transparent text-gray-500 border-gray-300 font-normal hover:bg-gray-100 hover:text-gray-900"
          onclick={() => showDeleteConfirm = false}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</main>

<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a>
    ·
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a>
    ·
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
