<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Form'; 
    $to = 'admin@professionalamatuer.com';
    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
?>
