<?php


    $json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$fname = $obj['fname'];
    $lname = $obj['lname'];
    $email = $obj['email'];
    $phoneno = $obj['phoneno'];
	$msg = $obj['msg'];
	$txt = "----------------------------------------------------------------------------------------------------------------------------------";
	$date = date("m/d/y : H:i:s");
	
	
	$myfile = fopen("cus.txt", "a");
	fwrite($myfile, "\r\n");
	fwrite($myfile, $txt);
	fwrite($myfile, "\r\n");
	fwrite($myfile, $txt);
	fwrite($myfile, "\r\n");
	fwrite($myfile, $date);
	fwrite($myfile, "\r\n");
	fwrite($myfile, "\n". $fname);
	fwrite($myfile, "\r\n");
	fwrite($myfile, "\n". $lname);
	fwrite($myfile, "\r\n");
	fwrite($myfile, "\n". $email);
    fwrite($myfile, "\r\n");
    fwrite($myfile, "\n". $phoneno);
	fwrite($myfile, "\r\n");
	fwrite($myfile, "\n". $msg);
	fwrite($myfile, "\r\n");
	fwrite($myfile, $txt);
	fwrite($myfile, "\r\n");
	fwrite($myfile, $txt);
	fwrite($myfile, "\r\n");
	fwrite($myfile, "\r\n");
	fwrite($myfile, "\r\n");
	fclose($myfile);
	
	
?>
