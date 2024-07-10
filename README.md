# week-1-code-challenge
1. Student Grade Generator(Toy problem)
Intro.
This program will accept student marks and produce a grade that represents those marks. Marks entered must be
between 0 and 100.

How it works
The program, when loaded, prompts the user to enter the student Marks. When the marks are entered, it runs the function studentMarks(). After running the function, it alerts the user the grade of the student.

The function(studentMarks())
The function takes the marks entered and processes the marks as follows.
79 - 100 = A
60 -  79 = B
49 -  59 = C
49 -  40 = D
0  -  40 = E

Results.
when the results are out, the program alerts the user with the Grade.
If the marks entered are below 0 and above 100, the user is alerted to enter a number between 0 and 100.

2. Speed Detector (Toy Problem)
Intro
The speed detector program takes in the speed of a car and returns either ok, demerit points collected or license suspended.

How it works
The program takes the speed of the car and processes through the function speedDetector().The speedDetector() function, for all speeds below 70, return OK. For speeds above 70, it calculates the number of demerit points. It awards 1 demerit point for every 5km/s over the speed limit of 70. When the demerit points collected are over 12, the license is suspended. 

Results 
when the results are out the user is alerted with either ok, demerit points collected or license suspended.

3. Net Salary Calculator(Toy Problem)
Intro
This program takes the salary and returns the net salary.
 
How it works
The program prompts the user to input the salary. It takes thee salary and calculates the tax, tax relief, nssf and nhif.
Tax is charged on taxable income, which is salary less the nssf. 
Net pay is then calculated, which is salary less tax paid(tax less tax relief), nssf and nhif 

Results
The program alerts the user, the net salary

