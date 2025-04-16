#include <stdio.h>

int main()
{
    char name[40];

    printf("What is your name: ");
    fgets(name, sizeof(name), stdin);

    printf("Hello, %s. Have a nice day!", name);

    return 0; //indicates success

}