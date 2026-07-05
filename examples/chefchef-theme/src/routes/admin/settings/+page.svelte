<svelte:head>
  <title>Settings — Admin — AppName</title>
</svelte:head>

<script>
let notices = $state({});

// biome-ignore lint/correctness/noUnusedVariables: used in template
function showSaved(section) {
    notices = { ...notices, [section]: true };
    setTimeout(() => {
        notices = { ...notices, [section]: false };
    }, 2500);
}

let toggles = $state({
    publicSignup: false,
    emailVerification: true,
    tls: true,
    apiAccess: true,
    require2FA: true,
});

let deleteConfirm = $state(false);
let deleteInput = $state("");

function doShowDeleteConfirm() {
    deleteConfirm = true;
}

function doHideDeleteConfirm() {
    deleteConfirm = false;
    deleteInput = "";
}

function doConfirmDelete() {
    if (deleteInput !== "DELETE") return;
    alert("All data deleted — demo only");
}

let activeNav = $state("general");
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2 flex items-center justify-between">
    <a href="/" class="text-base font-bold text-gray-900 no-underline">AppName</a>
    <nav class="text-sm text-gray-500">
    <a href="/dashboard" class="text-gray-500 no-underline hover:text-blue-600 hover:underline">Dashboard</a>
    <span class="text-gray-300 mx-1">·</span>
    <a href="/time" class="text-gray-500 no-underline hover:text-blue-600 hover:underline">Time entries</a>
    <span class="text-gray-300 mx-1">·</span>
    <a href="/settings" class="text-gray-500 no-underline hover:text-blue-600 hover:underline">Settings</a>
    <span class="text-gray-300 mx-1">·</span>
    <a href="/logout" class="text-gray-500 no-underline hover:text-blue-600 hover:underline">Sign out</a>
    </nav>
  </div>
</header>

<div class="bg-amber-50 border-b border-amber-200"><div class="page px-5 py-1.5 flex items-center gap-4 text-xs text-amber-800">
  <strong>Admin</strong>
  <nav class="text-xs text-amber-800">
    <a href="/admin" class="text-amber-800 no-underline hover:underline">Overview</a>
    <span class="text-amber-400 mx-1">·</span>
    <a href="/admin/users" class="text-amber-800 no-underline hover:underline">Users</a>
    <span class="text-amber-400 mx-1">·</span>
    <a href="/admin/activity" class="text-amber-800 no-underline hover:underline">Activity log</a>
    <span class="text-amber-400 mx-1">·</span>
    <a href="/admin/settings" class="text-amber-800 no-underline hover:underline font-bold">Settings</a>
  </nav>
  <span class="ml-auto">
    <a href="/" class="text-amber-800">← Back to app</a>
  </span>
</div>
</div>

