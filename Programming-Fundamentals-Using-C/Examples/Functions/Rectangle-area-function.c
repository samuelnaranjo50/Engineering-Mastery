#include <stdio.h>

rectangle_area(length, width)
{
    int area = width * length;
    return area;
}
int main()
{
    int length_input;
    int width_input;
    int area_output;

    printf("What is the length: ");
    scanf("%d", &length_input);
    printf("What is the width: ");
    scanf("%d", &width_input);
    area_output = rectangle_area(length_input, width_input);
    printf("The area of the rectangle is: %d", area_output);
}