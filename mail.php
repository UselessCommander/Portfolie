<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['navn']; // Samler navn fra formular
    $email = $_POST['email']; // Samler email fra formular
    $subject = $_POST['emne']; // Samler emne fra formular
    $message = $_POST['besked']; // Samler besked fra formular

    $recipient = "gabrielvnlausten@gmail.com"; // Erstat med din e-mail
    $headers = "Fra: $email" . "\r\n" .
               "Svar-Til: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $fullMessage = "Modtaget fra: $name\nEmail: $email\n\n$message";

    // Send e-mail
    if(mail($recipient, $subject, $fullMessage, $headers)) {
        echo "Beskeden blev sendt!";
    } else {
        echo "Fejl, beskeden blev ikke sendt.";
    }
}
?>

