const dateOfNumber=document.querySelector('#dob');
const luckyNumber=document.querySelector('#lucky-number');
const button=document.querySelector('#btn');
const noticeButton=document.querySelector('.notice-btn');
const notice=document.querySelector('.notice');
const displayMessage=document.querySelector('#message');

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum= sum+Number(dob.charAt(i));
    }
    return sum;
}

function compareNum(sum,luckyNum){
    if(sum%luckyNum===0){
        displayMessage.innerText="congrats!! your birthday is lucky..🎊🎊";
    }else{
        displayMessage.innerText="sadly your birthday is not lucky..😥😥";
    }
}

function checkListener(){
    const dob=dateOfNumber.value;
    const luckyNum=luckyNumber.value;
    const sum=calculateSum(dob);
    if(dob&&sum&&luckyNum){
        compareNum(sum,luckyNum);
    }else{
        displayMessage.innerText="please enter both the fields..";
    }
}

button.addEventListener('click',checkListener);
noticeButton.addEventListener('click',function clickHandeler(){
    notice.style.display="none";
})
