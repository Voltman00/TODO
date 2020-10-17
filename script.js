'use strict'
const btnAdd = document.querySelector('.btn--add');
start();

function start(){
const btnStart = document.querySelector('.start');

const addPlace = document.querySelector('.topic');

const allContent = document.querySelector('.container');

var topicArray = [];
var textArray = [];
btnStart.addEventListener('click',()=>{
    const h4 = document.querySelector('h4');
    h4.classList.add('fall');
    btnStart.classList.add('fall');
    h4.addEventListener('transitionend',()=>{
        var today = new Date().toLocaleDateString();
        console.log(today);
        allContent.innerHTML = `  <div class="task">
        <div class="head-task">
        <h6>Temat:</h6>
        <input class="input-topic" type="text" placeholder="Click to write" >
        <p class="date">${today}r.</p>
        </div>
        <textarea class="textarea-text" placeholder="Click to write"></textarea>
        <button class="save">Save</button>
        </div>`;
   


    
        const btnAdd = document.querySelector('.btn--add');
    const btnConfirm = document.querySelector('.save');
    btnConfirm.addEventListener('click', ()=>{
        const textTopic = document.querySelector('.input-topic').value;
        const textArea = document.querySelector('.textarea-text').value;
        const task = document.querySelector('.task');
        topicArray.push(textTopic);
        textArray.push(textArea);

        addPlace.innerHTML += `
            <div class="btn-topic">
                <h3>${textTopic}</h3>
            </div>`;
        task.remove();
        
        btnAdd.style.display = "inline";
        edycja();

    })
});
});
function edycja(){
    const btnTopic = document.querySelectorAll('.btn-topic');
    
    btnAdd.addEventListener('click',()=>{
        console.log('dasdsa');
        start();
    })
    btnTopic.forEach(e=>{
        e.addEventListener('click',ev=>{
            if(ev.target.tagName === 'H3'){
                
                const topicText = ev.target.textContent;

                const textContent = textArray[topicArray.indexOf(topicText)];

                

                allContent.innerHTML = `
                <div class="task">
                <div class="head-task">
                <h2>Temat: ${topicText}</h2>
                <p class="date">20.10.2020 r.</p>
            </div>
            <p class="tekst">${textContent}</p>
           
            </div>`
                ;
                // const text = document.querySelector('.tekst');
                // text.innerText = textContent;

                const buttons = document.querySelectorAll('.btn-del');
                buttons.forEach(ef=>{
                    ef.remove();
                })
                e.innerHTML += `<button class="btn-del">-</button>`;
               
            }
            if(ev.target.tagName ==='BUTTON'){
                e.classList.add("fall");
                ev.target.remove();
                const task = document.querySelector('.task');
                    task.remove();
                e.addEventListener('transitionend' , ()=>{
                    console.log('dasdsa')
                    allContent.innerHTML = `<h4>Create your first task</h4>
                    <button class="start">></button>`;
                    e.remove();
                    start();
                });
            }
        });

    });

}

};


// e.remove();