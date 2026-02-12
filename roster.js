
fetch('data/roster.json').then(r=>r.json()).then(rows => {
  const body = document.getElementById('roster-body');
  let html = '';
  for (const p of rows){
    const emailCell = p.email ? '<a href="mailto:'+p.email+'">'+p.email+'</a>' : '';
    html += '<tr><td>'+(p.number||'')+'</td><td>'+(p.name||'')+'</td><td>'+(p.position||'')+'</td><td>'+emailCell+'</td></tr>';
  }
  body.innerHTML = html;
}).catch(()=>{});
