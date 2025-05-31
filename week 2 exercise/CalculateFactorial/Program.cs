Console.WriteLine("Please enter a number:");
string input = Console.ReadLine();
if (int.tryParse(input, out num) && num > 0)
{
    Calculate.CalculateFactorial(num);
}
else {
    Console.WriteLine("Please enter a valid numbber")
}


public class Calculate
{
    public static long CalculateFactorial(int number)
    {
        long factorial = 1;
        if (number > 20)
        {
            Console.WriteLine("Number is too Large to Compute")
            return -1;
        }
    }
        else{
            for (int i =1; i <= number; i+ ){
                factorial *= i;
                return factorial;
            }
        Console.WriteLine("Factorial is " + factorial);
        }
    }

