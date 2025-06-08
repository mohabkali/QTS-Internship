

bool succesfulConversion = Converter.TryParseInteger("123", out int validOutput);
bool unsucessfulConversion = Converter.TryParseInteger("abc", out int invalidOutput);

if (succesfulConversion)
{
    Console.WriteLine(validOutput);
}
else
{
    Console.WriteLine("Failed");
}

if (unsucessfulConversion)
{
    Console.WriteLine(invalidOutput);
}
else
{
    Console.WriteLine("Failed");
}


class Converter
{
    public static bool TryParseInteger(string input, out int result)
    {

        return int.TryParse(input, out result);
    }

}