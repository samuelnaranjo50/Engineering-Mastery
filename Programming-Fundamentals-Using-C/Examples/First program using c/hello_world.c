#include<stdio.h>

int main()
{
    char first_name[11];
    int current_age;

    printf("Program to know your age next year \n");

    printf("What is your name: ");
    scanf("%s", &first_name);

    printf("How old are you : ");
    scanf("%d", &current_age);

    int future_age = current_age + 1; 

    printf("Hi %s, I`m Samu coder your favorite developer. Next year you will be %d years old ", first_name, future_age);

    return 0; 
}