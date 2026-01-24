public class PositionAndLength {
    static public void main (String args[]){
        // Lenght method 

        String txt = "Hello my dear students";
        String arr[] = {"Hi", "my", "You"};

        System.out.println("This is the # of char in text: " + txt.length());
        System.out.println("This is the # of array elements: " + arr.length);


        //Finding the position of a char
        System.out.println("Char 'H' in the txt string is: " + txt.indexOf("H") );

        // Finding the index of a char
        System.out.println("Char at index 0 in the txt string is: " + txt.charAt(0) );

    }
}