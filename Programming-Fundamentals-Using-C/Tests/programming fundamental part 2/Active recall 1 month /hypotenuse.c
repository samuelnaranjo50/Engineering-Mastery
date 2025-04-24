#include <stdio.h>
#include <math.h>

float hypotenuse(float a, float b);
int main ()
{
}

float hypotenuse(float a, float b)
{
    float hypotenuse = sqrt(pow(a, 2.0) + pow(b, 2.0));

    return hypotenuse;
}