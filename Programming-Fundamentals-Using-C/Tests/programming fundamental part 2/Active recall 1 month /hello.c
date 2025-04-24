#include <stdio.h>

int main ()
{
    char name[30];

    printf("What`s your name: ");
    fgets(name, sizeof(name), stdin);
    printf("Hello, %s!", name );
    

}