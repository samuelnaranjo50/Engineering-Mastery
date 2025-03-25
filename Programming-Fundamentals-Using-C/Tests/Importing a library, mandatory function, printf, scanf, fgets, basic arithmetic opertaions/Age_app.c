#include<stdio.h>

int main()
{
    char first_name[11];
    int current_age;
    int current_year;
    int future_year;
    int future_age; 
    char message[100];


    printf("Program to know your age in X years \n");

    printf("What is your name: ");
    scanf("%s", &first_name);

    printf("How old are you : ");
    scanf("%d", &current_age);

    printf("What year are we at?: ");
    scanf("%d", &current_year);

    


    printf("In which future year would you like to know the age you will be, (ex 2100): "); // How old in which year
    scanf("%d", &future_year);

    getchar(); // Clear leftover newline from buffer

    printf("Send a message to your future self: ");
    fgets(message, sizeof(message), stdin);


    int years_difference = future_year - current_year;
    
    future_age = current_age + years_difference;




    printf("Hi %s, I`m Samu coder your favorite developer. In the year %d,  you will be %d years old ", first_name, future_year, future_age);
    printf("\n Hey, future self! %s", message );

    return 0; 
}