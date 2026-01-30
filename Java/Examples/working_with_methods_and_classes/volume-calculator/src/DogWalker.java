public class DogWalker {
    /**
 * Takes dogs for a walk during the time specified by hour.
 * @param hour The hour of the day (0-23).
 * @param maxDogs The maximum number of dogs this walker can handle.
 * @return The number of dogs walked by this walker in the specified hour.
 */

private DogWalkCompany company;

public int walkDogs(int hour, int maxDogs)
{
    /* To be completed in Part (a) */

    // HAve in count mehtod numAvailableDogs(int hour) #dogs at certain hour
    // updateDogs(int hour, int numWalked)updates the internal data base of the company dogs available

    int getDogsNumAtSpecificHour = dogCompanyData.numAvailableDogs(hour);
    int walkedDogs;
    if ( maxDogs  >= getDogsNumAtSpecificHour){
        walkedDogs = getDogsNumAtSpecificHour; 
    }
    else {
        walkedDogs = maxDogs;
    }

    dogCompanyData.updateDogs(hour, walkedDogs);

    return walkedDogs;
}

public int dogWalkShift(int startHour, int endHour, int maxDogs){
    int hoursWorked = endHour -  startHour;
    int []hourWorkedArray;
    for (int start = startHour; start == endHour; start++){
        hourWorkedArray.append(start);
    }

    int []dogsWalkedPerHour;

    for (int i= 0; i < hoursWorked; i++){
        int currentDogCount = DogWalker.walkDogs(hourWorkedArray{i}, maxDogs);
        dogsWalkedPerHour.append(currentDogCount);
    }

    dogsWalkedPerHour.forEach( dogsWalked, {
        if (dogsWalked == maxDogs){
            int earned = (dogsWalked * 5) + 3
        }
        else {
            int earned = (dogsWalked * 5)
        }
    })
    return earned;
}
}