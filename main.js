const intro=document.getElementsByClassName("welcomee")[0];
intro.style.backgroundColor="grey";

const parag=document.getElementById("par");

parag.style.fontWeight=900;

parag.setAttribute('class','paragraph');

const imag=document.getElementsByTagName("img")[0];
imag.setAttribute('src','https://images.pexels.com/photos/27676989/pexels-photo-27676989/free-photo-of-a-street-sign-with-a-picture-of-a-person-on-it.jpeg?auto=compress&cs=tinysrgb&w=600')


const list=document.querySelector('ul');
list.style.display="flex";
list.style.gap="5rem";

for(let i=0;i<3;i++){

    const li=document.createElement('li');
    li.setAttribute('class','li-class');
    li.style.color="red"
    li.style.border="1px solid black";
    li.textContent=`item  ${i}`;
    list.appendChild(li);
}

const bodyTabe=document.getElementsByTagName('tbody')[0];
const ttable=document.getElementsByTagName('table')[0];
ttable.setAttribute('class','table1');
for(let i=0;i<2;i++){
    const row=document.createElement('tr');
    for(let j=0;j<3;j++){
        const td=document.createElement('td');
        td.textContent=`td nuumber ${i}`
        row.appendChild(td);
    }
    bodyTabe.appendChild(row);
}
