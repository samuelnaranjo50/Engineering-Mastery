# include <stdio.h>
# include <string.h>

void balance (float *withdraw_count , float *deposited_money, float *account_money);

void withdraw_money(float *withdraw_limit, float *withdraw_count, float *withdraw_request, float *account_money);

void deposit_money (float *deposit_request, float *account_money, float *deposited_money);
   
int main ()
{

    float withdraw_count_today = 0;
    float withdraw_limit_of_day = 2500;
    float withdraw_request_m;
    float deposited_money_today = 0;
    float deposit_request;
    float money_in_the_account = 10000;

    int app_running = 0;
    int instructions = -1;

    printf("WELCOME TO SAM ATM! \n");
    int pin = 1234;
    int user_pin;

    printf("Enter your PIN: ");
    scanf("%d", &user_pin);

    if (pin != user_pin)
    {
        printf("Incorect password ");
        app_running = 1;
    }


    //Run the app

    while (app_running == 0)
    {
        // Listen for the intructions
        while (instructions < 1 || instructions > 4)
        {
            printf("\nINTRUCTIONS \n\n");
            printf("This are your commands: Check your balance (1) | Withdraw money (2) | Deposit money (3) | Close the ATM (4) \n");
            printf("Comand: ");
            scanf(" %d", &instructions);
            while (getchar() != '\n');
            printf("\n");
        }

        switch (instructions)
        {
        case 1:
            balance (&withdraw_count_today , &deposited_money_today, &money_in_the_account);
            instructions = -1;
            break;
        case 2:
            printf("How much money you want to withdraw: ");
            scanf("%f", &withdraw_request_m);
            while (getchar() != '\n');
            withdraw_money(&withdraw_limit_of_day, &withdraw_count_today, &withdraw_request_m, &money_in_the_account);
            balance (&withdraw_count_today , &deposited_money_today, &money_in_the_account);
            instructions = -1;

            break;
        case 3:
            printf("How much money you want to deposit: ");
            scanf("%f", &deposit_request);
            deposit_money (&deposit_request, &money_in_the_account, &deposited_money_today);
            instructions = -1;
            break;
        case 4:
            app_running = 1;
            printf("THANK YOU FOR TRUSTING IN SAM ATM.  GOOD BYE!");
            break;
        
        default:
            break;
        }
        
    }
    

    user_

}

void balance (float *withdraw_count ,float *deposited_money, float *account_money)
{
    printf("Withdrawn today: %f \n", *withdraw_count);
    printf("Deposited today: %f \n", *deposited_money);
    printf("Total money in the account: %f \n", *account_money);
}

void withdraw_money(float *withdraw_limit, float *withdraw_count, float *withdraw_request, float *account_money)
{
    if (*withdraw_count > *withdraw_limit)
    {
        printf("Withdraw limit reach: %f \n Today you withdraw %f \n", *withdraw_limit, *withdraw_count);
    }

    float validate_withdraw_limit = *withdraw_count + *withdraw_request;

    if (validate_withdraw_limit > *withdraw_limit)
    {
        printf("the withdraw attempt exceeds the limit %f \n", *withdraw_limit);

        float withdraw_availability = *withdraw_limit - *withdraw_count;

        printf("Money available for withdraw today:  %f \n", withdraw_availability);
        printf("Try the withdraw again, with the quantity allowed by the limit \n");
    }
    else if (*withdraw_request > *account_money)
    {
        printf("Not sufficient founds for this transaction! \n");
    }
    else
    {
        *account_money = *account_money - *withdraw_request;

        printf("account money is: %f", *account_money); //debugging

        *withdraw_count = *withdraw_count + *withdraw_request;

        printf(" The withdraw of %f was a successful operation \n", *withdraw_request);
    }
}

void deposit_money (float *deposit_request, float *account_money, float *deposited_money)
{
    char validate_deposit[5] = "";

    do
    {
        
        printf("Is the amount to deposit correct: %.2f\n", *deposit_request);
        printf("Type: yes | no \n");
        printf("Command: ");
        fgets(validate_deposit, sizeof(validate_deposit), stdin);
        // Remove newline character from fgets()
        validate_deposit[strcspn(validate_deposit, "\n")] = 0;
    }
    while (strcmp(validate_deposit, "yes") != 0 && strcmp(validate_deposit, "no") != 0 );

    if (strcm(validate_deposit, "yes") == 0)
    {
        *deposited_money += *deposit_request;

        *account_money += *deposit_request;

        printf("Deposit of %f was a successful operation", *deposit_request);
    }
    else
    {
        printf("Deposit cancel, try again! ");
    }
    
    
}
