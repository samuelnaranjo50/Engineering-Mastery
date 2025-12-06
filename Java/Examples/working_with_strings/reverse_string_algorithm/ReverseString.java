public class ReverseString {
	public static void main (String args[]){
		String word = "Samuel"; //Word to reverse
		String reverseWord = ""; // New string container to store and append the reversed chars
		int stringLenght = word.length();

		for (int i=stringLenght-1; i >= 0; i--){
			String currentChar = word.substring(i, (i+1)); //Using i & i + 1 to select one character at the time  
			reverseWord =reverseWord.concat(currentChar); //Concat method to append the string selected
		}

		System.out.println("This is the reversed word: " + reverseWord);
	}                  
}