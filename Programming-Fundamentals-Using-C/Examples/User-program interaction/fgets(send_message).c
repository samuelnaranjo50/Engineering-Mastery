#include <stdio.h>

int main()
{
    char message_world[100];

    printf("What message do you want to send to the world?: ");
    fgets( message_world, sizeof(message_world), stdin);

    printf("hey world! %s", message_world);
}