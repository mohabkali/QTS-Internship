double degreeC = 100;
double degreeF = 212;

double convertedC = TemperatureConverter.CelsiusToFahrenheit(degreeC);
double convertedF = TemperatureConverter.FahrenheitToCelsius(degreeF);


Console.WriteLine(convertedC);
Console.WriteLine(convertedF);

class TemperatureConverter
{

    private TemperatureConverter() { }

    public static readonly double ratio = 9.0 / 5.0;

    // Celsius to Fahrenheit
    public static double CelsiusToFahrenheit(double celsius)
    {
        return (celsius * ratio) + 32;
    }

    // Fahrenheit to Celsius
    public static double FahrenheitToCelsius(double fahrenheit)
    {
        return (fahrenheit - 32) / ratio;
    }
}
