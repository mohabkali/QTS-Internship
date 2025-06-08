
// object created with default constructor
Book defaultbook = new Book();
defaultbook.DisplayInfo();

// object created with parameterized constructor
Book parameterizedbook = new Book("Hello World", "Mohab Ali", "2025");
parameterizedbook.DisplayInfo();


class Book
{
    // Private Member Variables
    private string _title;
    private string _author;
    private string _publicationYear;


    // Default Constructor
    public Book()
    {
        _title = "Unkown";
        _author = "Unknown";
        _publicationYear = "Unkown";

    }

    // Parameterized Constructor
    public Book(string title, string author, string publicationYear)
    {
        _title = title;
        _author = author;
        _publicationYear = publicationYear;
    }
    // Display Infor Method
    public void DisplayInfo()
    {
        Console.WriteLine($"Title: {_title}");
        Console.WriteLine($"Author: {_author}");
        Console.WriteLine($"Publication Year: {_publicationYear}");
    }
}

