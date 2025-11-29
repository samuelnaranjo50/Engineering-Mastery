public class LoopOverAnArray {
    public static void main (String args[]){
        int[] myArray = {1,2,3,4,5,6,7,8,9};

        for (int i=0; i<myArray.length; i++){
            System.out.printf("Index %d | Value: %d \n", i,  myArray[i]);
        }
    }
} 