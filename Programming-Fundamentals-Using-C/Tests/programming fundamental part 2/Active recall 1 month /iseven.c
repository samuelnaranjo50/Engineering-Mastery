#include <stdio.h>

int isEven(int num);

int main()
{

    

    for (int i = 0; i <= 10; i++)
    {
        int boolean = isEven(i);

        if (boolean == 1)
        {
            printf("Even number: %d \n", i);
        }
        
    }
    

}

int isEven(int num)
{
    int result = num / 2;

    int integer_value = 2 * result;

    int remainder = num -  integer_value;

    if (remainder > 0)
    {
        return 0;
    }
    else
    {
        return 1;
    }
    
}