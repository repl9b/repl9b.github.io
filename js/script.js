window.onload = function (e){
    e.preventDefault;
    let btnBlock = document.querySelectorAll('#block');
    for(let i = 0; i < btnBlock.length; i++)
    btnBlock[i].onclick = function (){
        swal('Ви зараз на цій сторінці =)');
    }   
}