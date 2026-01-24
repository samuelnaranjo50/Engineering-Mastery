public class StringComparison {
    public static void main(String args[]){
        String s1 = "Maple Tree";
        String sObj = new String("Maple Tree");

        System.out.println("Is s1 equal to s2 " + (s1 == sObj));
        System.out.println("Is s1 equal to s2 when using the .equal method: " + s1.equals(sObj));

        // Handling case sensitive comparisons

        String upper = "Hello";
        String lower = "helLo";

        System.out.println("Is upper equal to lower: " + (upper == lower));
        System.out.println("Is upper equal to lower when using non case sensitivity: "+ upper.equalsIgnoreCase(lower));


    }
}