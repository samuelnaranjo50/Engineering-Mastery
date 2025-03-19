#include <stdio.h>

float grade_average(float grade_1, float grade_2, float grade_3);

char grade_letter(float average);

int main()
{

    printf("PROGRAM TO GET AVERAGE AND GRADE\n");

    float grade1;
    float grade2;
    float grade3;

 
    
    printf("Insert grade 1: ");
    scanf("%f", &grade1);

 

    printf("\nInsert grade 2: ");
    scanf("%f", &grade2);



    printf("\nInsert grade 3: ");
    scanf("%f", &grade3);

    

    float user_average = grade_average(grade1, grade2, grade3);

    printf("The Average is: %f \n", user_average);

    char grade = grade_letter(user_average);

    printf("The grade of the studfent is: %c \n", grade); 



}


float grade_average(float grade_1, float grade_2, float grade_3)
{

    int average = (grade_1 + grade_2 + grade_3) / (float) 3;
    return average;
}

char grade_letter(float average)
{
    char grade_char;

    if (average >= 90 && average<= 100)
    {
        grade_char = 'A';
    }
    else if (average >= 80 && average <= 89)
    {
        grade_char = 'B';
    }
    else if (average >= 70 && average <= 79)
    {
        grade_char = 'C';
    }
    else if (average >= 60 && average <= 69)
    {
        grade_char = 'D';
    }
    else if (average < 60)
    {
        grade_char = 'F';
    }

    return grade_char;
}