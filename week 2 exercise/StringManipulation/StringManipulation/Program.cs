string name = "@ Mohab Ali 1";

StringManipulation.AnalyzeString(name);



public class StringManipulation
{
    public static void AnalyzeString(string text)
    {
        int upperCount = 0;
        int lowerCount = 0;
        int digits = 0;
        int spaces = 0;
        int specialCharac = 0;

        foreach (char c in text)
        {
            if (char.IsUpper(c))
            {
                upperCount++;
            }
        }
        Console.WriteLine($"Upper Case Letters are {upperCount}");

        foreach (char c in text)
        {
            if (char.IsLower(c))
            {
                lowerCount++;
            }
        }
        Console.WriteLine($"Lower Case Letters are {lowerCount}");

        foreach (char c in text)
        {
            if (char.IsDigit(c))
            {
                digits++;
            }
        }
        Console.WriteLine($"Digits are {digits}");

        foreach (char c in text)
        {
            if (char.IsWhiteSpace(c))
            {
                spaces++;
            }
        }
        Console.WriteLine($"Spaces are {spaces}");


        foreach (char c in text)
        {
            if (!char.IsLetterOrDigit(c) && !char.IsWhiteSpace(c))
            {
                specialCharac++;
            }
        }
        Console.WriteLine($"Special Characters are {specialCharac}");

    }
}