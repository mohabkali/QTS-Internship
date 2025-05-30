

using System.Collections;


int studScore=0;
int studAttendance = 0;
bool isConverted = true;
Console.WriteLine("Please enter your score:");
isConverted = int.TryParse(Console.ReadLine(), out studScore);
if (isConverted && studScore < 100 && studScore > 0)
{

}
else
{
    Console.WriteLine("Please enter a valid score");
    return;
}

Console.WriteLine("Please enter attendance percentage:");
isConverted= int.TryParse(Console.ReadLine(), out studAttendance);

if (isConverted && studAttendance < 100 && studAttendance > 0)
{
}
else
{
    Console.WriteLine("Please enter a valid attendance score");
    return;
}

string grade = StudentApp.CalculateGrade(studScore, studAttendance);
Console.WriteLine("Result:" + grade);

public class StudentApp
{

    public static string CalculateGrade(int studScore, int studAttendance)
    {
        if (studScore >= 90 && studAttendance >= 80)
        {
            return "A";
        }
        else if (studScore >= 80 && studAttendance >= 70)
        {
            return "B";
        }
        else if (studScore >= 70 && studAttendance >= 60)
        {
            return "C";
        }
        else if (studScore >= 60 && studAttendance >= 50)
        {
            return "C";
        }
        else if (studScore >= 60 && studAttendance >= 50)
        {
            return "D";
        }
        else if (studScore < 60 && studAttendance < 50)
        {
            return "F";
        }
        else if (studScore >= 50 && studAttendance < 50)
        {
            return "Incomplete";
        }
        else
        {
            return "Invalid Input";
        }
    }
}