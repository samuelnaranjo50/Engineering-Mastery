import java.util.Scanner;

public class VolumeCalculator{
    private static double prismAndCuboid(double lenght, double widht, double height) {
        double calculateVolume = lenght * widht * height;
        return calculateVolume;
    }

    private static double cube(double side) {
        double calculateVolume = side * side * side;
        return calculateVolume;
    }

    private static double sphere(double radius) {
        double calculateVolume = (4.0/3.0) *  Math.PI * (radius * radius * radius);
        return calculateVolume;
    }

    public static void main (String arg[]){
        Scanner scanner = new Scanner(System.in);

        while(true){
            System.out.println("Type 'Exit' to stop the program");
            System.out.println("Pick the mode by typing the 'shape type': Cube | Cuboid or Prism | Sphere");

            String typeOfCalculation = scanner.next().toUpperCase();

            if(typeOfCalculation.equals("EXIT")){
                System.out.println("Stopping the program...");
                break;
            }

            switch (typeOfCalculation) {
                case"CUBE":
                    System.out.printf("What is the side lenght of the cube: ");
                    double userInputForSide = scanner.nextDouble();
                    System.out.printf("The volume of the cube is: %dm^3 \n", (int) VolumeCalculator.cube(userInputForSide));
                    break;
                case "CUBOID":
                case "PRISM":
                    System.out.printf("working");
                    System.out.printf("What is the lenght: ");
                    double userInputForLenght = scanner.nextDouble();
                    System.out.printf("What is the width: ");
                    double userInputForWidth = scanner.nextDouble();
                    System.out.printf("What is the Height: ");
                    double userInputForHeight = scanner.nextDouble();
                    System.out.printf("The volume of the Prism or Cuboid is: %dm^3 \n", (int) VolumeCalculator.prismAndCuboid(userInputForLenght,userInputForWidth, userInputForHeight));
                    break;
                case "SPHERE":
                    System.out.printf("What is the radius: ");
                    double userInputForRadius = scanner.nextDouble();
                    System.out.printf("The volume of the Prism or Cuboid is: %dm^3 \n", (int) VolumeCalculator.sphere(userInputForRadius));
                    break;
                default: 
                    System.out.println("Invalid data type or unnsuported shape");
                    break;
            }
            System.out.println();
        }
    }

}