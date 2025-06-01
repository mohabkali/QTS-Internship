Console.WriteLine("Please enter a sentence:");
string sentence = Console.ReadLine();

string reveredSentence = StringManipulation3.ReverseWords(sentence);
Console.WriteLine(reveredSentence);
public class StringManipulation3
{
    public static string ReverseWords(string text)
    {
        string[] words = text.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        Array.Reverse(words);
        return string.Join(" ", words);

    }
}
