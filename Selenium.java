//Selenium Code to test 
package TestPackage;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class NewTest {
    private WebDriver driver;

    @BeforeMethod
    public void setUp() {
        // Set up the WebDriver
        System.setProperty("webdriver.edge.driver", "C:\\Users\\pulki\\Downloads\\edgedriver_win64\\msedgedriver.exe");
        driver = new EdgeDriver();
        driver.manage().window().maximize();
       
    }

    @AfterMethod
    public void tearDown() {
        // Close the browser
        driver.quit();
    }


    
    // Test Case Scenario: Successful Registration
    @Test(dataProvider = "registrationData")
    public void testSuccessfulRegistration(String name, String email, String dob, String password, String phoneNumber) throws InterruptedException {
        // Open the registration page
        driver.get("http://localhost:3000/register");
        Thread.sleep(2000);

//        // Input registration details
        WebElement nameInput = driver.findElement(By.id("Regsgsg"));
        WebElement emailInput = driver.findElement(By.cssSelector("input[type='email']"));
        WebElement dobInput = driver.findElement(By.cssSelector("input[type='date']"));
        WebElement passwordInput = driver.findElement(By.cssSelector("input[type='password']"));
        WebElement confirmPasswordInput = driver.findElement(By.cssSelector("input[placeholder='Retype Password']"));
        WebElement phoneNumberInput = driver.findElement(By.cssSelector("input[type='tel']"));
        WebElement registerButton = driver.findElement(By.cssSelector("button.reggister_button"));

        nameInput.sendKeys(name);
        emailInput.sendKeys(email);
        dobInput.sendKeys(dob);
        passwordInput.sendKeys(password);
        confirmPasswordInput.sendKeys(password);
        phoneNumberInput.sendKeys(phoneNumber);

        if (name.isEmpty() || email.isEmpty() || dob.isEmpty() || password.isEmpty() || phoneNumber.isEmpty()) {
            // Display an alert if any field is missing
            System.out.println("Error: Please fill in all fields.");
            return; // Return without submitting the form
        }

        // Click on the register button
        registerButton.click();
        Thread.sleep(2000);
        System.out.println("Registration Successful");
        // Assertion for successful registration
        // You can add assertion here if needed
    }

    @DataProvider(name = "registrationData")
    public Object[][] getRegistrationData() {
        return new Object[][] {
            {"Rahul", "Rahul.saraf@yahoo.com", "1990-01-01", "unitedstates", "1234567890"},
            {"John Doe", "john.doe@example.com", "1990-01-01", "your_password", "1234567890"},
            {"John Doe", "john.doe@example.com", "", "your_password", ""},
        };
    }

    // Test Case Scenario: Successful Login
    @Test(dataProvider = "loginData")
    public void testSuccessfulLogin(String email, String password) throws InterruptedException {
        // Open the login page
        driver.get("http://localhost:3000/login");
        driver.manage().window().maximize();
        Thread.sleep(2000);

        // Input email and password
        WebElement emailInput = driver.findElement(By.cssSelector("input[type='email']"));
        WebElement passwordInput = driver.findElement(By.cssSelector("input[type='password']"));
        WebElement loginButton = driver.findElement(By.cssSelector("button.Logggin_button"));

        emailInput.sendKeys(email);
        passwordInput.sendKeys(password);
        if (email.isEmpty() || password.isEmpty()) {
            // Display an alert if any field is missing
            System.out.println("Error: Please fill in all fields.");
            return; // Return without submitting the form
        }
        // Click on the login button
        loginButton.click();
        Thread.sleep(2000);

        // Assertion for successful login
        // You can add assertion here if needed
    }

    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"Psaraf@gmail.com","123456"},
            {"john.doe@example.com", "your_password"},
            {"john.doe@example.com", ""},
            {"", "yourpassword"},
        };
    }
