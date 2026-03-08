let inputSearch = document.getElementById('inputSearch');
inputSearch.addEventListener('input',async function(){
    const searchText = inputSearch.value;
    showSpinner();
    if (searchText==='') {
        hideSpinner()
        renderCardsIssue(allIssue);
        return;
    }
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
    const result = await res.json()
    renderCardsIssue(result.data)
    hideSpinner()
})