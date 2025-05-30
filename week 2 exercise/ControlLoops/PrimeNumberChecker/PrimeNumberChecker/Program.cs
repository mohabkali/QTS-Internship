using System.Net;

while (true)
{

    Console.WriteLine("Please enter a number:");
    string input = Console.ReadLine();
    
    if (!int.TryParse(input, out int numb))
    {
        {
            Console.WriteLine("Invalid Input");
            continue;
        }
    }
    
    int a = 2;
    while (a <= numb)
    {
        if (CheckPrime.IsPrime(a))
        {
            Console.WriteLine($"{a} is a Prime Number");
        }
        else
        {
            Console.WriteLine($"{a} is not a Prime Number");
        }
        a++;
    }
}

public class CheckPrime
{

    public static bool IsPrime(int userNumber)
    {
        if (userNumber <= 1) return false;
        if (userNumber == 2) return true;

        int boundary = (int)Math.Floor(Math.Sqrt(userNumber));

        for (int i = 2; i <= boundary; i++)
        {
            if (userNumber % i == 0)

                return false;
            break;
        }
        return true;

    }
}
