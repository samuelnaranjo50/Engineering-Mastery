#include <iostream>
#include <vector>
#include <string>
#include <sstream> 

using namespace std;
std::vector<long long> extractInputData (string inputLine);

int main (){
    // collecting user input variables & requests
    /*std::vector<long long> myData = {2, 50, 5, 3, 8, 10, 12};*/
    int inputNum;
    string line;

    cin >> inputNum;
    cin.ignore();   // removes the leftover '\n'
    getline(cin, line);

    std::vector<long long> myData = extractInputData(line);


    //Variables for big number selection

    long long memoBig = 0;
    long long memoPrevBig = 0;
    long long currentNumber;
    bool memoBigfound = false ;

    // Select the bigger number of your data

    for (int i = 0 ; i < myData.size(); i++){
        currentNumber = myData[i];

        if (memoBig <= currentNumber){
            memoPrevBig = memoBig;
            memoBig = currentNumber;
            memoBigfound = true;
        }
        if ((memoPrevBig < currentNumber) && (memoBigfound != true)){
            memoPrevBig = currentNumber;
        }

        memoBigfound = false; // Reset the bool to check again
    }

    long long product = memoPrevBig * memoBig;

    cout << product;






    return 0;
}

std::vector<long long> extractInputData(string inputLine) {
    std::vector<long long> array;
    long long num;
    stringstream sequence(inputLine); // Add string to data as separate inputs
    while (sequence >> num) {
        array.push_back(num);
    }
    return array;
}