//
//    // Test Case Scenario: Contact Form Submission
    @Test(dataProvider = "contactFormData")
    public void testContactFormSubmission(String name, String email, String message) throws InterruptedException {
//        // Open the contact page
        driver.get("http://localhost:3000/contact");
        driver.manage().window().maximize();
        Thread.sleep(2000);
//
//        // Input contact form details
        WebElement nameInput = driver.findElement(By.cssSelector("input[name='name']"));
        WebElement emailInput = driver.findElement(By.cssSelector("input[name='email']"));
        WebElement messageInput = driver.findElement(By.cssSelector("textarea[name='message']"));
        WebElement submitButton = driver.findElement(By.cssSelector("button[type='submit']"));

        nameInput.sendKeys(name);
        emailInput.sendKeys(email);
        messageInput.sendKeys(message);

        // Click on the submit button
        submitButton.click();
        Thread.sleep(2000);
    }

    @DataProvider(name = "contactFormData")
    public Object[][] getContactFormData() {
        return new Object[][] {
            {"John Doe", "john.doe@example.com", "This is a test message for contact form submission."},
            // Add more test data here for different scenarios
        };
    }
    @Test
    public void testAddEvent() {
        // Navigate to the Dashboard
        driver.get("http://localhost:3000/dashboard");

        // Add event
        WebElement eventInput = driver.findElement(By.xpath("(//textarea)[2]"));
        eventInput.sendKeys("Test event");

        WebElement addButton = driver.findElement(By.xpath("//button[contains(text(),'Add Event')]"));
        addButton.click();

  
    }
    @Test
    public void testFormSubmission() {
        // Navigate to the ContactPage
        driver.get("http://localhost:3000/contact");

        // Fill in the form
        WebElement nameInput = driver.findElement(By.id("name"));
        nameInput.sendKeys("John Doe");

        WebElement emailInput = driver.findElement(By.id("email"));
        emailInput.sendKeys("john.doe@example.com");

        WebElement messageInput = driver.findElement(By.id("message"));
        messageInput.sendKeys("Test message");

        // Submit the form
        WebElement submitButton = driver.findElement(By.xpath("//button[text()='Send Message']"));
        submitButton.click();
    } 
    @Test
    public void testAddHotel() {
    // Navigate to the Add Hotel page
    driver.get("http://localhost:3000/add-hotel");

    // Fill in the form with valid data
    WebElement nameInput = driver.findElement(By.id("name"));
    nameInput.sendKeys("Test Hotel");

    WebElement priceInput = driver.findElement(By.id("price"));
    priceInput.sendKeys("100");

    WebElement roomsAvailableInput = driver.findElement(By.id("roomsAvailable"));
    roomsAvailableInput.sendKeys("10");

    WebElement locationInput = driver.findElement(By.id("location"));
    locationInput.sendKeys("Test Location");

    WebElement imageInput = driver.findElement(By.id("image"));
    imageInput.sendKeys("https://example.com/hotel_image.jpg");

    WebElement descriptionInput = driver.findElement(By.id("description"));
    descriptionInput.sendKeys("Test Description");

    // Submit the form
    WebElement addButton = driver.findElement(By.className("Add_hotel_button"));
    addButton.click();
    } 
    @Test
    public void testValidSubmission() {
    driver.get("http://localhost:3000/admin/add-parshad");

    // Fill in the form with valid data
    WebElement nameInput = driver.findElement(By.className("Testng121"));
    nameInput.sendKeys("Test Parshad");

    WebElement descriptionInput = driver.findElement(By.className("Testng122"));
    descriptionInput.sendKeys("Test Description");

    WebElement priceInput = driver.findElement(By.className("Testng123"));
    priceInput.sendKeys("10");

    WebElement quantityInput = driver.findElement(By.className("Testng124"));
    quantityInput.sendKeys("5");

    WebElement imageInput = driver.findElement(By.className("Testng125"));
    imageInput.sendKeys("https://example.com/image.jpg");

    // Submit the form
    WebElement addButton = driver.findElement(By.className("Testng126"));
    addButton.click();
  } 
    @Test
    public void testBookingProcess() {
        // Navigate to the booking page with the hotel ID
        driver.get("http://localhost:3000/book/662a8895f2a5c7fa9a63bf96");

        // Enter booking details
        WebElement checkInDateInput = driver.findElement(By.name("checkInDate"));
        checkInDateInput.sendKeys("2024-05-05");

        WebElement checkOutDateInput = driver.findElement(By.name("checkOutDate"));
        checkOutDateInput.sendKeys("2024-05-10");

        WebElement guestsInput = driver.findElement(By.name("guests"));
        guestsInput.sendKeys("2");

        // Proceed to checkout
        WebElement checkoutButton = driver.findElement(By.xpath("//button[text()='Checkout']"));
        checkoutButton.click();

        // Enter payment details and submit the form
        WebElement nameInput = driver.findElement(By.name("name"));
        nameInput.sendKeys("John Doe");

        // Enter other payment details
        WebElement addressInput = driver.findElement(By.name("address"));
        addressInput.sendKeys("123 Main Street");

        WebElement phoneInput = driver.findElement(By.name("phoneNo"));
        phoneInput.sendKeys("1234567890");

        WebElement pincodeInput = driver.findElement(By.name("pincode"));
        pincodeInput.sendKeys("12345");

        WebElement cardNumberInput = driver.findElement(By.name("cardNumber"));
        cardNumberInput.sendKeys("1234567890123456");

        WebElement cvvInput = driver.findElement(By.name("cvv"));
        cvvInput.sendKeys("123");

        WebElement expiryMonthInput = driver.findElement(By.name("expiryMonth"));
        expiryMonthInput.sendKeys("12");

        WebElement expiryYearInput = driver.findElement(By.name("expiryYear"));
        expiryYearInput.sendKeys("25");

        // Submit the payment form
        WebElement bookNowButton = driver.findElement(By.xpath("//button[text()='Book Now']"));
        bookNowButton.click();

    }
}
