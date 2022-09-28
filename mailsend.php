<?php
    $errors = '';
    $myemail = 'assumptionconsby@gmail.com';//<-----Put Your email address here.
    if(empty($_POST['txtName'])  ||
       empty($_POST['txtEmail']) ||
       empty($_POST['txtContactNo']) ||
       empty($_POST['txtSubject']) ||
       empty($_POST['txtDescription']))
    {
        $errors .= "\n Error: all fields are required";
    }
    $name = $_POST['txtName'];
    $email_address = $_POST['txtEmail'];
    $contact = $_POST['txtContactNo'];
    $place = $_POST['txtSubject'];
    $description = $_POST['txtDescription'];
    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address))
    {
        $errors .= "\n Error: Invalid email address";
    }
    
    if( empty($errors))
    {
    $to = $myemail ;
    $email_subject = "Contact form submission: $name";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Name: $name \n ".
    "Email: $email_address\n contact No: $contact\n".
    "Place: $place\n Message : $description";

    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    header('Location: contact.html');
    }
    ?>