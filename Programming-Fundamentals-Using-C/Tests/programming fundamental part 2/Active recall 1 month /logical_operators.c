#include <stdio.h>

int main ()
{
    int number = 10;
    int number_second = 2;

    if (number != 10 && number_second != 2)
    {
        printf("Your variables declarations are not working ")
    }
    else if (number == 10 || number_second == 2)
    {
        printf("One of your variables contains the expected value")
    }
    else if (number == 10 && number_second == 2)
    {
        printf("Your variables contain the expected value")
    }
    

}