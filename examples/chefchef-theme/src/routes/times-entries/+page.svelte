<svelte:head>
  <title>Time entries — AppName</title>
</svelte:head>

<script>
import { onMount } from "svelte";

let timerSeconds = $state(5025);
let confirmEntryId = $state(null);
let running = $state(true);

onMount(() => {
    const interval = setInterval(() => {
        timerSeconds++;
    }, 1000);
    return () => clearInterval(interval);
});

function formatTime(s) {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
}

function stopTimer() {
    running = false;
}

function showConfirm(id) {
    confirmEntryId = id;
}

function hideConfirm() {
    confirmEntryId = null;
}
</script>

<header class="border-b border-gray-300">
  <div class="page px-5 py-2 flex items-center justify-between">
    <a href="/" class="text-base font-bold text-gray-900 no-underline">AppName</a>
    <nav>
    <a href="/dashboard" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Dashboard</a>
    <span class="text-gray-500"> · </span>
    <a href="/time" class="text-sm text-gray-900 font-semibold no-underline">Time entries</a>
    <span class="text-gray-500"> · </span>
    <a href="/reports" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Reports</a>
    <span class="text-gray-500"> · </span>
    <a href="/settings" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Settings</a>
    <span class="text-gray-500"> · </span>
    <a href="/logout" class="text-sm text-gray-500 no-underline hover:text-blue-600 hover:underline">Sign out</a>
    </nav>
  </div>
