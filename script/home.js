
const  container = document.getElementById('card-container')

async function loadIssue() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const result = await res.json();
    result.data.forEach(cart => {
        console.log(cart);
         container.innerHTML +=`<div class="card-open bg-base-100  w-full h-full shadow-sm border-t-4 ${cart.priority==='low'?'border-purple-500 ':'border-green-500'}  rounded-sm hover:translate-y-0.5 hover:shadow-sm  ${cart.priority==='low'? 'hover:shadow-purple-500': 'hover:shadow-green-500'} transition-all duration-200">
                <div class="card-body flex flex-col">
                    <div class="img w-full flex justify-between">
                        <img src="./assets/Open-Status.png" class="w-8 h-8" alt="open">
                        <button class="btn btn-soft btn-error rounded-full">${cart.priority}</button>
                    </div>
                    <h2 class="card-title font-bold text-2xl">${cart.title}</h2>
                    <p class="text-[#64748B] line-clamp-2">${cart.description}</p>
                    <div class="btns flex gap-2.5">
                       ${cart.labels.map(label => `<button class =" btn btn-warning rounded-full text-white" > ${label} </button>`).join('')}
                    </div>
                    <div class="py-2 mt-auto">
                        <hr>
                        <p class="text-[#64748B] text-[16px] mt-2.5"> ${cart.author} </p>
                        <p class="text-[#64748B] text-[16px]">${cart.updatedAt}</p>    
                    </div>
                </div>
                </div> `
    });
}
loadIssue();