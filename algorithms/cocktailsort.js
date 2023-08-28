// cocktail sort algorithm 

async function cocktail() {
    best.innerHTML = "N"; 
    avg.innerHTML = "N^2"; 
    wrost.innerHTML = "N^2"; 
    space.innerHTML = "1" ; 

    if(hasPressedStop == true){
        return;
    }

    const ele = document.querySelectorAll(".bar");
    let n=ele.length ;
    console.log(n); 
    let start =0 ; 
    let end = n-1; 
    let issorted = true ; 
    while(issorted) {
        if(hasPressedStop == true){
            return;
        }
        issorted=false ; 
        // console.log("hello")
        // left to right find maxi and place at end 
        for(let i=start ; i< end ; i++) {
            if(hasPressedStop == true){
                return;
            }
            ele[i].style.background = 'cyan';
            ele[i+1].style.background = 'cyan';
            if(parseInt(ele[i].style.height) > parseInt(ele[i+1].style.height)){
                issorted=true ; 
                await delayTime(delay);
                swap(ele[i], ele[i+1]);
            }
            ele[i].style.background = '#e43f5a';
            ele[i+1].style.background = '#e43f5a';
        }
        if(!issorted) break ; 
        ele[end].style.background = 'green';
        end=end-1 ; 
        // right to left find minimum ans place at start 
        for(let i=end ; i> start ; i--) {
            if(hasPressedStop == true){
                return;
            }
            ele[i].style.background = 'cyan';
            ele[i-1].style.background = 'cyan';
            if(parseInt(ele[i].style.height) < parseInt(ele[i-1].style.height)){
                issorted=true ; 
                await delayTime(delay);
                swap(ele[i], ele[i-1]);
            }
            ele[i].style.background = '#e43f5a';
            ele[i-1].style.background = '#e43f5a';
        }
        if(!issorted) break ; 
        ele[start].style.background = 'green';
        start=start+1; 
    }

    // green each element who left 
    for(let i=start;i<=end;i++) {
        ele[i].style.background = 'green';
    }
}

const cocktailsortbtn = document.querySelector(".cocktailsort");
cocktailsortbtn.addEventListener('click', async function(){
    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await cocktail();
    if(hasPressedStop==true){
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});