</header>

  <main class="page px-5 pt-7 pb-16">

  <!-- Toolbar -->
  <div class="flex items-center gap-2.5 mb-5 flex-wrap">
    <h1 class="text-xl font-bold tracking-tight mr-1">Time entries</h1>
    <div class="flex-1"></div>
    <input type="search" placeholder="Search entries…" class="px-2 py-1 border border-gray-300 rounded-sm text-sm w-48 focus:outline-2 focus:outline-blue-600 focus:border-blue-600">
    <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm bg-white">
      <option value="">All projects</option>
      <option>toggl-pg-mirror</option>
      <option>memex</option>
      <option>Le Charlatan</option>
      <option>Homelab</option>
    </select>
    <select class="px-2 py-1 border border-gray-300 rounded-sm text-sm bg-white">
      <option>This week</option>
      <option>Last week</option>
      <option>This month</option>
      <option>Custom…</option>
    </select>
  </div>

  <!-- Running entry banner -->
  <div class="flex items-center gap-2.5 px-3 py-2 border border-green-200 bg-green-50 rounded-sm text-sm mb-5" hidden={!running}>
    <span class="w-2 h-2 bg-green-700 rounded-full flex-shrink-0"></span>
    <span>
      <strong>Review PR #42 — auth middleware</strong>
      &nbsp;·&nbsp;
      <span class="text-gray-500 text-sm">
        <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-blue-600"></span>toggl-pg-mirror
      </span>
    </span>
    <span class="font-mono text-sm text-green-700 font-semibold ml-auto">{formatTime(timerSeconds)}</span>
    <button onclick={stopTimer} class="px-2.5 py-0.5 border border-green-200 bg-white rounded-sm text-xs cursor-pointer text-green-700 hover:bg-green-50">Stop</button>
  </div>

  <!-- Period summary -->
  <div class="flex items-baseline gap-6 py-3.5 pb-5 border-b border-gray-300 mb-1 text-sm text-gray-500">
    <span>This week &nbsp;<strong class="font-mono text-base text-gray-900 font-bold">23h 40m</strong></span>
    <span>Mon–Fri &nbsp;<strong class="font-mono text-base text-gray-900 font-bold">4.7 h/day avg</strong></span>
    <span class="ml-auto text-xs">
      Synced from Toggl · <a href="#" class="text-blue-600">refresh</a>
    </span>
  </div>

  <!-- Day: Today -->
  <div>
    <div class="flex items-baseline justify-between pb-1 pt-2.5 border-b-2 border-gray-300">
      <span class="text-sm font-bold text-gray-900">Today — Monday, July 7</span>
      <span class="text-sm font-mono text-gray-500">4h 12m</span>
    </div>
    <table class="w-full border-collapse text-sm">
      <tbody>
        <tr class="group">
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:38%">
            <span class="text-gray-900 font-medium">Review PR #42 — auth middleware</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:18%">
            <span class="text-gray-500 text-sm">
              <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-blue-600"></span>toggl-pg-mirror
            </span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:14%">
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">code-review</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 text-sm" style="width:14%">
            09:00 – running
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono text-sm font-semibold text-green-700" style="width:10%">
            1:23:45
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap" style="width:6%">
            <span class="opacity-0 group-hover:opacity-100" hidden={confirmEntryId === 1}>
              <a href="#" class="text-xs text-gray-500 no-underline ml-2 hover:text-blue-600 hover:underline">edit</a>
              <a href="#" onclick={() => showConfirm(1)} class="text-xs text-gray-500 no-underline ml-2 hover:text-red-600">delete</a>
            </span>
            <span class="inline-flex items-center gap-1.5 whitespace-nowrap" hidden={confirmEntryId !== 1}>
              Sure? <button onclick={hideConfirm} class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">Delete</button>
              <button onclick={hideConfirm} class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs">Cancel</button>
            </span>
          </td>
        </tr>

        <tr class="group">
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:38%">
            <span class="text-gray-900 font-medium">LiteLLM proxy config — multi-model routing</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:18%">
            <span class="text-gray-500 text-sm">
              <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-purple-600"></span>Homelab
            </span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:14%">
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">infra</span>
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">ai</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 text-sm" style="width:14%">
            08:00 – 09:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono text-sm font-semibold" style="width:10%">
            1:00:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap" style="width:6%">
            <span class="opacity-0 group-hover:opacity-100" hidden={confirmEntryId === 2}>
              <a href="#" class="text-xs text-gray-500 no-underline ml-2 hover:text-blue-600 hover:underline">edit</a>
              <a href="#" onclick={() => showConfirm(2)} class="text-xs text-gray-500 no-underline ml-2 hover:text-red-600">delete</a>
            </span>
            <span class="inline-flex items-center gap-1.5 whitespace-nowrap" hidden={confirmEntryId !== 2}>
              Sure? <button onclick={hideConfirm} class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">Delete</button>
              <button onclick={hideConfirm} class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs">Cancel</button>
            </span>
          </td>
        </tr>

        <tr class="group">
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:38%">
            <span class="text-gray-500 italic font-normal">(no description)</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:18%">
            <span class="text-gray-500 text-sm">
              <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-green-600"></span>memex
            </span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:14%">
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 text-sm" style="width:14%">
            06:30 – 08:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono text-sm font-semibold" style="width:10%">
            1:48:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap" style="width:6%">
            <span class="opacity-0 group-hover:opacity-100" hidden={confirmEntryId === 3}>
              <a href="#" class="text-xs text-gray-500 no-underline ml-2 hover:text-blue-600 hover:underline">edit</a>
              <a href="#" onclick={() => showConfirm(3)} class="text-xs text-gray-500 no-underline ml-2 hover:text-red-600">delete</a>
            </span>
            <span class="inline-flex items-center gap-1.5 whitespace-nowrap" hidden={confirmEntryId !== 3}>
              Sure? <button onclick={hideConfirm} class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">Delete</button>
              <button onclick={hideConfirm} class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs">Cancel</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Day: Yesterday -->
  <div>
    <div class="flex items-baseline justify-between pb-1 pt-2.5 border-b-2 border-gray-300">
      <span class="text-sm font-bold text-gray-900">Yesterday — Sunday, July 6</span>
      <span class="text-sm font-mono text-gray-500">5h 30m</span>
    </div>
    <table class="w-full border-collapse text-sm">
      <tbody>
        <tr class="group">
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:38%">
            <span class="text-gray-900 font-medium">Rédaction chapitre 2 — French Tech cargo cult</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:18%">
            <span class="text-gray-500 text-sm">
              <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-red-600"></span>Le Charlatan
            </span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:14%">
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">writing</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 text-sm" style="width:14%">
            20:00 – 22:30
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono text-sm font-semibold" style="width:10%">
            2:30:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap" style="width:6%">
            <span class="opacity-0 group-hover:opacity-100" hidden={confirmEntryId === 4}>
              <a href="#" class="text-xs text-gray-500 no-underline ml-2 hover:text-blue-600 hover:underline">edit</a>
              <a href="#" onclick={() => showConfirm(4)} class="text-xs text-gray-500 no-underline ml-2 hover:text-red-600">delete</a>
            </span>
            <span class="inline-flex items-center gap-1.5 whitespace-nowrap" hidden={confirmEntryId !== 4}>
              Sure? <button onclick={hideConfirm} class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">Delete</button>
              <button onclick={hideConfirm} class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs">Cancel</button>
            </span>
          </td>
        </tr>

        <tr class="group">
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:38%">
            <span class="text-gray-900 font-medium">pgvector indexing — Graphiti integration</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:18%">
            <span class="text-gray-500 text-sm">
              <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-green-600"></span>memex
            </span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:14%">
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">pg</span>
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">ai</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 text-sm" style="width:14%">
            14:00 – 17:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono text-sm font-semibold" style="width:10%">
            3:00:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap" style="width:6%">
            <span class="opacity-0 group-hover:opacity-100" hidden={confirmEntryId === 5}>
              <a href="#" class="text-xs text-gray-500 no-underline ml-2 hover:text-blue-600 hover:underline">edit</a>
              <a href="#" onclick={() => showConfirm(5)} class="text-xs text-gray-500 no-underline ml-2 hover:text-red-600">delete</a>
            </span>
            <span class="inline-flex items-center gap-1.5 whitespace-nowrap" hidden={confirmEntryId !== 5}>
              Sure? <button onclick={hideConfirm} class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">Delete</button>
              <button onclick={hideConfirm} class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs">Cancel</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Day: Saturday -->
  <div>
    <div class="flex items-baseline justify-between pb-1 pt-2.5 border-b-2 border-gray-300">
      <span class="text-sm font-bold text-gray-900">Saturday, July 5</span>
      <span class="text-sm font-mono text-gray-500">1h 58m</span>
    </div>
    <table class="w-full border-collapse text-sm">
      <tbody>
        <tr class="group">
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:38%">
            <span class="text-gray-900 font-medium">CoreOS LUKS — systemd-cryptenroll migration</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:18%">
            <span class="text-gray-500 text-sm">
              <span class="inline-block w-[7px] h-[7px] rounded-full mr-1 align-middle bg-purple-600"></span>Homelab
            </span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle" style="width:14%">
            <span class="inline-block text-xs text-gray-500 border border-gray-300 rounded px-1 mr-1 whitespace-nowrap">infra</span>
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-gray-500 text-sm" style="width:14%">
            10:15 – 12:13
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right font-mono text-sm font-semibold" style="width:10%">
            1:58:00
          </td>
          <td class="px-2 py-[7px] border-b border-gray-300 align-middle text-right whitespace-nowrap" style="width:6%">
            <span class="opacity-0 group-hover:opacity-100" hidden={confirmEntryId === 6}>
              <a href="#" class="text-xs text-gray-500 no-underline ml-2 hover:text-blue-600 hover:underline">edit</a>
              <a href="#" onclick={() => showConfirm(6)} class="text-xs text-gray-500 no-underline ml-2 hover:text-red-600">delete</a>
            </span>
            <span class="inline-flex items-center gap-1.5 whitespace-nowrap" hidden={confirmEntryId !== 6}>
              Sure? <button onclick={hideConfirm} class="bg-red-600 text-white border border-red-600 px-2 py-[1px] rounded cursor-pointer text-xs">Delete</button>
              <button onclick={hideConfirm} class="bg-transparent text-gray-500 border border-gray-300 px-2 py-[1px] rounded cursor-pointer text-xs">Cancel</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <nav class="flex items-center gap-2.5 mt-6 text-sm">
    <span class="text-gray-500">« First</span>
    <span class="text-gray-500">‹ Prev</span>
    <span class="text-gray-300">|</span>
    <a href="#" class="text-blue-600">Next ›</a>
    <a href="#" class="text-blue-600">Last »</a>
    <span class="text-gray-500 ml-auto">Showing Jul 5–7 · <a href="#" class="text-blue-600">export CSV</a></span>
  </nav>

</main>

<footer class="border-t border-gray-300">
  <div class="page px-5 py-3 text-xs text-gray-500">
    <a href="/docs" class="text-gray-500 no-underline hover:underline">Documentation</a> ·
    <a href="/about" class="text-gray-500 no-underline hover:underline">About</a> ·
    <a href="/status" class="text-gray-500 no-underline hover:underline">Status</a>
  </div>
</footer>
