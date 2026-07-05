<svelte:head>
  <title>Users — Admin — AppName</title>
</svelte:head>

<script>
let selected = $state(new Set());
let checkAll = $state(false);
let sortColumn = $state("name");
let sortDir = $state("asc");

const users = [
    {
        id: 1,
        name: "Stéphane Klein",
        email: "stephane@example.com",
        roleText: "Admin",
        roleClass: "bg-amber-50 text-amber-800 border-amber-200",
        statusText: "Active",
        statusClass: "bg-green-50 text-green-700 border-green-200",
        joined: "12 Jan 2024",
        last: "now",
        entries: "1 204",
        actions: [
            { text: "edit", href: "/admin/users/1/edit" },
            { text: "impersonate", action: "impersonate" },
        ],
        confirm: null,
    },
    {
        id: 2,
        name: "Sarah Lefèvre",
        email: "sarah@example.com",
        roleText: "Member",
        roleClass: "bg-gray-100 text-gray-500 border-gray-300",
        statusText: "Active",
        statusClass: "bg-green-50 text-green-700 border-green-200",
        joined: "3 Mar 2024",
        last: "2h ago",
        entries: "342",
        actions: [
            { text: "edit", href: "/admin/users/2/edit" },
            { text: "impersonate", action: "impersonate" },
            { text: "ban", danger: true, action: "ban" },
        ],
        confirm: { action: "ban", label: "Ban Sarah?" },
    },
    {
        id: 3,
        name: "Arnaud Petit",
        email: "arnaud@example.com",
        roleText: "Member",
        roleClass: "bg-gray-100 text-gray-500 border-gray-300",
        statusText: "Pending",
        statusClass: "bg-amber-50 text-amber-700 border-amber-300",
        joined: "—",
        last: "—",
        entries: "0",
        actions: [
            { text: "resend invite", href: "#" },
            { text: "revoke", danger: true, action: "revoke" },
        ],
        confirm: { action: "revoke", label: "Revoke invite?" },
    },
    {
        id: 4,
        name: "Baptiste Durand",
        email: "baptiste@example.com",
        roleText: "Member",
        roleClass: "bg-gray-100 text-gray-500 border-gray-300",
        statusText: "Banned",
        statusClass: "bg-red-50 text-red-600 border-red-200",
        joined: "8 Nov 2023",
        last: "43d ago",
        entries: "12",
        actions: [
            { text: "edit", href: "/admin/users/4/edit" },
            { text: "unban", action: "unban" },
            { text: "delete", danger: true, action: "delete" },
        ],
        confirm: { action: "delete", label: "Delete Baptiste?" },
    },
    {
        id: 5,
        name: "Marie Fontaine",
        email: "marie@example.com",
        roleText: "Member",
        roleClass: "bg-gray-100 text-gray-500 border-gray-300",
        statusText: "Active",
        statusClass: "bg-green-50 text-green-700 border-green-200",
        joined: "21 Feb 2024",
        last: "1d ago",
        entries: "89",
        actions: [
            { text: "edit", href: "/admin/users/5/edit" },
            { text: "impersonate", action: "impersonate" },
            { text: "ban", danger: true, action: "ban" },
        ],
        confirm: { action: "ban", label: "Ban Marie?" },
    },
];

function toggleRow(userId) {
    const next = new Set(selected);
    if (next.has(userId)) next.delete(userId);
    else next.add(userId);
    selected = next;
    checkAll = selected.size === users.length;
}

function toggleAll() {
    checkAll = !checkAll;
    if (checkAll) {
        selected = new Set(users.map((u) => u.id));
    } else {
        selected = new Set();
    }
}

function clearSelection() {
    selected = new Set();
    checkAll = false;
}

let confirmAction = $state({ userId: null, action: "" });

function showConfirm(userId, action) {
    confirmAction = { userId, action };
}

function hideConfirm() {
    confirmAction = { userId: null, action: "" };
}

function handleSort(col) {
    if (sortColumn === col) {
        sortDir = sortDir === "asc" ? "desc" : "asc";
    } else {
        sortColumn = col;
        sortDir = "asc";
    }
}
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
    <a href="/admin/users" class="text-amber-800 no-underline hover:underline font-bold">Users</a>
    <span class="text-amber-400 mx-1">·</span>
    <a href="/admin/activity" class="text-amber-800 no-underline hover:underline">Activity log</a>
    <span class="text-amber-400 mx-1">·</span>
    <a href="/admin/settings" class="text-amber-800 no-underline hover:underline">Settings</a>
  </nav>
  <span class="ml-auto">
    <a href="/" class="text-amber-800">← Back to app</a>
  </span>
</div>
</div>

