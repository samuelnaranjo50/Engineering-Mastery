public class ConvertStringToArray {
    public static void main (String args[]){
        String myName = "Samuel";
        char[] myArrayName = myName.toCharArray();

        int n_length = myArrayName.length;

        

        for (int i=0; i<n_length; i++){
            System.out.printf("Index %d | letter: %c \n", i,  myArrayName[i]);
        }
    }
} 