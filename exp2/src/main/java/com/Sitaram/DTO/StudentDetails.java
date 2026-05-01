package com.Sitaram.DTO;
import java.util.Scanner;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StudentDetails {
    String Name ;
    String Rollno ;
    String Div ;
    String STD;

   public void input(){
            Scanner obj = new Scanner(System.in);
            System.out.println("Enter You name : ");
            Name = obj.nextLine();
            System.out.println("Enter You Rollno : ");
            Rollno = obj.nextLine();
            System.out.println("Enter You Div : ");
            Div = obj.nextLine();
            System.out.print("Enter You STD : ");
            STD = obj.nextLine();
             obj.close();
    }
    public void output(){
        System.out.println(" name : "+Name);
        System.out.println(" Rollno : "+Rollno);
        System.out.println(" Div : "+Div);
        System.out.println(" STD : "+STD);
    }

}
