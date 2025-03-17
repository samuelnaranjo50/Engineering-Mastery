#include <stdio.h>

main ()
{
    printf("DISCO PARTY DOOR\n");

    int age;

    printf("what is your age: ");
    scanf("%d", &age);

    if(age >= 18)
    {
        printf("You are allowed to enter");
    }
    else
    {
        printf("You are not allowed to enter");
    }
    
}