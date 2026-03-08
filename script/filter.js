let all = document.getElementById('btn-all');
let open = document.getElementById('btn-open');
let closed = document.getElementById('btn-closed');

all.addEventListener('click',function(){
    renderCardsIssue(allIssue);
    open.classList.remove('btn-active','btn-primary' )
    closed.classList.remove('btn-active','btn-primary' )
    all.classList.add('btn-active','btn-primary' )
})
open.addEventListener('click',function(){
const openIssue = allIssue.filter(cart=>cart.status==='open')
renderCardsIssue(openIssue)
all.classList.remove('btn-active','btn-primary' )
closed.classList.remove('btn-active','btn-primary' )
open.classList.add('btn-active','btn-primary' )
})
closed.addEventListener('click',function(){
const closedIssue = allIssue.filter(cart=>cart.status==='closed')
renderCardsIssue(closedIssue);
all.classList.remove('btn-active','btn-primary' )
closed.classList.add('btn-active','btn-primary' )
open.classList.remove('btn-active','btn-primary' )

})
// active buton stastuse;

