
import java.util.Scanner;

class NoItemsFound extends Exception {

    public NoItemsFound(String msg) {
        super(msg);
    }

    public static void notFoundException() throws NoItemsFound {
        throw new NoItemsFound("Item not available");
    }
}

public class GroceryShop {

    private static int[] addInt(int[] Arr, int value) {

        int[] copyarr = new int[Arr.length + 1];

        for (int i = 0; i < copyarr.length; i++) {
            if (i == (copyarr.length - 1)) {
                copyarr[i] = value;
            } else {
                copyarr[i] = Arr[i];
            }
        }
        return copyarr;

    }

    private static String[] addString(String[] Arr, String value) {

        String[] copyarr = new String[Arr.length + 1];

        for (int i = 0; i < copyarr.length; i++) {
            if (i == (copyarr.length - 1)) {
                copyarr[i] = value;
            } else {
                copyarr[i] = Arr[i];
            }
        }
        return copyarr;

    }

    private static float[] addFloat(float[] Arr, float value) {

        float[] copyarr = new float[Arr.length + 1];

        for (int i = 0; i < copyarr.length; i++) {
            if (i == (copyarr.length - 1)) {
                copyarr[i] = value;
            } else {
                copyarr[i] = Arr[i];
            }
        }
        return copyarr;

    }

    private static void searchItem(String item, String[] itemsArray) {

        Boolean isFound = false;

        for (int i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i].equalsIgnoreCase(item)) {
                isFound = true;
                System.out.printf("Item %s found at index: %d \n", itemsArray[i], i);
            }

        }

        //If the 'item' was not found in the array print 'not found'
        if (!isFound) {
            System.out.println("Item not found");
        }
    }

    private static void calculateAverage(float[] collectionOfPrices) {

        float totalAmount = 0.00f;
        float average = 0f;
        for (Float individualPrice : collectionOfPrices) {
            totalAmount += individualPrice;
        }

        average = totalAmount / collectionOfPrices.length;

        System.out.println("This is the average price of our products: " + average);
    }

    private static void filterItemsBelowPrice(String[] collectionOfItems, float[] collectionOfPrices, float price) {
        String[] itemsSorted = {};
        int[] itemsSortedIndex = {};

        // Filtering Index Based on Mapped prices
        for (int i = 0; i < collectionOfItems.length; i++) {
            if (collectionOfPrices[i] < price) {
                itemsSortedIndex = addInt(itemsSortedIndex, i);
            }
        }

        // Filtering Items Based on Mapped prices
        for (int index : itemsSortedIndex) {
            itemsSorted = addString(itemsSorted, collectionOfItems[index]);
        }

        //Printing elements that match search criteria
        for (String product : itemsSorted) {
            System.out.println(product);
        }
    }

    public static void main(String arg[]) {
        String[] availableProducts = {
            "Milk",
            "Eggs",
            "Bread",
            "Chicken Breast",
            "Rice",
            "Apples",
            "Spinach",
            "Coffee",
            "Pasta",
            "Olive Oil"
        };

        float[] buyListPrices = {
            3.50f, // Milk
            2.99f, // Eggs
            1.50f, // Bread
            8.75f, // Chicken Breast
            2.20f, // Rice
            4.00f, // Apples
            2.50f, // Spinach
            12.90f, // Coffee
            1.10f, // Pasta
            7.40f // Olive Oil
        };

        int[] productStock = {
            2, // Milk (Low stock)
            0, // Eggs (OUT OF STOCK - Test your error logic here!)
            1, // Bread (Buy one, then it's gone)
            3, // Chicken Breast
            0, // Rice (OUT OF STOCK)
            5, // Apples
            1, // Spinach (Critical low)
            2, // Coffee
            4, // Pasta
            1 // Olive Oil
        };

        int[] shoppingCartIds = {};
        float[] priceCollection = {};
        float totalBill;
        int indexItemSelected;

        // New scanner object
        Scanner scanner = new Scanner(System.in);

        while (true) {

            String commandOperations;  // Listen for any input

            System.out.printf("Commands -> \n'Add': adds to your cart \n'Search': Look for item position \n'Average': Look for item position \n'Below': Print products below certain price \n'Stock': To check items availability \n'Finish': Cheackout and stop the program\n");
            System.err.printf("Insert Command: ");
            commandOperations = scanner.nextLine();

            if (commandOperations.equalsIgnoreCase("Finish")) {
                totalBill = 0f;
                for (float individualPrice : priceCollection) {
                    totalBill += individualPrice;
                    System.out.println("Adding price: " + individualPrice);
                }
                System.out.println("Total Bill: " + totalBill);
                break;
            };

            if (commandOperations.equalsIgnoreCase("Search")) {
                System.out.printf("What are you searching: ");
                commandOperations = scanner.nextLine();
                searchItem(commandOperations, availableProducts);
            }

            if (commandOperations.equalsIgnoreCase("Average")) {

                calculateAverage(buyListPrices);
            }

            if (commandOperations.equalsIgnoreCase("Below")) {
                System.out.printf("Filter items below: ");
                float filterPrice = scanner.nextFloat();
                filterItemsBelowPrice(availableProducts, buyListPrices, filterPrice);
            }

            if (commandOperations.equalsIgnoreCase("Stock")) {
                for (int i = 0; i < productStock.length; i++) {
                    System.out.printf("'%d' items of %s \n", productStock[i], availableProducts[i]);
                }
            };

            if (commandOperations.equalsIgnoreCase("Add")) {

                System.out.printf("What item do you want to add to your cart: ");
                commandOperations = scanner.nextLine();

                try {
                    Boolean isFound = false;

                    // Checking Avaliable items to and index to add
                    for (int i = 0; i < availableProducts.length; i++) {
                        isFound = availableProducts[i].equalsIgnoreCase(commandOperations);
                        //System.out.println("Current product iteration: " + availableProducts[i]);
                        if (isFound) {
                            System.out.println("Item Found");

                            // Logic for stock availability
                            if (productStock[i] > 0) {
                                //Getting the product amount
                                System.out.printf("How many %s do you want: ", availableProducts[i] );
                                int productQuantity = scanner.nextInt();

                                // Reducing stock based on current index found
                                if (productStock[i] >= productQuantity) {
                                    productStock[i] = productStock[i] - productQuantity;

                                    for (int j = 0; j < productQuantity; j++) {

                                        shoppingCartIds = addInt(shoppingCartIds, i);
                                        priceCollection = addFloat(priceCollection, buyListPrices[i]);

                                        System.out.printf("Adding item %s with cost of: %f\n", availableProducts[i], buyListPrices[i]);
                                    }
                                } else {
                                    System.out.printf("Try with a lower amount, current stock of %s is: %s \n", availableProducts[i], productStock[i]);
                                }

                            } else {
                                System.out.printf("Sorry, no %s available \n", availableProducts[i]);
                            }

                            break;
                        }
                    }

                    if (isFound == false) {
                        NoItemsFound.notFoundException();
                    }

                } catch (Exception err) {
                    System.out.println(err.getMessage());
                }

            }

        }

        scanner.close();

    }
}
