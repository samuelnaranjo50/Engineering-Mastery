#include <stdio.h>

int main()
{
char name[15];
char neighborhood[20];

printf("What is your name? : ");
scanf("%s", &name);

printf("which is your country? : ");
scanf("%s", &neighborhood); 

printf("Warm welcome to my app! %s from %s ", name, neighborhood);

}