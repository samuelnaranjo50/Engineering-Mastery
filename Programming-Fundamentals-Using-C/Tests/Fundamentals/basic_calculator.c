#include <stdio.h>


float calculator (float value1, char symbol, float value2);
int check_symbol (char symbol);

int main ()
{
    int app_running = 1;
    int type_of_input;

    float value_1;
    char operator_c;
    float value_2;

    int valid_operator; 

    float operation_result;

    while (app_running == 1)
    {
       do
       {
        printf("Operation(1) | exit(2) \n");
        printf("Command number: ");
        scanf("%d", &type_of_input);
       } while (type_of_input <= 0 || type_of_input >= 3);

       switch (type_of_input)
       {
       case 1:
         do
         {
            printf("Value | symbol | value      1 + 1\n");
            printf("Operation\n");
            printf("Value 1: ");
            scanf("%f",&value_1);
            printf("\n");
            printf("Operator: ");
            scanf(" %c", &operator_c);

            valid_operator = check_symbol(operator_c);

            if (valid_operator == 1)
            {
                printf("\n");
                printf("Value 2: ");
                scanf(" %f",&value_2);
            }

         } while (!value_1 && !value_2 && valid_operator == 0);

         operation_result = calculator(value_1, operator_c, value_2);

         printf("Result: %.2f for %.2f %c %.2f \n", operation_result, value_1, operator_c, value_2);
        
        break;
       case 2:
        app_running = 0;
        break;
       
       default:
        break;
       }
       
    }
    




}

int check_symbol (char symbol)
{
    if (symbol == '*' || symbol == '/' || symbol == '+' || symbol == '-')
    {
        return 1;
    }
    else
    {
        printf("Unsuccessful operation, symbol not supported, try again");
        return 0;
    }
}


float calculator (float value1, char symbol, float value2)
{
    float result;

    if (symbol == '*')
    {
        result = value1 * value2;
        return result;
    }
    else if (symbol == '/')
    {
        result = value1 / value2;
        return result;
    }
    else if (symbol == '+')
    {
        result = value1 + value2;
        return result;
    }
    else if (symbol == '-')
    {
        result = value1 - value2;

        return result;
    }

}
