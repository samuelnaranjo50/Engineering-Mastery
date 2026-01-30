public class ForceCalculator{

    public static double calculateForce( double mass, double acceleration){
    // Takes `mass` and `acceleration` (Standard F = ma)
        double force = mass * acceleration;
        return force;
    }

    public static double calculateForce( double mass, double initialVelocity, double finalVelocity, double time ){
        // Takes `mass`, `initialVelocity`, `finalVelocity`, and `time`. (You must calculate acceleration first: $a = \frac{v_f - v_i}{t}$).
        double acceleration = (finalVelocity - initialVelocity) / time;
        double force = calculateForce(mass, acceleration);
        return force;

    }

    public static  double [] calculateForce( double [] massesArr, double acceleration){
        // Takes an **array** of masses and a single acceleration value

        

        int massesArrLength = massesArr.length;

        double [] forcesArr = new double[massesArrLength];

        for (int i= 0; i < massesArrLength; i++){
            forcesArr[i] =  calculateForce(massesArr[i], acceleration);
        }

        return forcesArr;
    }




 public static void main(String[] args) {
    // 1. Testing Standard F = ma
    double forceA = calculateForce(10.5, 9.8);
    System.out.println("Force A: " + forceA);

    // 2. Testing Force with Velocity/Time
    double forceB = calculateForce(10.5, 0.0, 20.0, 5.0);
    System.out.println("Force B: " + forceB);

    // 3. Testing Array of Masses
    double[] myMasses = {10.0, 20.0, 30.0};
    double constantAcc = 2.0;
    double[] results = calculateForce(myMasses, constantAcc);
    
    System.out.print("Force Array Results: ");
    for (double f : results) {
        System.out.print(f + " ");
    }
 }
}