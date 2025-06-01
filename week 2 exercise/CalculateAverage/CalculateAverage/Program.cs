
int[] userInput = [3, 2, 1];

Calc.CalculateAverage(userInput);
Calc.FindMax(userInput);
Calc.FindMin(userInput);
Calc.SortArrayAscending(userInput);

public class Calc
{
    public static double CalculateAverage(int[] numbers)
    {
        int sum = 0;
        foreach (int num in numbers)
        {
            sum += num;
        }

        double average = sum / numbers.Length;

        Console.WriteLine($"The average is {average}");

        return average;

    }

    public static int FindMax(int[] numbers)
    {
        int max = numbers[0];

        foreach (int num in numbers)
        {
            if (num > max)
            {
                max = num;
            }
        }

        Console.WriteLine($"The maximum is {max}");
        return max;

    }

    public static int FindMin(int[] numbers)
    {
        int min = numbers[0];

        foreach (int num in numbers)
        {
            if (num < min)
            {
                min = num;
            }
        }

        Console.WriteLine($"The minimum is {min}");
        return min;
    }

    public static void SortArrayAscending(int[] numbers)
    {
        Console.WriteLine("Sorted array in ascending order:");
        BubbleSort(numbers);
        

    }

    static void BubbleSort(int[] arr)
    {
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
            foreach (int item in arr)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();
        }
    }

