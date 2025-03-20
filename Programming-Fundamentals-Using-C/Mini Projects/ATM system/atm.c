# include <stdio.h>

void balance (float withdraw_count , float deposited_money, float account_money);

void withdraw_money(float withdraw_limit, float withdraw_count, float withdraw_request, float account_money);

void deposit_money (float deposit_request, float account_money);

int main ()
{


}

void balance (float withdraw_count ,float deposited_money, float account_money)
{
    printf("Withdrawn today: %f", withdraw_count);
    printf("Deposited today: %f", deposited_money);
    printf("Total money in the account: %f", account_money);
}

void withdraw_money(float withdraw_limit, float withdraw_count, float withdraw_request, float account_money)
{
    if (withdraw_count >= withdraw_limit)
    {
        printf("Withdraw limit reach: %f \n Today you withdraw %f",withdraw_limit, withdraw_count);
    }

    float validate_withdraw_limit = withdraw_count + withdraw_request;

    if (validate_withdraw_limit >= withdraw_request)
    {
        printf("the withdraw attempt exceeds the limit %f", withdraw_limit);

        int withdraw_availability = withdraw_limit - withdraw_count;

        printf("Money available for withdraw today:  %f", withdraw_availability);
        printf("Try the withdraw again, with the quantity allowed by the limit");
    }
    else if (withdraw_request > account_money)
    {
        printf("Not sufficient founds for this transaction! ");
    }
    else
    {
        account_money =- withdraw_request;
        withdraw_count =+ withdraw_request;

        printf(" The withdraw of %f was a successful operation", withdraw_request);
    }
}
