#include <stdio.h>

int price_age_based (int user_age);

int main()
{
    int age;
    int price;

    printf("What is your age: ");
    scanf("%d", &age);

    price = price_age_based(age);

    printf("Your ticket cost is: %d", price);

    return 0;

}

int price_age_based (int user_age)
{
    int cost;

    if (user_age < 12)
    {
        cost = 5;
    }
    else if (user_age >= 12 && user_age <= 59)
    {
        cost = 10;
    }
    else
    {
        cost = 6;
    }

    return cost;
}