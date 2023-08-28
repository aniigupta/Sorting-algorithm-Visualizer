// brick Algorithm 
async function brick() {
    if(hasPressedStop == true){
        return;
    }
    const ele = document.querySelectorAll(".bar");

    best.innerHTML = "N"; 
    avg.innerHTML = "N^N"; 
    wrost.innerHTML = "N^N"; 
    space.innerHTML = 1 ; 
    let issorted = false ; 
     while(!issorted) {
        if(hasPressedStop == true){
            return;
        }
        await delayTime(delay);
        issorted=true ; 
        // For even place element swap 
        for(let i=1;i<ele.length-1;i=i+2) {
            if(hasPressedStop == true){
                return;
            }
            await delayTime(delay);
            ele[i].style.background = 'cyan';
            ele[i+1].style.background = 'cyan';  
            if(parseInt(ele[i].style.height) > parseInt(ele[i+1].style.height)) {
                await delayTime(delay);
                swap(ele[i], ele[i+1]); 
                issorted=false ; 
            }
            ele[i].style.background = 'orange';
            ele[i+1].style.background = 'orange';  
        }
        // for odd place element swap 
        for(let i=0;i<ele.length-1;i=i+2) {
            if(hasPressedStop == true){
                return;
            }
            await delayTime(delay);
            ele[i].style.background = 'cyan';
            ele[i+1].style.background = 'cyan';  
            if(parseInt(ele[i].style.height) > parseInt(ele[i+1].style.height)) {
                await delayTime(delay);
                swap(ele[i], ele[i+1]); 
                issorted=false ; 
            }
            ele[i].style.background = 'orange';
            ele[i+1].style.background = 'orange';  
        }
     }

    //  to make green all element who left 
     for(let i=0;i<ele.length;i++){
        // console.log(1)
        await delayTime(delay);
        ele[i].style.background = 'green';
     }

     
}


const bricksortbtn = document.querySelector(".bricksort");
bricksortbtn.addEventListener('click', async function(){
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await brick(); 
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});