#include <stdio.h>
#include <string.h>

int main()
{

    char vowels[5] = {'a', 'e', 'i', 'o', 'u'};
    
    char text[50];

    printf("Text: ");
    fgets(text, sizeof(text), stdin);

    int vowels_count = 0;;

    for (size_t i = 0; i < 50; i++)

    {

        for (size_t y = 0; y < 5; y++)
        {
            if (text[i] == vowels[y])
            {
                vowels_count += 1;
            }
            
        }
    }
    

    printf("Number of vowels: %d", vowels_count);  

}