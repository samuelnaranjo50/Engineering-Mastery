#include <stdio.h>
int main()
{
    //lift off simulation using a for loop
    for(int index = 10; index >= 0; index--)
    {
        printf("Time left before lauch: %d \n", index);
    }
    printf("Liftoff! 🚀");
}