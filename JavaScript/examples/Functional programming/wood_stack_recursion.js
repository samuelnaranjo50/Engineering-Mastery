function cut_wood(woodstack_n) {
    //Base case **Codition that stop recursive loop**
    if (woodstack_n == 0){
        console.log("Finish cuting the wood stack");
        return 1;
    }
    /* Recursive case **The task is broken into smaller tasks and is 
    reduce closely to the base case each time** */
    console.log("Cut wood peace number:", woodstack_n);
    woodstack_n --;
    cut_wood(woodstack_n);
}

cut_wood(10);