<main class="page px-5 pt-7 pb-16">
  <div class="flex gap-7 mb-5 text-sm text-gray-500 pb-4 border-b border-gray-300">
    <div><strong class="font-mono text-base text-gray-900 font-bold block">312</strong> Total users</div>
    <div><strong class="font-mono text-base text-gray-900 font-bold block">287</strong> Active</div>
    <div><strong class="font-mono text-base text-gray-900 font-bold block">18</strong> Pending</div>
    <div><strong class="font-mono text-base text-gray-900 font-bold block">7</strong> Banned</div>
    <div><strong class="font-mono text-base text-gray-900 font-bold block">+24</strong> This month</div>
  </div>

  <div class="flex items-baseline gap-2.5 mb-4 flex-wrap">
    <h1 class="text-xl font-bold tracking-tight">Users</h1>
    <span class="text-sm text-gray-500">312 total</span>
    <div class="flex-1"></div>
    <input type="search" placeholder="Search name or email…" autofocus class="px-2 py-1 border border-gray-300 rounded-sm text-sm bg-white w-48 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
    <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
      <option value="">All statuses</option>
      <option>Active</option>
      <option>Pending</option>
      <option>Inactive</option>
      <option>Banned</option>
    </select>
    <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm bg-white focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
      <option value="">All roles</option>
      <option>Admin</option>
      <option>Member</option>
    </select>
    <a href="/admin/users/invite" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 no-underline inline-block">Invite user</a>
    <a href="/admin/users/export.csv" class="px-3.5 py-1 rounded-sm text-sm font-semibold cursor-pointer border border-gray-300 bg-transparent text-gray-500 font-normal hover:bg-gray-100 hover:text-gray-900 no-underline inline-block">Export CSV</a>
  </div>

  <div class="flex items-center gap-2.5 px-2.5 py-2 bg-gray-100 border border-gray-300 rounded-sm text-sm mb-3" hidden={selected.size === 0}>
    <span class="font-semibold mr-1">{selected.size}</span> selected
    <span class="text-gray-300">|</span>
    <button type="button" class="text-sm px-2.5 py-[3px] rounded-sm cursor-pointer border border-gray-300 bg-white text-gray-900 hover:bg-gray-100">Send email</button>
    <button type="button" class="text-sm px-2.5 py-[3px] rounded-sm cursor-pointer border border-gray-300 bg-white text-gray-900 hover:bg-gray-100">Change role…</button>
    <button type="button" class="text-sm px-2.5 py-[3px] rounded-sm cursor-pointer border border-red-200 bg-white text-red-600 hover:bg-red-50">Ban selected</button>
    <button type="button" class="text-sm px-2.5 py-[3px] rounded-sm cursor-pointer border border-red-200 bg-white text-red-600 hover:bg-red-50">Delete selected</button>
    <button type="button" class="bg-transparent border-none text-gray-500 cursor-pointer ml-auto text-xs" onclick={clearSelection}>✕ Clear</button>
  </div>

  <table class="w-full border-collapse text-sm">
    <thead>
      <tr>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-8">
          <input type="checkbox" checked={checkAll} onchange={toggleAll} class="cursor-pointer">
        </th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-[52px] font-mono">ID</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-[18%] cursor-pointer select-none hover:text-gray-900" onclick={() => handleSort('name')}>
          Name{sortColumn === 'name' ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ''}
        </th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-[20%]">Email</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-[8%]">Role</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-[8%]">Status</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-left w-[10%] cursor-pointer select-none hover:text-gray-900" onclick={() => handleSort('joined')}>
          Joined{sortColumn === 'joined' ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ''}
        </th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-right w-[8%]">Last seen</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-right w-[8%] font-mono">Entries</th>
        <th class="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 py-1.5 border-b-2 border-gray-300 whitespace-nowrap text-right w-[12%]"></th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr class:bg-blue-50={selected.has(user.id)}>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle w-8 group-hover:bg-gray-100"><input type="checkbox" checked={selected.has(user.id)} onchange={() => toggleRow(user.id)} class="cursor-pointer"></td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle w-[52px] font-mono text-xs text-gray-500">{user.id}</td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle w-[18%]"><span><a href="/admin/users/{user.id}" class="text-gray-900 no-underline font-medium hover:text-blue-600 hover:underline">{user.name}</a></span></td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle">{user.email}</td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border {user.roleClass}">{user.roleText}</span></td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle"><span class="inline-block text-xs font-semibold px-1.5 py-[1px] rounded border {user.statusClass}">{user.statusText}</span></td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500">{user.joined}</td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 font-mono text-xs">{user.last}</td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono">{user.entries}</td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap">
            <span class="opacity-0 group-hover:opacity-100 flex justify-end gap-2" hidden={confirmAction.userId === user.id}>
              {#each user.actions as act}
                {#if act.href && act.text === 'edit'}
                  <a href={act.href} class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline">edit</a>
                {:else if act.href}
                  <a href={act.href} class="text-xs text-gray-500 no-underline hover:text-blue-600 hover:underline">{act.text}</a>
                {:else if act.action === 'impersonate'}
                  <button type="button" class="text-xs bg-transparent border-none cursor-pointer text-gray-500 hover:text-blue-600" onclick={() => { if (confirm(`Impersonate user #${user.id}? You will act as this user until you stop.`)) alert(`Now impersonating user #${user.id} — demo only`); }}>impersonate</button>
                {:else}
                  <button type="button" class="text-xs bg-transparent border-none cursor-pointer {act.danger ? 'text-red-600 hover:text-red-600' : 'text-gray-500 hover:text-blue-600'}" onclick={() => showConfirm(user.id, act.action)}>{act.text}</button>
                {/if}
              {/each}
            </span>
            {#if user.confirm}
              <span class="flex items-center justify-end gap-1.5 text-xs whitespace-nowrap" hidden={confirmAction.userId !== user.id}>
                {user.confirm.label}
                <button type="button" class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">{user.confirm.action === 'revoke' ? 'Revoke' : user.confirm.action === 'delete' ? 'Delete' : 'Ban'}</button>
                <button type="button" class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs" onclick={hideConfirm}>Cancel</button>
              </span>
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <nav class="flex items-center gap-2.5 mt-5 text-sm">
    <span class="text-gray-500">« First</span>
    <span class="text-gray-500">‹ Prev</span>
    <a href="?after=5" class="text-blue-600">Next ›</a>
    <a href="?after=300" class="text-blue-600">Last »</a>
    <span class="ml-auto text-gray-500">1–5 of 312 · <a href="/admin/users/export.csv" class="text-blue-600">export CSV</a></span>
  </nav>
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
