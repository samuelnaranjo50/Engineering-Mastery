 public class StringSelectionAndManipulation {
    public static void main (String args[]){
        String sentence = "Maple Tree";
        // Use `substring` to separate out "Maple" and "Tree" into two different objects

        String firstHalf = sentence.substring(0, 5);
        String secondHalf = sentence.substring(6);

        System.out.println("Sentence first half: " + firstHalf );
        System.out.println("Sentence second half: " + secondHalf);

        // Use `concat` to string the object back together as "Maple Tree".

        String concatenatedString = firstHalf.concat(" ").concat(secondHalf);

        System.out.println("Concatenated string: " + concatenatedString);

         
        // Use toLowerCase to convert all the characters to lowercase

        System.out.printf("Initial string %s With applied method %s \n", sentence, sentence.toLowerCase());

        // Use toUpperCase to convert all the characters to lowercase

        System.out.printf("Initial string %s With applied method %s \n", sentence, sentence.toUpperCase());
        
    }
 }