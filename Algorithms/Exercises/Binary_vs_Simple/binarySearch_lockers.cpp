#include <iostream>
#include <vector>
#include <cmath>
#include <string>
using namespace std;

std::string FoundorNot (int boolean);
int even_identifier(int number);
std::vector<int> binary_search (std::vector<int> array, int search_value);

int main () {

    //std::vector<int> lockers = {1, 10, 11, 25, 41, 50, 73, 78, 100};
    std::vector<int> lockers;
    for (int i = 1; i <= 200; i++) {
    lockers.push_back(i);
    }

    std::string foundMessage;
    int user_num;
    cout << "Number to find:";
    cin >> user_num;


    

    std::vector<int> operationOutput = binary_search(lockers, user_num);

    if (operationOutput.size() > 2){
        foundMessage = FoundorNot(operationOutput[0]);
        cout << "Was Value found:";
        cout << foundMessage << endl;
        cout << "Value Found :";
        cout << operationOutput[2] << endl;
        cout << "steps to find It :";
        cout << operationOutput[1];
    }
    else {
        foundMessage = FoundorNot(operationOutput[0]);
        cout << "Was Value found:";
        cout << foundMessage << endl;
        cout << "Running steps:";
        cout << operationOutput[1];
    }


    return 0;
}

std::vector<int> binary_search (std::vector<int> array, int search_value){

    int valueFound = 0;
    std::vector<int> currentArray;
    std::vector<int> newArray = {};
    int search_cycle_item_position;
    int list_lenght;
    int isEven;
    int counter = 0;
    int find_value_algorithm = false;
    int not_find_value = false;
    int status = false;
    

    currentArray = array;

    double BigOSteps = ceil(log2(array.size())) + 1;


    while ( find_value_algorithm == false && not_find_value == false) {

        counter++;

        //CHECKING: Does a new array has been added modifying the intial one?
        if(newArray.size() > 0){
            currentArray = newArray;
        }
        else{
            currentArray = array;
        }

        if (currentArray.size() < 2){
            search_cycle_item_position = currentArray.size() - 1;
        
        }
        else {
            int arrSize = currentArray.size();
            isEven = even_identifier(arrSize);
            if (isEven == true){
                search_cycle_item_position = (currentArray.size() / 2) -1;

            }
            else{
                 search_cycle_item_position = (currentArray.size() / 2);

            }
        }
                
        

        // Check if item was found
        if (search_value == currentArray[search_cycle_item_position]){
            valueFound = currentArray[search_cycle_item_position];
            find_value_algorithm = true;
            status =  true;

            return { status, counter, valueFound};
        }
        else if (currentArray[search_cycle_item_position] > search_value){
            newArray.clear();
            for( int i = 0; i < search_cycle_item_position; i++){
        
                newArray.push_back(currentArray[i]);
            }
        }
        else if (currentArray[search_cycle_item_position] < search_value){
            newArray.clear();
            for( int i = search_cycle_item_position; i < currentArray.size(); i++){
                
                newArray.push_back(currentArray[i]);
            }
        }

        if(counter >= BigOSteps){
            not_find_value = true;
            return { status, counter};

        }
        



    }
};

int even_identifier(int number){
    int result =  number - ((number / 2) * 2);
    if (result > 0){
        return true;
    }
    else {
        return false;
    }

}
std::string FoundorNot (int boolean){
    if (boolean == true) {
        return "Yes";
    }
    else {
        return "No";
    }
}