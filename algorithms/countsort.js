// count sort algorithm 
async function countsort(arr,n) {
    best.innerHTML = "N"; 
    avg.innerHTML = "N^2"; 
    wrost.innerHTML = "N^2"; 
    space.innerHTML = "1" ; 
    // console.log(1); 
    if(hasPressedStop == true){
        return;
    }
    if(n==0) return 

    // find minimum and maximum 
    let mini = parseInt(arr[0].style.height); 
    let maxi = parseInt(arr[0].style.height); 

    // map to assign unique element height to list containing index of equal element 
    let mymap = new Map(); 
    // list = [] ; 
    for(let i=0;i<n;i++) {
        if(hasPressedStop == true){
            return;
        }
        var temp = parseInt(arr[i].style.height); 
        // list.push(temp); 
        // console.log(parseInt(arr[i].style.height))
        // setting map 
        mymap.set(temp,[]); 
        if(maxi < parseInt(arr[i].style.height)) {
            maxi=parseInt(arr[i].style.height); 
        }
        if(mini > parseInt(arr[i].style.height)) {
            mini=parseInt(arr[i].style.height); 
        }
    }
    // console.log(list); 
    // puting element to its perticular count 
    for(let i=0;i<n;i++) {
        if(hasPressedStop == true){
            return;
        }
        var temp = parseInt(arr[i].style.height); 
        // console.log(parseInt(arr[i].style.height))
        var value = mymap.get(temp); 
        value.push(i); 
        // console.log(value)
    }
    let track = new Map(); 
    // mapping color to key of privious map means unique height 
    let colortrack = new Map(); 
    // for different colors 
    let checkcolor = new Set() ; 
    let index=0; 
    for(let i=mini;i<=maxi && index < n ;i++) {
        if(hasPressedStop == true){
            return;
        }
        if(mymap.has(i)){
            mylist=mymap.get(i) ;
            // generating random color and assigning 
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            while(checkcolor.has(randomColor)) {
                randomColor = Math.floor(Math.random()*16777215).toString(16);
            }
            checkcolor.add(randomColor); 
            colortrack.set(i,randomColor); 
            for(let j=0;j<mylist.length;j++) {
                if(hasPressedStop == true){
                    return;
                }
                arr[mylist[j]].style.background="#" + randomColor ;
                await delayTime(delay);
            }
        }
        
    }

    // setting values from stating by traversing mymap 
    for(let i=mini;i<=maxi && index < n ;i++) {
        if(hasPressedStop == true){
            return;
        }
        if(mymap.has(i)){
            mylist=mymap.get(i) ;
            for(let j=0;j<mylist.length;j++) {
                if(hasPressedStop == true){
                    return;
                }
                // console.log(i); 
                // assigning height and color 
                arr[index].style.height=i+"px" ;  
                arr[index].style.background= "#" + colortrack.get(i) ; 
                index++; 
                await delayTime(delay);
                // arr[index].style.background="orange"; 
            }
        }
    }
}

// console.log("hello")

const countsortbtn = document.querySelector(".countsort");
countsortbtn.addEventListener("click", async function () {
    // console.log("button is working ")
    let arr = document.querySelectorAll('.bar');
    let n = arr.length;

    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await countsort(arr, n);
    // arr[0].style.background = 'green';
    if (hasPressedStop == true) {
        disableSpeedSlider();
    } else {
        enableSortingBtn();
        enableSizeSlider();
    }
    enableNewArrayBtn();
    disableStopSortingBtn();
});