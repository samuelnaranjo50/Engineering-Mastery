#include <stdio.h>
#include <string.h> 
int main()
{

    printf("This is your task app\n");
    printf("Your commands are: \n Add task (1 | display all (2) | close the app (3)");


    int show_app = 1;
    int user_input;
    int app_running = 1;
    char task_storage[10][100];
    int task_number = -1;
    char temporary_task[100];




    while (app_running == 1)
    {
        printf("\nCommand: ");
        scanf(" %d", &user_input);
        //fgets(user_input, sizeof(user_input), stdin);

        switch (user_input)
        {
        case 1: //add task

                do
                {
                    printf("task number to add or modify: ");
                    scanf("%d", &task_number);
                } while (task_number < 1 || task_number > 10);

                while (getchar() != '\n');  // Flush the newline left in buffer

                printf("Task name: ");
                fgets(temporary_task, sizeof(temporary_task), stdin);

                strcpy(task_storage[task_number], temporary_task);

                break;
                
        case 2:

           show_app = 0;          
           while (show_app == 0)
           {
                for (int i = 1; i < 10; i++)
                {
                    printf("this your tasks #%d: %s \n",i, task_storage[i]);
                } 
                show_app = 1;
           }
           break;

        case 3:
           printf("\nThis command will stop the app");
           app_running = 0;
           break;
        
        default:
            printf("The command doesn't exist");
            break;
        }
    }

    

    
}