<div class="flex page px-5 pt-7 pb-16 gap-12 items-start">
  <nav class="w-44 flex-shrink-0 sticky top-5">
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 mt-0 mb-1">General</div>
    <a href="#general" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'general' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'general'}>General</a>
    <a href="#registrations" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'registrations' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'registrations'}>Registrations</a>
    <a href="#email" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'email' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'email'}>Email</a>

    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 mt-4 mb-1">Integrations</div>
    <a href="#toggl" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'toggl' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'toggl'}>Toggl</a>
    <a href="#webhooks" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'webhooks' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'webhooks'}>Webhooks</a>
    <a href="#api" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'api' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'api'}>API</a>

    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 mt-4 mb-1">System</div>
    <a href="#security" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'security' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'security'}>Security</a>
    <a href="#danger" class="block text-sm text-gray-500 no-underline py-[3px] hover:text-blue-600 {activeNav === 'danger' ? 'text-gray-900 font-semibold' : ''}" onclick={() => activeNav = 'danger'}>Danger zone</a>
  </nav>

  <div class="flex-1 min-w-0">
    <h1 class="text-xl font-bold tracking-tight mb-7">Settings</h1>

    <div class="section mb-10" id="general">
      <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 pb-1.5 border-b border-gray-300 mb-4">General</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Application name</strong>
          <p class="text-sm text-gray-500 m-0">Shown in the header and email subjects.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="text" value="AppName" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-60 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Base URL</strong>
          <p class="text-sm text-gray-500 m-0">Used to generate links in emails and webhooks.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="url" value="https://app.example.com" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-60 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Timezone</strong>
          <p class="text-sm text-gray-500 m-0">Default timezone for new users.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white min-w-36 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
            <option>UTC</option>
            <option selected>Europe/Paris</option>
            <option>America/New_York</option>
          </select>
        </div>
      </div>

      <div class="flex items-center gap-2.5 mt-5">
        <button type="button" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700" onclick={() => showSaved('general')}>Save</button>
        <span class="text-sm text-green-700" hidden={!notices.general}>Saved.</span>
      </div>
    </div>

    <div class="section mb-10" id="registrations">
      <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 pb-1.5 border-b border-gray-300 mb-4">Registrations</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Allow public sign-up</strong>
          <p class="text-sm text-gray-500 m-0">Anyone can create an account without an invitation.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <label class="relative inline-flex items-center cursor-pointer flex-shrink-0">
            <input type="checkbox" class="sr-only" checked={toggles.publicSignup} onchange={() => toggles.publicSignup = !toggles.publicSignup}>
            <div class="w-9 h-5 rounded-full transition-colors duration-150 relative {toggles.publicSignup ? 'bg-blue-600' : 'bg-gray-300'}">
              <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-150 {toggles.publicSignup ? 'translate-x-4' : ''}"></div>
            </div>
          </label>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Require email verification</strong>
          <p class="text-sm text-gray-500 m-0">New accounts must verify their email before signing in.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <label class="relative inline-flex items-center cursor-pointer flex-shrink-0">
            <input type="checkbox" class="sr-only" checked={toggles.emailVerification} onchange={() => toggles.emailVerification = !toggles.emailVerification}>
            <div class="w-9 h-5 rounded-full transition-colors duration-150 relative {toggles.emailVerification ? 'bg-blue-600' : 'bg-gray-300'}">
              <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-150 {toggles.emailVerification ? 'translate-x-4' : ''}"></div>
            </div>
          </label>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Allowed email domains</strong>
          <p class="text-sm text-gray-500 m-0">Restrict sign-ups to these domains. Leave empty to allow all.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="text" value="example.com" placeholder="example.com, acme.org" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-60 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Default role for new users</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white min-w-36 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
            <option selected>Member</option>
            <option>Admin</option>
          </select>
        </div>
      </div>

      <div class="flex items-center gap-2.5 mt-5">
        <button type="button" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700" onclick={() => showSaved('registrations')}>Save</button>
        <span class="text-sm text-green-700" hidden={!notices.registrations}>Saved.</span>
      </div>
    </div>

    <div class="section mb-10" id="email">
      <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 pb-1.5 border-b border-gray-300 mb-4">Email</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">SMTP host</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="text" value="smtp.example.com" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-60 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">SMTP port</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="number" value="587" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-20 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">From address</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="email" value="noreply@example.com" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-60 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">TLS</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <label class="relative inline-flex items-center cursor-pointer flex-shrink-0">
            <input type="checkbox" class="sr-only" checked={toggles.tls} onchange={() => toggles.tls = !toggles.tls}>
            <div class="w-9 h-5 rounded-full transition-colors duration-150 relative {toggles.tls ? 'bg-blue-600' : 'bg-gray-300'}">
              <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-150 {toggles.tls ? 'translate-x-4' : ''}"></div>
            </div>
          </label>
        </div>
      </div>

      <div class="flex items-center gap-2.5 mt-5">
        <button type="button" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700" onclick={() => showSaved('email')}>Save</button>
        <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-gray-300 bg-transparent text-gray-500 font-normal hover:bg-gray-100 hover:text-gray-900" onclick={() => alert('Test email sent — demo only')}>Send test email</button>
        <span class="text-sm text-green-700" hidden={!notices.email}>Saved.</span>
      </div>
    </div>

    <div class="section mb-10" id="toggl">
      <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 pb-1.5 border-b border-gray-300 mb-4">Toggl</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">API token</strong>
          <p class="text-sm text-gray-500 m-0">Found in your Toggl profile settings.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="text" value="••••••••••••••••••••••••••••••••" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-60 font-mono focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Workspace ID</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="text" value="1234567" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-30 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Sync frequency</strong>
          <p class="text-sm text-gray-500 m-0">How often to pull new time entries from Toggl.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white min-w-36 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
            <option>Every 5 minutes</option>
            <option selected>Every 15 minutes</option>
            <option>Every hour</option>
            <option>Manual only</option>
          </select>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Last sync</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2 text-gray-500 text-sm">
          <span class="font-mono">2025-07-07 14:23:01</span>
          &nbsp;·&nbsp;
          <button type="button" class="text-sm text-blue-600 bg-transparent border-none cursor-pointer" onclick={() => alert('Syncing — demo only')}>sync now</button>
        </div>
      </div>

      <div class="flex items-center gap-2.5 mt-5">
        <button type="button" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700" onclick={() => showSaved('toggl')}>Save</button>
        <span class="text-sm text-green-700" hidden={!notices.toggl}>Saved.</span>
      </div>
    </div>

    <div class="section mb-10" id="api">
      <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 pb-1.5 border-b border-gray-300 mb-4">API</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">API access</strong>
          <p class="text-sm text-gray-500 m-0">Allow external tools to query the API.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <label class="relative inline-flex items-center cursor-pointer flex-shrink-0">
            <input type="checkbox" class="sr-only" checked={toggles.apiAccess} onchange={() => toggles.apiAccess = !toggles.apiAccess}>
            <div class="w-9 h-5 rounded-full transition-colors duration-150 relative {toggles.apiAccess ? 'bg-blue-600' : 'bg-gray-300'}">
              <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-150 {toggles.apiAccess ? 'translate-x-4' : ''}"></div>
            </div>
          </label>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">API key</strong>
          <p class="text-sm text-gray-500 m-0">Include as <code class="font-mono text-xs">Authorization: Bearer &lt;key&gt;</code></p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-1.5">
          <span class="font-mono text-sm bg-gray-100 border border-gray-300 rounded-sm px-2 py-1 text-gray-900 select-all">sk_prod_xK9mN2pQr7vL</span>
          <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-gray-300 bg-transparent text-gray-500 font-normal hover:bg-gray-100 hover:text-gray-900" onclick={() => alert('New key generated — demo only')}>Regenerate</button>
        </div>
      </div>
    </div>

    <div class="section mb-10" id="security">
      <h2 class="text-sm font-bold uppercase tracking-wider text-gray-500 pb-1.5 border-b border-gray-300 mb-4">Security</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Session timeout</strong>
          <p class="text-sm text-gray-500 m-0">Inactive sessions are invalidated after this period.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white min-w-36 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
            <option>1 hour</option>
            <option>8 hours</option>
            <option selected>30 days</option>
            <option>Never</option>
          </select>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Minimum password length</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <input type="number" value="12" min="8" max="128" class="px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white w-20 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Require 2FA for admins</strong>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <label class="relative inline-flex items-center cursor-pointer flex-shrink-0">
            <input type="checkbox" class="sr-only" checked={toggles.require2FA} onchange={() => toggles.require2FA = !toggles.require2FA}>
            <div class="w-9 h-5 rounded-full transition-colors duration-150 relative {toggles.require2FA ? 'bg-blue-600' : 'bg-gray-300'}">
              <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-150 {toggles.require2FA ? 'translate-x-4' : ''}"></div>
            </div>
          </label>
        </div>
      </div>

      <div class="flex items-center gap-2.5 mt-5">
        <button type="button" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700" onclick={() => showSaved('security')}>Save</button>
        <span class="text-sm text-green-700" hidden={!notices.security}>Saved.</span>
      </div>
    </div>

    <div class="section mb-10" id="danger">
      <h2 class="text-sm font-bold uppercase tracking-wider text-red-600 pb-1.5 border-b border-red-200 mb-4">Danger zone</h2>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Purge all sessions</strong>
          <p class="text-sm text-gray-500 m-0">Sign out every user immediately. They will need to sign in again.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-red-200 bg-transparent text-red-600 font-semibold hover:bg-red-50 hover:border-red-300" onclick={() => alert('All sessions purged — demo only')}>Purge sessions</button>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Reset sync history</strong>
          <p class="text-sm text-gray-500 m-0">Delete all cached Toggl data and re-sync from scratch.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2">
          <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-red-200 bg-transparent text-red-600 font-semibold hover:bg-red-50 hover:border-red-300" onclick={() => alert('Sync history reset — demo only')}>Reset sync</button>
        </div>
      </div>

      <div class="flex items-start justify-between gap-6 py-3 border-b border-gray-300">
        <div class="flex-1">
          <strong class="block text-sm font-semibold mb-0.5">Delete all data</strong>
          <p class="text-sm text-gray-500 m-0">Permanently delete all users, entries, and settings. Cannot be undone.</p>
        </div>
        <div class="flex-shrink-0 flex items-center gap-2" hidden={deleteConfirm}>
          <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-red-200 bg-transparent text-red-600 font-semibold hover:bg-red-50 hover:border-red-300" onclick={doShowDeleteConfirm}>Delete everything…</button>
        </div>
      </div>

      <div hidden={!deleteConfirm} class="py-3">
        <p class="text-sm text-red-600 mb-2.5">
          This will permanently delete all data. Type <strong>DELETE</strong> to confirm.
        </p>
        <div class="flex gap-2 items-center">
          <input type="text" placeholder="Type DELETE" class="w-40 px-2 py-1 border border-gray-300 rounded-sm text-sm text-gray-900 bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600" bind:value={deleteInput}>
          <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-red-200 bg-transparent text-red-600 font-semibold hover:bg-red-50 hover:border-red-300" onclick={doConfirmDelete}>Delete everything</button>
          <button type="button" class="px-3.5 py-1 rounded-sm text-sm cursor-pointer border border-gray-300 bg-transparent text-gray-500 font-normal hover:bg-gray-100 hover:text-gray-900" onclick={doHideDeleteConfirm}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a>
    ·
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a>
    ·
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
