
fetch('data/photos.json').then(r=>r.json()).then(list => {
  const g = document.getElementById('gallery');
  let html = '';
  for (const src of list){ html += '<img src="'+src+'" alt="Team photo">'; }
  g.innerHTML = html;
}).catch(()=>{
  const g = document.getElementById('gallery');
  g.innerHTML = '<p>No photos yet.</p>';
});
