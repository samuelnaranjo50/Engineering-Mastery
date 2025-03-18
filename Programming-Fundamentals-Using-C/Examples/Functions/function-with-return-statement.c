#include <stdio.h>
#include <string.h>

int stringToBool (char boolean_value[])
{
    if(strcmp(boolean_value, "true") == 0)
    {
        return 0;
    }
    else if(strcmp(boolean_value, "false") == 0)
    {
        return 1;
    }
    else
    {
        return -1;
    }

}

int main()
{
    int true = stringToBool("true");
    int false = stringToBool("false");
    printf("true is = %d \n false is = %d", true, false);
}