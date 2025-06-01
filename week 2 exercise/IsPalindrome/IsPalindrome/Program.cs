Console.WriteLine("Please enter text:");
string userText = Console.ReadLine();
bool output = StringManipulation2.IsPalindrome(userText);
Console.WriteLine($"Text Palindrome: {output}");

public class StringManipulation2
{

    public static Boolean IsPalindrome(string text)
    {
        string cleaned = text.Replace(" ", "").ToLower();

        int left = 0;
        int right = cleaned.Length - 1;
        while (left < right)
        {
            if (cleaned[left] != cleaned[right])
            {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
