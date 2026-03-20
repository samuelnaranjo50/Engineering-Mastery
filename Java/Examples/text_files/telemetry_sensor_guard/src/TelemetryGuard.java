import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class TelemetryGuard {

    private static double processTelemetry(Scanner src) throws IOException{
        List<Integer> readings = new ArrayList<>();
        int currentNumber = 0;
        Integer pastNumber = null;
        
        while (src.hasNext()) {
            
            currentNumber = src.nextInt();
            // Filter out 999 & duplicates
            if(currentNumber != 999 && (pastNumber == null || currentNumber != pastNumber)) {
        readings.add(currentNumber);
            }

            pastNumber = currentNumber;
        }

        // Handle the average return. Array list summatory

        int sum = 0;
        double average;
        for (int elem : readings) {
            sum += elem;
        }

        average = (double)sum / readings.size();

        return average;

        }

    public static void main(String []args){
        try {
            File telemetryFile = new File("telemetry.txt");
            Scanner src = new Scanner(telemetryFile);
            double average = processTelemetry(src);
            System.out.println("The average is:" + average);
            src.close();
        } catch (Exception e) {
            System.err.println("The file was not found" + e);
        }
        
        

    }
}