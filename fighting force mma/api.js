/* Shared API helper: consistent JSON, credentials same-origin. */
async function api(path, { method = 'GET', body, form, headers = {} } = {}) {
  const opts = { method, headers: { ...headers }, credentials: 'same-origin' };
  if (form) { opts.body = form; }
  else if (body !== undefined) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(path, opts);
  const json = await res.json().catch(() => ({ ok: false, error: { message: 'Invalid server response' } }));
  if (!json.ok) throw new Error(json.error?.message || 'Request failed');
  return json.data;
}
function esc(s) { const d = document.createElement('div'); d.textContent = String(s ?? ''); return d.innerHTML; }
function money(n) { return 'R ' + Number(n || 0).toFixed(2); }
