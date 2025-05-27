public class Car {
    String make, model;
    int year;
    public Car(String make, String model, int year) {
        this.make = make; this.model = model; this.year = year;
    }
    public void displayDetails() {
        System.out.println(year + " " + make + " " + model);
    }
}