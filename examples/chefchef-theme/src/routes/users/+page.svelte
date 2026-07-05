<svelte:head>
  <title>Users — AppName</title>
</svelte:head>

<script>
let confirmUserId = $state(null);

function showConfirm(userId) {
    confirmUserId = userId;
}

function hideConfirm() {
    confirmUserId = null;
}
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2 flex items-center justify-between">
    <a href="/" class="text-base font-bold text-gray-900 no-underline">AppName</a>
    <nav>
    <a href="/dashboard" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Dashboard</a><span class="text-sm text-gray-500"> · </span>
    <a href="/time" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Time entries</a><span class="text-sm text-gray-500"> · </span>
    <a href="/users" class="text-sm text-gray-900 font-semibold no-underline">Users</a><span class="text-sm text-gray-500"> · </span>
    <a href="/settings" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Settings</a><span class="text-sm text-gray-500"> · </span>
    <a href="/logout" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Sign out</a>
    </nav>
  </div>
</header>

<main class="page px-5 pt-7 pb-16">

  <div class="flex items-baseline gap-2.5 mb-5 flex-wrap">
    <h1 class="text-xl font-bold tracking-tight">Users</h1>
    <span class="text-sm text-gray-500">24 total</span>
    <div class="flex-1"></div>
    <input type="search" placeholder="Search users…" autofocus class="px-2 py-1 border border-gray-300 rounded-sm text-sm w-48 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
    <a href="/users/invite" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 no-underline inline-block">Invite user</a>
  </div>

  <table class="w-full border-collapse text-sm">
    <thead>
      <tr>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-left">Name</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-left">Email</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-left">Role</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-left">Status</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-left">Joined</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-right">Last seen</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 text-left"></th>
      </tr>
    </thead>
    <tbody>

      <tr class="group hover:bg-gray-100">
        <td class="px-2 py-2 border-b border-gray-300 align-middle">
          <span class="font-medium"><a href="/users/1" class="text-gray-900 no-underline hover:text-blue-600 hover:underline">Stéphane Klein</a></span>
        </td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">stephane@example.com</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="text-xs text-gray-500">Admin</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border bg-green-50 text-green-700 border-green-200">Active</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">12 Jan 2024</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle font-mono">now</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle text-right whitespace-nowrap">
          <span class="opacity-0 group-hover:opacity-100">
            <a href="/users/1/edit" class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline ml-2 first:ml-0">edit</a>
          </span>
        </td>
      </tr>

      <tr class="group hover:bg-gray-100">
        <td class="px-2 py-2 border-b border-gray-300 align-middle">
          <span class="font-medium"><a href="/users/2" class="text-gray-900 no-underline hover:text-blue-600 hover:underline">Sarah Lefèvre</a></span>
        </td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">sarah@example.com</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="text-xs text-gray-500">Member</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border bg-green-50 text-green-700 border-green-200">Active</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">3 Mar 2024</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle font-mono">2h ago</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle text-right whitespace-nowrap">
          <span class="opacity-0 group-hover:opacity-100" hidden={confirmUserId === 2}>
            <a href="/users/2/edit" class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline ml-2 first:ml-0">edit</a>
            <a onclick={() => showConfirm(2)} class="text-xs text-gray-500 no-underline hover:text-red-600 hover:underline ml-2 first:ml-0 cursor-pointer">delete</a>
          </span>
          <span class="flex items-center gap-1.5 whitespace-nowrap justify-end" hidden={confirmUserId !== 2}>
            Sure?
            <button class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={() => console.log('delete 2')}>Delete</button>
            <button class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={hideConfirm}>Cancel</button>
          </span>
        </td>
      </tr>

      <tr class="group hover:bg-gray-100">
        <td class="px-2 py-2 border-b border-gray-300 align-middle">
          <span class="font-medium"><a href="/users/3" class="text-gray-900 no-underline hover:text-blue-600 hover:underline">Arnaud Petit</a></span>
        </td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">arnaud@example.com</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="text-xs text-gray-500">Member</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border bg-amber-50 text-amber-700 border-amber-300">Pending</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">—</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle font-mono">—</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle text-right whitespace-nowrap">
          <span class="opacity-0 group-hover:opacity-100" hidden={confirmUserId === 3}>
            <a href="/users/3/edit" class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline ml-2 first:ml-0">resend</a>
            <a onclick={() => showConfirm(3)} class="text-xs text-gray-500 no-underline hover:text-red-600 hover:underline ml-2 first:ml-0 cursor-pointer">revoke</a>
          </span>
          <span class="flex items-center gap-1.5 whitespace-nowrap justify-end" hidden={confirmUserId !== 3}>
            Sure?
            <button class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={() => console.log('revoke 3')}>Revoke</button>
            <button class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={hideConfirm}>Cancel</button>
          </span>
        </td>
      </tr>

      <tr class="group hover:bg-gray-100">
        <td class="px-2 py-2 border-b border-gray-300 align-middle">
          <span class="font-medium"><a href="/users/4" class="text-gray-900 no-underline hover:text-blue-600 hover:underline">Baptiste Durand</a></span>
        </td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">baptiste@example.com</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="text-xs text-gray-500">Member</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border bg-gray-100 text-gray-500 border-gray-300">Inactive</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">8 Nov 2023</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle font-mono">43d ago</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle text-right whitespace-nowrap">
          <span class="opacity-0 group-hover:opacity-100" hidden={confirmUserId === 4}>
            <a href="/users/4/edit" class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline ml-2 first:ml-0">edit</a>
            <a onclick={() => showConfirm(4)} class="text-xs text-gray-500 no-underline hover:text-red-600 hover:underline ml-2 first:ml-0 cursor-pointer">delete</a>
          </span>
          <span class="flex items-center gap-1.5 whitespace-nowrap justify-end" hidden={confirmUserId !== 4}>
            Sure?
            <button class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={() => console.log('delete 4')}>Delete</button>
            <button class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={hideConfirm}>Cancel</button>
          </span>
        </td>
      </tr>

      <tr class="group hover:bg-gray-100">
        <td class="px-2 py-2 border-b border-gray-300 align-middle">
          <span class="font-medium"><a href="/users/5" class="text-gray-900 no-underline hover:text-blue-600 hover:underline">Marie Fontaine</a></span>
        </td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">marie@example.com</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="text-xs text-gray-500">Member</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border bg-green-50 text-green-700 border-green-200">Active</span></td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle">21 Feb 2024</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle font-mono">1d ago</td>
        <td class="px-2 py-2 border-b border-gray-300 align-middle text-right whitespace-nowrap">
          <span class="opacity-0 group-hover:opacity-100" hidden={confirmUserId === 5}>
            <a href="/users/5/edit" class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline ml-2 first:ml-0">edit</a>
            <a onclick={() => showConfirm(5)} class="text-xs text-gray-500 no-underline hover:text-red-600 hover:underline ml-2 first:ml-0 cursor-pointer">delete</a>
          </span>
          <span class="flex items-center gap-1.5 whitespace-nowrap justify-end" hidden={confirmUserId !== 5}>
            Sure?
            <button class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={() => console.log('delete 5')}>Delete</button>
            <button class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={hideConfirm}>Cancel</button>
          </span>
        </td>
      </tr>

    </tbody>
  </table>

  <nav class="flex items-center gap-2.5 mt-5 text-sm">
    <span class="text-gray-500">« First</span>
    <span class="text-gray-500">‹ Prev</span>
    <a href="?after=5" class="text-blue-600">Next ›</a>
    <a href="?after=20" class="text-blue-600">Last »</a>
    <span class="ml-auto text-gray-500">1–5 of 24</span>
  </nav>

</main>

<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a> ·
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a> ·
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
