const modal = document.getElementById('issueModals');

async function openModal(id) {
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
    const result = await res.json()
    const issue = result.data;
    document.getElementById('modalTitle').innerText=issue.title
    document.getElementById('authorName').innerText=issue.author
    document.getElementById('cardDate').innerText=issue.createdAt
    document.getElementById('name').innerText=issue.assignee ||'No assignee';
    document.getElementById('modalStatus').className = issue.status==='closed' ?'btn bg-purple-500 outline-none rounded-full text-white':'btn bg-green-500 rounded-full outline-none text-white'
    document.getElementById('modalStatus').innerText = issue.status
    document.getElementById('discription').innerText=issue.description;
    

    document.getElementById('modalLabels').innerHTML=issue.labels.map(label=>`<button class="btn btn-warning">${label}</button>`).join('')
    document.getElementById('priority').innerText=issue.priority

    
    modal.showModal()
}