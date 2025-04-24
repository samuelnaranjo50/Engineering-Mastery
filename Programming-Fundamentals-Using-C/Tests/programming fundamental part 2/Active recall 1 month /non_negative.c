#include <stdio.h>

int main()
{

    int number = 0;

    do
    {
        printf("What's the number: ");
        scanf("%d", &number);
    } while (number < 0);
    
    printf("Thank you!");

}
