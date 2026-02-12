
const announcementsEl = document.getElementById('announcements');
const scheduleEl = document.getElementById('schedule');
async function loadJSON(path){ const r = await fetch(path); return r.json(); }
function fmtDate(d){ const dt = new Date(d); return dt.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}); }
function renderAnnouncements(items){ if(!announcementsEl) return; if(!items.length){ announcementsEl.innerHTML='<p>No announcements yet.</p>'; return;} announcementsEl.innerHTML = items.map(a=>'<div class="card">'+ '<div class="badge">'+fmtDate(a.date)+'</div>'+'<h3>'+(a.title||'')+'</h3>'+'<p>'+(a.body||'')+'</p>'+'</div>').join(''); }
function renderSchedule(items){ if(!scheduleEl) return; if(!items.length){ scheduleEl.innerHTML='<p>No games scheduled.</p>'; return;} let rows=''; for(const g of items){ rows += '<tr><td>'+fmtDate(g.date)+'</td><td>'+(g.opponent||'')+'</td><td>'+(g.location||'')+'</td><td>'+(g.time||'')+'</td><td>'+(g.result||'')+'</td></tr>'; } scheduleEl.innerHTML='<table class="table"><thead><tr><th>Date</th><th>Opponent</th><th>Location</th><th>Time</th><th>Result</th></tr></thead><tbody>'+rows+'</tbody></table>'; }
(async()=>{ try{ const [ann,sched] = await Promise.all([loadJSON('data/announcements.json'), loadJSON('data/schedule.json')]); renderAnnouncements(ann); renderSchedule(sched); }catch(e){} })();
