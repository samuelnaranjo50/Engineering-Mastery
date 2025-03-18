#include <stdio.h> 

int addition_calculator(int value1, int value2);


int main()
{
    int input1;
    int input2;
    int addition_result;
    printf("ADDITION CALCULATOR\n");

    printf("Number 1: ");
    scanf("%d", &input1);

    printf("Number 2: ");
    scanf("%d", &input2);

    addition_result = addition_calculator(input1, input2);
    printf("The result is: %d", addition_result);


}

int addition_calculator(int value1, int value2)
{
    if (value1 && value2)
    {
        int result = value1 + value2;
        return result;
    }
    else
    {
        return -1;
    }
}