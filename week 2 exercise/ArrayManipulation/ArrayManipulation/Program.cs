int[] array = new int[10];

for (int i = 0; i < array.Length; i++)
{
    Console.WriteLine($"Please enter a {i + 1}th element");
    string input = Console.ReadLine();
    if (int.TryParse(input, out int parsedInput))
    {
        array[i] = parsedInput;
    }
    else
    {
        Console.WriteLine("Please enter a valid number");
    }

}

Console.WriteLine("You have entered:");
foreach (int num in array)
{
    Console.WriteLine(num);
}