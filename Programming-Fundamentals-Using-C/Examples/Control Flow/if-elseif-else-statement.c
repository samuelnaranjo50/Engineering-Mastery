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
    else if(age >= 7 && age <= 14)
    {
        printf("You are allowed to enter, Welcome to the kids party! ");
    }
    else
    {
        printf("You are not allowed to enter");
    }
    
}