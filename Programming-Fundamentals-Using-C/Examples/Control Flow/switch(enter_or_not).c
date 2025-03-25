#include <stdio.h>

int main()
{
    //Create a switch application 
    //that based on their age of a person tell them if they are allow to eneter to the primary club or not

    int grade;

    printf("What is your school grade: ");
    scanf(" %d", &grade);

    switch(grade)
    {
        case 1 : 
           printf("You are allowed to enter");
           break;
        case 2 : 
           printf("You are allowed to enter");
           break;
        case 3 : 
           printf("You are allowed to enter");
           break;
        case 4 : 
           printf("You are allowed to enter");
           break;
        case 5 : 
           printf("You are allowed to enter");
           break;
        default:
           printf("You are not allowed to enter X");
           break;
        
    }
    

}