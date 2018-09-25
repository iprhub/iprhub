<?php
    header("Access-Control-Allow-Headers: Authorization, Content-Type");
    header("Access-Control-Allow-Origin: *");
    header('content-type: application/json; charset=utf-8');
    $json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$fname = $obj['firstName'];
    $lname = $obj['lastName'];
    $email = $obj['email'];
    $phoneno = $obj['phoneNo'];
	$msg = $obj['msg'];
	$txt = "----------------------------------------------------------------------------------------------------------------------------------";
	$date = date("m/d/y : H:i:s");
	
	
	$myfile = fopen("../customersData.txt", "a");
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
