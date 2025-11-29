public class ArrayIterationOverArguments {
    public static void main (String args[]){

        int arg_length = args.length;
        System.out.println("The # of arguments is: " + arg_length);

        if (arg_length > 0){
            for (int i=0; i<arg_length; i++){
                System.out.printf("Argument: %d | Content: %s \n", i+1,  args[i]);
            }
        }
        else {
            System.out.println("No argument provided, try again!");
        }

    }
}