async function bucketsort(arr,n) {
    if(hasPressedStop == true){
        return;
    }
    best.innerHTML = "N"; 
    avg.innerHTML = "N^2"; 
    wrost.innerHTML = "N^2"; 
    space.innerHTML = "1" ; 
    // maximum help in finding bucket size 
    let maxi = parseInt(arr[0].style.height);
    // list = [] ; 
    for(let i=0;i<n;i++) {
        if(hasPressedStop == true){
            return;
        }
        // var temp = parseInt(arr[i].style.height); 
        // list.push(temp); 
        // console.log(parseInt(arr[i].style.height))
        // mymap.set(temp,[]); 
        if(maxi < parseInt(arr[i].style.height)) {
            maxi=parseInt(arr[i].style.height); 
        }
        // if(mini > parseInt(arr[i].style.height)) {
        //     mini=parseInt(arr[i].style.height); 
        // }
    }
    // console.log(list);

    // map to store buket no as key and list as value for respective bucket 
    let mymap = new Map(); 
    // map to store bucket no to a particular color 
    let colormap = new Map(); 
    let start=0; 
    // end size of the array round off 
    let end = parseInt(((maxi/10)+1)*10)
    // creating buckets 
    for(let i=0;i<=maxi;i=i+50) {
        if(hasPressedStop == true){
            return;
        }
        // let end=start+25; 
        // mapping list to particular bucket no 
        mymap.set(start,[]); 
        // color mapping 
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        colormap.set(start,randomColor); 
        // increasing bucket number 
        start++; 
        // start+=25; 
    }

    // inserting element to respective bucket 
    for(let i=0;i<n;i++) {
        if(hasPressedStop == true){
            return;
        }
        // find height of element 
        var temp = parseInt(arr[i].style.height); 
        // find bucket number by dividing 50 because bucket size is 50 
        var bucket_no = Math.floor(temp/50); 
        // console.log(bucket_no,temp);
        // fatching list to respective bucket and background color 
        mylist=mymap.get(bucket_no) ;
        arr[i].style.background= "#" + colormap.get(bucket_no); 
        await delayTime(delay);
        // var temp = parseInt(arr[i].style.height);
        // console.log(temp); 
        // pushing number to respective bucket 
        mylist.push(temp); 
    }

    // sort indivisual bucket list 
    for(let i=0;i<mymap.size;i++) {
        if(hasPressedStop == true){
            return;
        }
        // console.log(1); 
        // let end=start+25; 
        mylist=mymap.get(i) ;
        mylist.sort(); 
        // console.log(i,mylist);
        // for(let j=0;j<mylist.length;j++) {
        //     console.log(mylist[j]); 
        // }
        // start+=25; 
    }
    // assing value of each element by traversing bucket in increasing order 
    let left = 0; 
    for(let[key , value] of mymap) {
        if(hasPressedStop == true){
            return;
        }
        // console.log(value); 
        // bucket size 
        for(let j=0;j<value.length;j++) {
            if(hasPressedStop == true){
                return;
            }
            console.log(1); 
            arr[left].style.height=value[j]+"px"; 
            arr[left].style.background="#" + colormap.get(key); 
            await delayTime(delay);
            left++; 
        }
    }
}


const bucketsortbtn = document.querySelector(".bucketsort");
bucketsortbtn.addEventListener("click", async function () {
    // console.log("button is working ")
    let arr = document.querySelectorAll('.bar');
    let n = arr.length;

    hasPressedStop = false;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    enableStopSortingBtn();
    await bucketsort(arr, n);
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